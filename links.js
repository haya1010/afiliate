// DOMが読み込まれたときにリンクを設定
document.addEventListener('DOMContentLoaded', function() {
    // HTMLに埋め込まれたデータを使用
    if (typeof SITE_LINKS !== 'undefined') {
        // 商品リンク
        setLinkUrl('product1-link', SITE_LINKS.product1);
        setLinkUrl('product2-link', SITE_LINKS.product2);
        setLinkUrl('product3-link', SITE_LINKS.product3);
        
        // 特典バナーリンク
        setLinkUrl('campaign-link', SITE_LINKS.campaign);
        
        // SNSリンク
        setLinkUrl('instagram-link', SITE_LINKS.instagram);
        setLinkUrl('tiktok-link', SITE_LINKS.tiktok);
        setLinkUrl('youtube-link', SITE_LINKS.youtube);
        setLinkUrl('twitter-link', SITE_LINKS.twitter);
    }
});

// リンクを設定する関数
function setLinkUrl(id, url) {
    const element = document.getElementById(id);
    if (element && url) {
        element.href = url;
    }
}
