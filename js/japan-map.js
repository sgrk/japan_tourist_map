// 日本地図の描画を担当するファイル
let japanMapSvg;
let prefectures;

// 地図データを読み込み、描画する
async function loadJapanMap() {
    try {
        // 日本の地図データを取得
        const response = await fetch('https://raw.githubusercontent.com/dataofjapan/land/master/japan.topojson');
        const japanMapData = await response.json();
        
        // TopoJSONからGeoJSONに変換
        const japanGeoData = topojson.feature(japanMapData, japanMapData.objects.japan);
        
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
            .text(d => d.properties.nam_ja);
        
        // 初期の色を設定
        updateMapColors();
        
    } catch (error) {
        console.error('地図データの読み込みに失敗しました:', error);
    }
}

// 都道府県名からIDを取得
function getPrefectureId(prefectureName) {
    return japanData[prefectureName]?.id || 'unknown';
}

// 都道府県をハイライト表示
function highlightPrefecture(element, prefectureName) {
    d3.select(element).classed('highlight', true);
    
    // ツールチップなどの追加情報を表示することも可能
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
        const prefName = d.properties.nam_ja;
        const visitLevel = getPrefectureVisitLevel(prefName);
        
        // 訪問レベルに応じたクラスを設定
        d3.select(this)
            .classed('visited-level-1', visitLevel === 1)
            .classed('visited-level-2', visitLevel === 2)
            .classed('visited-level-3', visitLevel === 3)
            .classed('visited-level-4', visitLevel === 4)
            .classed('visited-level-5', visitLevel === 5);
    });
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
