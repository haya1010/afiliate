// リンクを設定する関数
function setupLink(id, url) {
    const element = document.getElementById(id);
    if (element && url) {
        element.href = url;
        console.log(`リンク設定: ${id} -> ${url.substring(0, 50)}...`);
    } else if (!element) {
        console.error(`要素が見つかりません: ${id}`);
    } else {
        console.error(`URLが無効です: ${id}`);
    }
}

// すべてのリンクを設定する関数
function setupLinks(linksData) {
    // 商品リンク
    setupLink('product1-link', linksData.product1);
    setupLink('product2-link', linksData.product2);
    setupLink('product3-link', linksData.product3);
    
    // 特典バナーリンク
    setupLink('campaign-link', linksData.campaign);
    
    // SNSリンク
    setupLink('instagram-link', linksData.instagram);
    setupLink('tiktok-link', linksData.tiktok);
    setupLink('youtube-link', linksData.youtube);
    setupLink('twitter-link', linksData.twitter);
}

// DOMが読み込まれたときにリンクを設定
document.addEventListener('DOMContentLoaded', function() {
    console.log('ページが読み込まれました');
    
    // 1. まずHTMLに埋め込まれたデータを優先的に使用
    if (typeof SITE_LINKS !== 'undefined') {
        console.log('HTMLに埋め込まれたリンクデータを使用します');
        setupLinks(SITE_LINKS);
        return;
    }
    
    // 2. 埋め込みデータがなければ、JSONファイルの読み込みを試みる
    console.log('JSONファイルからリンクを読み込みます...');
    
    fetch('links.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTPエラー: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('JSONファイルを読み込みました');
            setupLinks(data);
        })
        .catch(error => {
            console.error('JSONファイルの読み込みに失敗しました:', error);
            
            // 3. 最後の手段としてフォールバックのリンクを使用
            console.log('フォールバックリンクを使用します');
            const fallbackLinks = {
                "product1": "https://www.rakuten.co.jp/",
                "product2": "https://www.rakuten.co.jp/",
                "product3": "https://www.rakuten.co.jp/",
                "campaign": "https://www.rakuten.co.jp/",
                "instagram": "https://www.instagram.com/",
                "tiktok": "https://www.tiktok.com/",
                "youtube": "https://www.youtube.com/",
                "twitter": "https://twitter.com/"
            };
            setupLinks(fallbackLinks);
        });
});

// デバッグ用の関数（コンソールからチェックできるように）
window.checkLinkElements = function() {
    const ids = [
        'product1-link', 
        'product2-link', 
        'product3-link', 
        'campaign-link', 
        'instagram-link', 
        'tiktok-link', 
        'youtube-link', 
        'twitter-link'
    ];
    
    ids.forEach(id => {
        const element = document.getElementById(id);
        console.log(`${id}: ${element ? '存在します' : '見つかりません'} - ${element ? element.href : 'N/A'}`);
    });
};

// 読み込み完了後にリンク要素をチェック
setTimeout(window.checkLinkElements, 1000);
