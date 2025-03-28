// 日本地図の描画を担当するファイル
let japanMapSvg;
let prefectures;
let aomoriPosition; // 青森県の位置
let fukuokaPosition; // 福岡県の位置
let okinawaFeature; // 沖縄県の地形データ

// 地図データを読み込み、描画する
async function loadJapanMap() {
    try {
        // 日本の地図データを取得
        const response = await fetch('https://raw.githubusercontent.com/dataofjapan/land/master/japan.topojson');
        const japanMapData = await response.json();
        
        // TopoJSONからGeoJSONに変換
        const japanGeoData = topojson.feature(japanMapData, japanMapData.objects.japan);
        
        // 沖縄県のデータを探す
        okinawaFeature = japanGeoData.features.find(feature => 
            feature.properties.nam_ja === '沖縄県' || 
            feature.properties.nam === 'Okinawa'
        );
        
        // 地図のサイズを設定
        const width = document.getElementById('japan-map').clientWidth;
        const height = document.getElementById('japan-map').clientHeight;
        
        // 投影法を設定
        const projection = d3.geoMercator()
            .center([137, 38])
            .scale(1600)
            .translate([width / 2, height / 2]);
        
        // パスジェネレータを作成
        const path = d3.geoPath().projection(projection);
        
        // SVG要素を作成
        japanMapSvg = d3.select('#japan-map')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        
        // 都道府県を描画
        prefectures = japanMapSvg.selectAll('path')
            .data(japanGeoData.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('class', 'prefecture')
            .attr('id', d => {
                // 都道府県名からIDを取得
                const prefName = d.properties.nam_ja;
                return getPrefectureId(prefName);
            })
            .attr('data-name', d => d.properties.nam_ja)
            .on('mouseover', function(event, d) {
                // ホバー時の処理
                const prefName = d.properties.nam_ja;
                highlightPrefecture(this, prefName);
            })
            .on('mouseout', function(event, d) {
                // ホバー解除時の処理
                d3.select(this).classed('highlight', false);
                
                // 都道府県名のラベルを非表示
                const prefName = d.properties.nam_ja;
                const prefId = getPrefectureId(prefName);
                const labelId = `label-${prefId}`;
                d3.select(`#${labelId}`).classed('visible', false);
            })
            .on('click', function(event, d) {
                // クリック時の処理
                const prefName = d.properties.nam_ja;
                selectPrefecture(prefName);
            });
        
        // 都道府県名のラベルを追加
        japanMapSvg.selectAll('text')
            .data(japanGeoData.features)
            .enter()
            .append('text')
            .attr('x', d => path.centroid(d)[0])
            .attr('y', d => path.centroid(d)[1])
            .attr('text-anchor', 'middle')
            .attr('font-size', '8px')
            .attr('pointer-events', 'none')
            .attr('class', 'prefecture-label')
            .attr('id', d => `label-${getPrefectureId(d.properties.nam_ja)}`)
            .text(d => d.properties.nam_ja);
        
        // 青森県と福岡県の位置を保存
        japanGeoData.features.forEach(feature => {
            if (feature.properties.nam_ja === '青森県') {
                aomoriPosition = path.centroid(feature);
            } else if (feature.properties.nam_ja === '福岡県') {
                fukuokaPosition = path.centroid(feature);
            }
        });
        
        // 沖縄県を追加（データから見つかった場合はそのシェイプを使用）
        addOkinawa(path, projection);
        
        // 初期の色を設定
        updateMapColors();
        
    } catch (error) {
        console.error('地図データの読み込みに失敗しました:', error);
    }
}

// 沖縄県を地図に追加する
function addOkinawa(path, projection) {
    if (!aomoriPosition || !fukuokaPosition) {
        console.error('青森県または福岡県の位置情報が取得できませんでした');
        return;
    }
    
    // 沖縄県の位置を設定（青森県と同じ縦位置、福岡県と同じ横位置）
    const okinawaX = fukuokaPosition[0];
    const okinawaY = aomoriPosition[1];
    
    let okinawa;
    
    if (okinawaFeature) {
        // 沖縄県の実際の形状データがある場合
        console.log('沖縄県の地形データが見つかりました');
        
        // 沖縄県の形状をコピーして新しい位置に移動
        const okinawaClone = JSON.parse(JSON.stringify(okinawaFeature));
        
        // 元の沖縄の中心点を計算
        const originalCentroid = path.centroid(okinawaFeature);
        
        // 移動量を計算
        const dx = okinawaX - originalCentroid[0];
        const dy = okinawaY - originalCentroid[1];
        
        // 拡大率を設定（1.2倍に拡大）
        const scale = 1.2;
        
        // 座標変換関数
        const transformCoordinates = coords => {
            return coords.map(point => {
                if (Array.isArray(point[0])) {
                    // ネストされた配列の場合は再帰的に処理
                    return transformCoordinates(point);
                } else {
                    // 座標を移動
                    const [x, y] = projection.invert([
                        (projection(point)[0] - originalCentroid[0]) * scale + okinawaX,
                        (projection(point)[1] - originalCentroid[1]) * scale + okinawaY
                    ]);
                    return [x, y];
                }
            });
        };
        
        // 座標を変換
        if (okinawaClone.geometry.type === 'Polygon') {
            okinawaClone.geometry.coordinates = okinawaClone.geometry.coordinates.map(ring => 
                transformCoordinates(ring)
            );
        } else if (okinawaClone.geometry.type === 'MultiPolygon') {
            okinawaClone.geometry.coordinates = okinawaClone.geometry.coordinates.map(polygon => 
                polygon.map(ring => transformCoordinates(ring))
            );
        }

        // 沖縄県のパスを追加
        okinawa = japanMapSvg.append('path')
            .datum(okinawaClone)
            .attr('d', path)
            .attr('class', 'prefecture')
            .attr('id', 'okinawa-clone')
            .attr('data-name', '沖縄県')
            .on('mouseover', function(event, d) {
                // ホバー時の処理
                highlightPrefecture(this, '沖縄県');
            })
            .on('mouseout', function(event, d) {
                // ホバー解除時の処理
                d3.select(this).classed('highlight', false);
                
                // 沖縄県のラベルを非表示
                d3.select('#label-okinawa-clone').classed('visible', false);
            })
            .on('click', function(event, d) {
                // クリック時の処理
                selectPrefecture('沖縄県');
            });
    } else {
        // 沖縄県のデータが見つからない場合は簡易的な形状を作成
        console.log('沖縄県の地形データが見つかりませんでした。簡易形状を使用します。');
        
        // 沖縄本島を模した形状を作成
        const okinawaWidth = 30;
        const okinawaHeight = 15;
        
        // 沖縄本島を表現する形状
        const okinawaShape = [
            [okinawaX - okinawaWidth/2, okinawaY - okinawaHeight/3],
            [okinawaX - okinawaWidth/4, okinawaY - okinawaHeight/2],
            [okinawaX + okinawaWidth/4, okinawaY - okinawaHeight/2],
            [okinawaX + okinawaWidth/2, okinawaY - okinawaHeight/4],
            [okinawaX + okinawaWidth/2, okinawaY + okinawaHeight/4],
            [okinawaX + okinawaWidth/4, okinawaY + okinawaHeight/2],
            [okinawaX - okinawaWidth/4, okinawaY + okinawaHeight/2],
            [okinawaX - okinawaWidth/2, okinawaY + okinawaHeight/3]
        ];
        
        // 沖縄県のパスを追加
        okinawa = japanMapSvg.append('path')
            .attr('d', d3.line()(okinawaShape))
            .attr('class', 'prefecture')
            .attr('id', 'okinawa-clone')
            .attr('data-name', '沖縄県')
            .on('mouseover', function(event, d) {
                // ホバー時の処理
                highlightPrefecture(this, '沖縄県');
            })
            .on('mouseout', function(event, d) {
                // ホバー解除時の処理
                d3.select(this).classed('highlight', false);
                
                // 沖縄県のラベルを非表示
                d3.select('#label-okinawa-clone').classed('visible', false);
            })
            .on('click', function(event, d) {
                // クリック時の処理
                selectPrefecture('沖縄県');
            });
    }
    
    // 沖縄県のラベルを追加（他の都道府県と同じスタイル）
    japanMapSvg.append('text')
        .attr('x', okinawaX+30)
        .attr('y', okinawaY-20)
        .attr('text-anchor', 'middle')
        .attr('font-size', '8px')
        .attr('pointer-events', 'none')
        .attr('class', 'prefecture-label')
        .attr('id', 'label-okinawa-clone')
        .text('沖縄県');
    
    // prefectures選択に沖縄県を追加
    if (prefectures) {
        prefectures = prefectures.merge(okinawa);
    }
}

// 都道府県名からIDを取得
function getPrefectureId(prefectureName) {
    return japanData[prefectureName]?.id || 'unknown';
}

// 都道府県をハイライト表示
function highlightPrefecture(element, prefectureName) {
    if(element === 'okinawa'){
        d3.select('okinawa-clone').classed('highlight', true);
    }else{
        d3.select(element).classed('highlight', true);
    }
    // 都道府県名のラベルを表示
    const prefId = getPrefectureId(prefectureName);
    const labelId = prefId === 'okinawa' ? 'label-okinawa-clone' : `label-${prefId}`;
    d3.select(`#${labelId}`).classed('visible', true);
}

// 都道府県を選択
function selectPrefecture(prefectureName) {
    // 都道府県選択ドロップダウンを更新
    const prefectureSelect = document.getElementById('prefecture-select');
    prefectureSelect.value = prefectureName;
    prefectureSelect.dispatchEvent(new Event('change'));
}

// 地図の色を更新
function updateMapColors() {
    if (!prefectures) return;
    
    prefectures.each(function(d) {
        const prefName = d?.properties?.nam_ja || d3.select(this).attr('data-name');
        const visitLevel = getPrefectureVisitLevel(prefName);
        
        // 訪問レベルに応じたクラスを設定
        d3.select(this)
            .classed('visited-level-1', visitLevel === 1)
            .classed('visited-level-2', visitLevel === 2)
            .classed('visited-level-3', visitLevel === 3)
            .classed('visited-level-4', visitLevel === 4)
            .classed('visited-level-5', visitLevel === 5);
    });
    
    // 沖縄県の色も更新
    const okinawaElement = document.getElementById('okinawa-clone');
    if (okinawaElement) {
        const visitLevel = getPrefectureVisitLevel('沖縄県');
        d3.select(okinawaElement)
            .classed('visited-level-1', visitLevel === 1)
            .classed('visited-level-2', visitLevel === 2)
            .classed('visited-level-3', visitLevel === 3)
            .classed('visited-level-4', visitLevel === 4)
            .classed('visited-level-5', visitLevel === 5);
    }
}

// ウィンドウサイズ変更時に地図をリサイズ
function resizeMap() {
    if (japanMapSvg) {
        const width = document.getElementById('japan-map').clientWidth;
        const height = document.getElementById('japan-map').clientHeight;
        japanMapSvg.attr('viewBox', `0 0 ${width} ${height}`);
    }
}

// ウィンドウリサイズイベントリスナー
window.addEventListener('resize', resizeMap);
