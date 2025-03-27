// メインアプリケーションのJavaScript

// DOM要素が読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    // 訪問済みデータを読み込む
    loadVisitedPlaces();
    
    // 日本地図を読み込む
    loadJapanMap();
    
    // 都道府県選択肢を初期化
    initializePrefectureSelect();
    
    // 統計を更新
    updateStatistics();
    
    // 推奨を更新
    updateRecommendations();
    
    // イベントリスナーを設定
    setupEventListeners();
});

// 都道府県選択肢を初期化
function initializePrefectureSelect() {
    const prefectureSelect = document.getElementById('prefecture-select');
    
    // 既存のオプションをクリア（最初のオプションは残す）
    while (prefectureSelect.options.length > 1) {
        prefectureSelect.remove(1);
    }
    
    // 都道府県を追加
    Object.keys(japanData).forEach(prefectureName => {
        const option = document.createElement('option');
        option.value = prefectureName;
        option.textContent = prefectureName;
        prefectureSelect.appendChild(option);
    });
}

// イベントリスナーを設定
function setupEventListeners() {
    // 都道府県選択時
    document.getElementById('prefecture-select').addEventListener('change', function() {
        const prefectureName = this.value;
        updateRegionSelect(prefectureName);
    });
    
    // 地域選択時
    document.getElementById('region-select').addEventListener('change', function() {
        const prefectureName = document.getElementById('prefecture-select').value;
        const regionName = this.value;
        updateCitySelect(prefectureName, regionName);
    });
    
    // 市区町村選択時
    document.getElementById('city-select').addEventListener('change', function() {
        const prefectureName = document.getElementById('prefecture-select').value;
        const regionName = document.getElementById('region-select').value;
        const cityName = this.value;
        updateSpotSelect(prefectureName, regionName, cityName);
    });
    
    // 観光スポット選択時
    document.getElementById('spot-select').addEventListener('change', function() {
        updateMarkVisitedButton();
    });
    
    // 訪問済みボタンクリック時
    document.getElementById('mark-visited').addEventListener('click', function() {
        const prefectureName = document.getElementById('prefecture-select').value;
        const regionName = document.getElementById('region-select').value;
        const cityName = document.getElementById('city-select').value;
        const spotName = document.getElementById('spot-select').value;
        
        if (prefectureName && regionName && cityName && spotName) {
            markAsVisited(prefectureName, regionName, cityName, spotName);
            
            // 選択をリセット
            document.getElementById('spot-select').selectedIndex = 0;
            updateMarkVisitedButton();
        }
    });
    
    // リセットボタンクリック時
    document.getElementById('reset-history').addEventListener('click', function() {
        if (confirm('訪問履歴をすべてリセットしますか？この操作は元に戻せません。')) {
            resetVisitedPlaces();
        }
    });
    
    // 履歴表示ボタンクリック時
    document.getElementById('view-history').addEventListener('click', function() {
        const historyContainer = document.getElementById('history-container');
        
        if (historyContainer.classList.contains('hidden')) {
            // 履歴を表示
            historyContainer.classList.remove('hidden');
            this.textContent = '履歴を隠す';
            
            // 履歴リストを更新
            updateHistoryList();
        } else {
            // 履歴を隠す
            historyContainer.classList.add('hidden');
            this.textContent = '履歴を表示';
        }
    });
    
    // 履歴フィルター変更時
    document.getElementById('history-filter').addEventListener('change', function() {
        updateHistoryList();
    });
    
    // 履歴検索入力時
    document.getElementById('history-search').addEventListener('input', function() {
        updateHistoryList();
    });
}

// 履歴リストを更新
function updateHistoryList() {
    const historyList = document.getElementById('history-list');
    const filterType = document.getElementById('history-filter').value;
    const searchText = document.getElementById('history-search').value;
    
    // 履歴を取得
    const history = getVisitHistory(filterType, searchText);
    
    if (history.length === 0) {
        historyList.innerHTML = '<div class="history-item"><p>訪問履歴がありません</p></div>';
        return;
    }
    
    // 履歴リストを生成
    let html = '';
    history.forEach(item => {
        html += `
            <div class="history-item">
                <div class="location">${item.displayName}</div>
                <div class="date">${formatDate(item.date)}</div>
                <div class="actions">
                    <button class="remove-btn" data-type="${item.type}" data-key="${item.key}">削除</button>
                </div>
            </div>
        `;
    });
    
    historyList.innerHTML = html;
    
    // 削除ボタンにイベントリスナーを追加
    const removeButtons = document.querySelectorAll('.history-item .remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            const key = this.dataset.key;
            
            if (confirm('この訪問記録を削除しますか？')) {
                removeVisitedPlace(type, key);
            }
        });
    });
}

// 地域選択肢を更新
function updateRegionSelect(prefectureName) {
    const regionSelect = document.getElementById('region-select');
    
    // 選択肢をリセット
    regionSelect.innerHTML = '<option value="">地域を選択</option>';
    regionSelect.disabled = !prefectureName;
    
    // 市区町村と観光スポットの選択肢もリセット
    document.getElementById('city-select').innerHTML = '<option value="">市区町村を選択</option>';
    document.getElementById('city-select').disabled = true;
    document.getElementById('spot-select').innerHTML = '<option value="">観光スポットを選択</option>';
    document.getElementById('spot-select').disabled = true;
    
    // 訪問済みボタンを無効化
    document.getElementById('mark-visited').disabled = true;
    
    if (!prefectureName) return;
    
    // 地域を追加
    const prefecture = japanData[prefectureName];
    if (prefecture) {
        Object.keys(prefecture.regions).forEach(regionName => {
            const option = document.createElement('option');
            option.value = regionName;
            option.textContent = regionName;
            regionSelect.appendChild(option);
        });
    }
}

// 市区町村選択肢を更新
function updateCitySelect(prefectureName, regionName) {
    const citySelect = document.getElementById('city-select');
    
    // 選択肢をリセット
    citySelect.innerHTML = '<option value="">市区町村を選択</option>';
    citySelect.disabled = !regionName;
    
    // 観光スポットの選択肢もリセット
    document.getElementById('spot-select').innerHTML = '<option value="">観光スポットを選択</option>';
    document.getElementById('spot-select').disabled = true;
    
    // 訪問済みボタンを無効化
    document.getElementById('mark-visited').disabled = true;
    
    if (!prefectureName || !regionName) return;
    
    // 市区町村を追加
    const prefecture = japanData[prefectureName];
    if (prefecture && prefecture.regions[regionName]) {
        const region = prefecture.regions[regionName];
        Object.keys(region.cities).forEach(cityName => {
            const option = document.createElement('option');
            option.value = cityName;
            option.textContent = cityName;
            citySelect.appendChild(option);
        });
    }
}

// 観光スポット選択肢を更新
function updateSpotSelect(prefectureName, regionName, cityName) {
    const spotSelect = document.getElementById('spot-select');
    
    // 選択肢をリセット
    spotSelect.innerHTML = '<option value="">観光スポットを選択</option>';
    spotSelect.disabled = !cityName;
    
    // 訪問済みボタンを無効化
    document.getElementById('mark-visited').disabled = true;
    
    if (!prefectureName || !regionName || !cityName) return;
    
    // 観光スポットを追加
    const prefecture = japanData[prefectureName];
    if (prefecture && prefecture.regions[regionName]) {
        const region = prefecture.regions[regionName];
        if (region.cities[cityName]) {
            const city = region.cities[cityName];
            city.spots.forEach(spotName => {
                const option = document.createElement('option');
                option.value = spotName;
                option.textContent = spotName;
                
                // 訪問済みの場合はマーク
                const spotKey = `${prefectureName}-${regionName}-${cityName}-${spotName}`;
                if (isVisited('spots', spotKey)) {
                    option.textContent += ' ✓';
                }
                
                spotSelect.appendChild(option);
            });
        }
    }
}

// 訪問済みボタンの状態を更新
function updateMarkVisitedButton() {
    const prefectureName = document.getElementById('prefecture-select').value;
    const regionName = document.getElementById('region-select').value;
    const cityName = document.getElementById('city-select').value;
    const spotName = document.getElementById('spot-select').value;
    
    const markVisitedButton = document.getElementById('mark-visited');
    
    // すべての選択肢が選ばれている場合のみボタンを有効化
    markVisitedButton.disabled = !(prefectureName && regionName && cityName && spotName);
    
    // 既に訪問済みの場合はボタンを無効化
    if (prefectureName && regionName && cityName && spotName) {
        const spotKey = `${prefectureName}-${regionName}-${cityName}-${spotName}`;
        if (isVisited('spots', spotKey)) {
            markVisitedButton.disabled = true;
            markVisitedButton.textContent = '訪問済み';
        } else {
            markVisitedButton.textContent = '訪問済みにする';
        }
    } else {
        markVisitedButton.textContent = '訪問済みにする';
    }
}
