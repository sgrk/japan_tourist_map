// 日本の地域階層データ
const japanData = {
    // 北海道
    "北海道": {
        id: "hokkaido",
        regions: {
            "道央地域": {
                cities: {
                    "札幌市": {
                        spots: ["時計台", "大通公園", "札幌テレビ塔", "すすきの"]
                    },
                    "小樽市": {
                        spots: ["小樽運河", "小樽オルゴール堂", "北一硝子"]
                    },
                    "ニセコ町": {
                        spots: ["ニセコマウンテンリゾート", "ニセコアンヌプリ"]
                    }
                }
            },
            "道南地域": {
                cities: {
                    "函館市": {
                        spots: ["函館山", "五稜郭", "元町", "函館朝市"]
                    },
                    "七飯町": {
                        spots: ["大沼国定公園"]
                    }
                }
            },
            "道東地域": {
                cities: {
                    "釧路市": {
                        spots: ["幣舞橋", "釧路湿原", "阿寒湖"]
                    },
                    "網走市": {
                        spots: ["網走監獄博物館", "オホーツク流氷館"]
                    },
                    "知床": {
                        spots: ["知床五湖", "知床峠", "ウトロ温泉"]
                    }
                }
            },
            "道北地域": {
                cities: {
                    "旭川市": {
                        spots: ["旭山動物園", "常磐公園"]
                    },
                    "富良野市": {
                        spots: ["ファーム富田", "富良野スキー場"]
                    },
                    "稚内市": {
                        spots: ["宗谷岬", "ノシャップ岬"]
                    }
                }
            }
        }
    },
    
    // 東北地方
    "青森県": {
        id: "aomori",
        regions: {
            "津軽地域": {
                cities: {
                    "青森市": {
                        spots: ["ねぶた祭り", "三内丸山遺跡"]
                    },
                    "弘前市": {
                        spots: ["弘前城", "弘前公園"]
                    }
                }
            },
            "下北半島": {
                cities: {
                    "むつ市": {
                        spots: ["恐山", "仏ヶ浦"]
                    }
                }
            }
        }
    },
    "岩手県": {
        id: "iwate",
        regions: {
            "盛岡地域": {
                cities: {
                    "盛岡市": {
                        spots: ["岩手公園", "盛岡城跡"]
                    }
                }
            },
            "平泉地域": {
                cities: {
                    "平泉町": {
                        spots: ["中尊寺", "毛越寺"]
                    }
                }
            }
        }
    },
    "宮城県": {
        id: "miyagi",
        regions: {
            "仙台地域": {
                cities: {
                    "仙台市": {
                        spots: ["青葉城址", "瑞鳳殿", "仙台七夕まつり"]
                    }
                }
            },
            "松島地域": {
                cities: {
                    "松島町": {
                        spots: ["松島湾", "瑞巌寺", "五大堂"]
                    }
                }
            }
        }
    },
    "秋田県": {
        id: "akita",
        regions: {
            "秋田市周辺": {
                cities: {
                    "秋田市": {
                        spots: ["竿燈まつり", "千秋公園"]
                    }
                }
            },
            "角館地域": {
                cities: {
                    "仙北市": {
                        spots: ["角館武家屋敷", "桜並木"]
                    }
                }
            }
        }
    },
    "山形県": {
        id: "yamagata",
        regions: {
            "山形市周辺": {
                cities: {
                    "山形市": {
                        spots: ["山寺", "蔵王温泉"]
                    }
                }
            },
            "庄内地域": {
                cities: {
                    "鶴岡市": {
                        spots: ["羽黒山", "出羽三山"]
                    }
                }
            }
        }
    },
    "福島県": {
        id: "fukushima",
        regions: {
            "会津地域": {
                cities: {
                    "会津若松市": {
                        spots: ["鶴ヶ城", "飯盛山"]
                    }
                }
            },
            "福島市周辺": {
                cities: {
                    "福島市": {
                        spots: ["花見山公園", "信夫山"]
                    }
                }
            }
        }
    },
    
    // 関東地方
    "東京都": {
        id: "tokyo",
        regions: {
            "23区": {
                cities: {
                    "千代田区": {
                        spots: ["東京駅", "皇居", "秋葉原"]
                    },
                    "新宿区": {
                        spots: ["新宿御苑", "東京都庁", "歌舞伎町"]
                    },
                    "渋谷区": {
                        spots: ["渋谷スクランブル交差点", "明治神宮", "原宿"]
                    },
                    "台東区": {
                        spots: ["浅草寺", "上野公園", "アメ横"]
                    }
                }
            },
            "多摩地域": {
                cities: {
                    "八王子市": {
                        spots: ["高尾山", "八王子城跡"]
                    },
                    "三鷹市": {
                        spots: ["三鷹の森ジブリ美術館"]
                    }
                }
            },
            "島しょ部": {
                cities: {
                    "大島町": {
                        spots: ["三原山", "波浮港"]
                    },
                    "八丈町": {
                        spots: ["八丈富士", "底土海岸"]
                    }
                }
            }
        }
    },
    "神奈川県": {
        id: "kanagawa",
        regions: {
            "横浜・川崎地域": {
                cities: {
                    "横浜市": {
                        spots: ["みなとみらい", "横浜中華街", "山下公園"]
                    },
                    "川崎市": {
                        spots: ["川崎大師", "藤子・F・不二雄ミュージアム"]
                    }
                }
            },
            "湘南地域": {
                cities: {
                    "鎌倉市": {
                        spots: ["鶴岡八幡宮", "大仏", "江の島"]
                    },
                    "藤沢市": {
                        spots: ["江の島", "湘南海岸"]
                    }
                }
            },
            "箱根地域": {
                cities: {
                    "箱根町": {
                        spots: ["芦ノ湖", "大涌谷", "箱根神社"]
                    }
                }
            }
        }
    },
    
    // 他の都道府県も同様に追加...
    // 中部地方
    "新潟県": {
        id: "niigata",
        regions: {
            "新潟市周辺": {
                cities: {
                    "新潟市": {
                        spots: ["萬代橋", "新潟市水族館"]
                    }
                }
            },
            "佐渡島": {
                cities: {
                    "佐渡市": {
                        spots: ["佐渡金山", "たらい舟"]
                    }
                }
            }
        }
    },
    "富山県": {
        id: "toyama",
        regions: {
            "富山市周辺": {
                cities: {
                    "富山市": {
                        spots: ["富山城", "富岩運河環水公園"]
                    }
                }
            },
            "立山黒部": {
                cities: {
                    "立山町": {
                        spots: ["立山黒部アルペンルート", "室堂平"]
                    }
                }
            }
        }
    },
    
    // 近畿地方
    "京都府": {
        id: "kyoto",
        regions: {
            "京都市": {
                cities: {
                    "北区": {
                        spots: ["金閣寺", "北野天満宮"]
                    },
                    "東山区": {
                        spots: ["清水寺", "八坂神社", "祇園"]
                    },
                    "右京区": {
                        spots: ["嵐山", "渡月橋", "竜安寺"]
                    }
                }
            },
            "丹後地域": {
                cities: {
                    "宮津市": {
                        spots: ["天橋立"]
                    }
                }
            }
        }
    },
    "大阪府": {
        id: "osaka",
        regions: {
            "大阪市": {
                cities: {
                    "中央区": {
                        spots: ["大阪城", "道頓堀", "心斎橋"]
                    },
                    "浪速区": {
                        spots: ["通天閣", "新世界"]
                    }
                }
            },
            "泉州地域": {
                cities: {
                    "堺市": {
                        spots: ["仁徳天皇陵", "堺旧港"]
                    }
                }
            }
        }
    },
    
    // 中国・四国地方
    "広島県": {
        id: "hiroshima",
        regions: {
            "広島市周辺": {
                cities: {
                    "広島市": {
                        spots: ["原爆ドーム", "平和記念公園", "広島城"]
                    }
                }
            },
            "宮島地域": {
                cities: {
                    "廿日市市": {
                        spots: ["厳島神社", "宮島"]
                    }
                }
            }
        }
    },
    
    // 九州・沖縄地方
    "福岡県": {
        id: "fukuoka",
        regions: {
            "福岡市周辺": {
                cities: {
                    "福岡市": {
                        spots: ["太宰府天満宮", "福岡タワー", "博多"]
                    }
                }
            },
            "北九州地域": {
                cities: {
                    "北九州市": {
                        spots: ["門司港レトロ", "小倉城"]
                    }
                }
            }
        }
    },
    "沖縄県": {
        id: "okinawa",
        regions: {
            "那覇市周辺": {
                cities: {
                    "那覇市": {
                        spots: ["首里城", "国際通り", "守礼門"]
                    }
                }
            },
            "本島北部": {
                cities: {
                    "名護市": {
                        spots: ["美ら海水族館", "古宇利島"]
                    }
                }
            },
            "離島": {
                cities: {
                    "石垣市": {
                        spots: ["石垣島", "川平湾"]
                    },
                    "宮古島市": {
                        spots: ["宮古島", "与那覇前浜ビーチ"]
                    }
                }
            }
        }
    }
};

// 訪問済みの場所を保存するオブジェクト
let visitedPlaces = {
    prefectures: {},
    regions: {},
    cities: {},
    spots: {}
};

// ローカルストレージからデータを読み込む
function loadVisitedPlaces() {
    const savedData = localStorage.getItem('japanMapVisitedPlaces');
    if (savedData) {
        visitedPlaces = JSON.parse(savedData);
    }
}

// ローカルストレージにデータを保存する
function saveVisitedPlaces() {
    localStorage.setItem('japanMapVisitedPlaces', JSON.stringify(visitedPlaces));
}

// 訪問履歴をリセットする
function resetVisitedPlaces() {
    // 訪問データをクリア
    visitedPlaces = {
        prefectures: {},
        regions: {},
        cities: {},
        spots: {}
    };
    
    // ローカルストレージから削除
    localStorage.removeItem('japanMapVisitedPlaces');
    
    // 統計を更新
    updateStatistics();
    
    // 地図を更新
    updateMapColors();
    
    // 推奨を更新
    updateRecommendations();
    
    // セレクトボックスをリセット
    resetSelectors();
}

// 場所を訪問済みとしてマークする
function markAsVisited(prefectureName, regionName, cityName, spotName) {
    const visitDate = new Date().toISOString();
    
    // 都道府県レベル
    if (!visitedPlaces.prefectures[prefectureName]) {
        visitedPlaces.prefectures[prefectureName] = {
            visited: true,
            count: 0,
            date: visitDate
        };
    }
    
    // 地域レベル
    const regionKey = `${prefectureName}-${regionName}`;
    if (!visitedPlaces.regions[regionKey]) {
        visitedPlaces.regions[regionKey] = {
            visited: true,
            count: 0,
            date: visitDate
        };
    }
    
    // 市区町村レベル
    const cityKey = `${prefectureName}-${regionName}-${cityName}`;
    if (!visitedPlaces.cities[cityKey]) {
        visitedPlaces.cities[cityKey] = {
            visited: true,
            count: 0,
            date: visitDate
        };
    }
    
    // 観光スポットレベル
    const spotKey = `${prefectureName}-${regionName}-${cityName}-${spotName}`;
    if (!visitedPlaces.spots[spotKey]) {
        visitedPlaces.spots[spotKey] = {
            visited: true,
            date: visitDate
        };
        
        // カウントを増やす
        visitedPlaces.prefectures[prefectureName].count++;
        visitedPlaces.regions[regionKey].count++;
        visitedPlaces.cities[cityKey].count++;
    }
    
    // データを保存
    saveVisitedPlaces();
    
    // 統計を更新
    updateStatistics();
    
    // 地図を更新
    updateMapColors();
    
    // 推奨を更新
    updateRecommendations();
}

// 訪問履歴から場所を削除する
function removeVisitedPlace(type, key) {
    if (!visitedPlaces[type][key]) return;
    
    // 観光スポットの場合は、関連するカウントも減らす
    if (type === 'spots') {
        const parts = key.split('-');
        const prefectureName = parts[0];
        const regionName = parts[1];
        const cityName = parts[2];
        
        const regionKey = `${prefectureName}-${regionName}`;
        const cityKey = `${prefectureName}-${regionName}-${cityName}`;
        
        // カウントを減らす
        if (visitedPlaces.prefectures[prefectureName]) {
            visitedPlaces.prefectures[prefectureName].count--;
            
            // カウントが0になったら削除
            if (visitedPlaces.prefectures[prefectureName].count <= 0) {
                delete visitedPlaces.prefectures[prefectureName];
            }
        }
        
        if (visitedPlaces.regions[regionKey]) {
            visitedPlaces.regions[regionKey].count--;
            
            // カウントが0になったら削除
            if (visitedPlaces.regions[regionKey].count <= 0) {
                delete visitedPlaces.regions[regionKey];
            }
        }
        
        if (visitedPlaces.cities[cityKey]) {
            visitedPlaces.cities[cityKey].count--;
            
            // カウントが0になったら削除
            if (visitedPlaces.cities[cityKey].count <= 0) {
                delete visitedPlaces.cities[cityKey];
            }
        }
    }
    
    // 指定された場所を削除
    delete visitedPlaces[type][key];
    
    // データを保存
    saveVisitedPlaces();
    
    // 統計を更新
    updateStatistics();
    
    // 地図を更新
    updateMapColors();
    
    // 推奨を更新
    updateRecommendations();
    
    // 履歴リストを更新
    if (document.getElementById('history-container').classList.contains('hidden') === false) {
        updateHistoryList();
    }
}

// 訪問履歴リストを取得
function getVisitHistory(filterType = 'all', searchText = '') {
    const history = [];
    
    // 検索テキストを小文字に変換
    searchText = searchText.toLowerCase();
    
    // スポットの履歴を取得
    if (filterType === 'all' || filterType === 'spot') {
        Object.keys(visitedPlaces.spots).forEach(key => {
            const parts = key.split('-');
            const prefectureName = parts[0];
            const regionName = parts[1];
            const cityName = parts[2];
            const spotName = parts[3];
            
            const displayName = `${prefectureName} > ${regionName} > ${cityName} > ${spotName}`;
            
            // 検索テキストでフィルタリング
            if (searchText && !displayName.toLowerCase().includes(searchText)) {
                return;
            }
            
            history.push({
                type: 'spot',
                key: key,
                displayName: displayName,
                date: visitedPlaces.spots[key].date || '不明'
            });
        });
    }
    
    // 市区町村の履歴を取得
    if (filterType === 'all' || filterType === 'city') {
        Object.keys(visitedPlaces.cities).forEach(key => {
            // カウントが0の場合はスキップ
            if (visitedPlaces.cities[key].count <= 0) return;
            
            const parts = key.split('-');
            const prefectureName = parts[0];
            const regionName = parts[1];
            const cityName = parts[2];
            
            const displayName = `${prefectureName} > ${regionName} > ${cityName}`;
            
            // 検索テキストでフィルタリング
            if (searchText && !displayName.toLowerCase().includes(searchText)) {
                return;
            }
            
            history.push({
                type: 'city',
                key: key,
                displayName: displayName,
                date: visitedPlaces.cities[key].date || '不明'
            });
        });
    }
    
    // 地域の履歴を取得
    if (filterType === 'all' || filterType === 'region') {
        Object.keys(visitedPlaces.regions).forEach(key => {
            // カウントが0の場合はスキップ
            if (visitedPlaces.regions[key].count <= 0) return;
            
            const parts = key.split('-');
            const prefectureName = parts[0];
            const regionName = parts[1];
            
            const displayName = `${prefectureName} > ${regionName}`;
            
            // 検索テキストでフィルタリング
            if (searchText && !displayName.toLowerCase().includes(searchText)) {
                return;
            }
            
            history.push({
                type: 'region',
                key: key,
                displayName: displayName,
                date: visitedPlaces.regions[key].date || '不明'
            });
        });
    }
    
    // 都道府県の履歴を取得
    if (filterType === 'all' || filterType === 'prefecture') {
        Object.keys(visitedPlaces.prefectures).forEach(prefectureName => {
            // カウントが0の場合はスキップ
            if (visitedPlaces.prefectures[prefectureName].count <= 0) return;
            
            const displayName = prefectureName;
            
            // 検索テキストでフィルタリング
            if (searchText && !displayName.toLowerCase().includes(searchText)) {
                return;
            }
            
            history.push({
                type: 'prefecture',
                key: prefectureName,
                displayName: displayName,
                date: visitedPlaces.prefectures[prefectureName].date || '不明'
            });
        });
    }
    
    // 日付の新しい順にソート
    history.sort((a, b) => {
        if (a.date === '不明' && b.date === '不明') return 0;
        if (a.date === '不明') return 1;
        if (b.date === '不明') return -1;
        return new Date(b.date) - new Date(a.date);
    });
    
    return history;
}

// 日付を読みやすい形式に変換
function formatDate(dateString) {
    if (dateString === '不明') return '不明';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 場所が訪問済みかどうかをチェック
function isVisited(type, key) {
    return visitedPlaces[type][key] && visitedPlaces[type][key].visited;
}

// 都道府県の訪問レベルを取得（0-5）
function getPrefectureVisitLevel(prefectureName) {
    if (!visitedPlaces.prefectures[prefectureName]) {
        return 0;
    }
    
    const prefecture = japanData[prefectureName];
    let totalSpots = 0;
    let visitedSpots = visitedPlaces.prefectures[prefectureName].count || 0;
    
    // 都道府県内の全観光スポット数を計算
    Object.keys(prefecture.regions).forEach(regionName => {
        const region = prefecture.regions[regionName];
        Object.keys(region.cities).forEach(cityName => {
            const city = region.cities[cityName];
            totalSpots += city.spots.length;
        });
    });
    
    if (totalSpots === 0) return 0;
    
    // 訪問率に基づいてレベルを計算
    const visitRate = visitedSpots / totalSpots;
    if (visitRate === 0) return 0;
    if (visitRate <= 0.2) return 1;
    if (visitRate <= 0.4) return 2;
    if (visitRate <= 0.6) return 3;
    if (visitRate <= 0.8) return 4;
    return 5;
}

// 統計情報を更新
function updateStatistics() {
    const prefectureCount = Object.keys(visitedPlaces.prefectures).length;
    const regionCount = Object.keys(visitedPlaces.regions).length;
    const cityCount = Object.keys(visitedPlaces.cities).length;
    const spotCount = Object.keys(visitedPlaces.spots).length;
    
    // 合計数を計算
    let totalRegions = 0;
    let totalCities = 0;
    let totalSpots = 0;
    
    Object.keys(japanData).forEach(prefectureName => {
        const prefecture = japanData[prefectureName];
        totalRegions += Object.keys(prefecture.regions).length;
        
        Object.keys(prefecture.regions).forEach(regionName => {
            const region = prefecture.regions[regionName];
            totalCities += Object.keys(region.cities).length;
            
            Object.keys(region.cities).forEach(cityName => {
                const city = region.cities[cityName];
                totalSpots += city.spots.length;
            });
        });
    });
    
    // DOM要素を更新
    document.getElementById('prefecture-count').textContent = prefectureCount;
    document.getElementById('region-count').textContent = regionCount;
    document.getElementById('total-regions').textContent = totalRegions;
    document.getElementById('city-count').textContent = cityCount;
    document.getElementById('total-cities').textContent = totalCities;
    document.getElementById('spot-count').textContent = spotCount;
    document.getElementById('total-spots').textContent = totalSpots;
}

// 次の旅行先を推奨
function getRecommendations() {
    const recommendations = [];
    const visitedPrefectures = new Set(Object.keys(visitedPlaces.prefectures));
    
    // 訪問率の低い都道府県を見つける
    Object.keys(japanData).forEach(prefectureName => {
        const visitLevel = getPrefectureVisitLevel(prefectureName);
        
        // 未訪問または訪問率が低い都道府県
        if (visitLevel < 3) {
            const prefecture = japanData[prefectureName];
            
            // 各地域を確認
            Object.keys(prefecture.regions).forEach(regionName => {
                const regionKey = `${prefectureName}-${regionName}`;
                const region = prefecture.regions[regionName];
                
                // 未訪問の地域
                if (!visitedPlaces.regions[regionKey] || visitedPlaces.regions[regionKey].count === 0) {
                    // 推奨に追加
                    recommendations.push({
                        prefecture: prefectureName,
                        region: regionName,
                        level: 'region',
                        density: visitLevel
                    });
                } else {
                    // 各市区町村を確認
                    Object.keys(region.cities).forEach(cityName => {
                        const cityKey = `${prefectureName}-${regionName}-${cityName}`;
                        const city = region.cities[cityName];
                        
                        // 未訪問の市区町村
                        if (!visitedPlaces.cities[cityKey] || visitedPlaces.cities[cityKey].count === 0) {
                            // 推奨に追加
                            recommendations.push({
                                prefecture: prefectureName,
                                region: regionName,
                                city: cityName,
                                level: 'city',
                                density: visitLevel
                            });
                        }
                    });
                }
            });
        }
    });
    
    // 密度（訪問率）の低い順にソート
    recommendations.sort((a, b) => a.density - b.density);
    
    return recommendations.slice(0, 5); // 上位5件を返す
}

// 推奨リストを更新
function updateRecommendations() {
    const recommendations = getRecommendations();
    const recommendationList = document.getElementById('recommendation-list');
    
    if (recommendations.length === 0) {
        recommendationList.innerHTML = '<p>まだ推奨する場所がありません。訪問した場所を登録してください。</p>';
        return;
    }
    
    let html = '';
    recommendations.forEach(rec => {
        if (rec.level === 'region') {
            html += `<div class="recommendation-item" data-prefecture="${rec.prefecture}" data-region="${rec.region}">
                ${rec.prefecture}の${rec.region}を訪れましょう
            </div>`;
        } else {
            html += `<div class="recommendation-item" data-prefecture="${rec.prefecture}" data-region="${rec.region}" data-city="${rec.city}">
                ${rec.prefecture}の${rec.region}にある${rec.city}を訪れましょう
            </div>`;
        }
    });
    
    recommendationList.innerHTML = html;
    
    // 推奨アイテムにクリックイベントを追加
    const items = document.querySelectorAll('.recommendation-item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            const prefecture = this.dataset.prefecture;
            const region = this.dataset.region;
            const city = this.dataset.city;
            
            // セレクトボックスを更新
            const prefectureSelect = document.getElementById('prefecture-select');
            prefectureSelect.value = prefecture;
            prefectureSelect.dispatchEvent(new Event('change'));
            
            setTimeout(() => {
                const regionSelect = document.getElementById('region-select');
                regionSelect.value = region;
                regionSelect.dispatchEvent(new Event('change'));
                
                if (city) {
                    setTimeout(() => {
                        const citySelect = document.getElementById('city-select');
                        citySelect.value = city;
                        citySelect.dispatchEvent(new Event('change'));
                    }, 100);
                }
            }, 100);
        });
    });
}

// セレクトボックスをリセット
function resetSelectors() {
    const prefectureSelect = document.getElementById('prefecture-select');
    prefectureSelect.value = '';
    prefectureSelect.dispatchEvent(new Event('change'));
    
    const regionSelect = document.getElementById('region-select');
    regionSelect.value = '';
    regionSelect.dispatchEvent(new Event('change'));
    
    const citySelect = document.getElementById('city-select');
    citySelect.value = '';
    citySelect.dispatchEvent(new Event('change'));
}
