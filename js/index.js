window.onload = function (){
    var currentIndex = 0;
    var ads = document.querySelectorAll('.advertisement img');

    // 隱藏所有廣告，除了第一個
    for (var i = 1; i < ads.length; i++) {
        ads[i].style.display = 'none';
    }

    setInterval(function() {
        // 隱藏當前廣告
        ads[currentIndex].style.display = 'none';

        // 更新索引
        currentIndex = (currentIndex + 1) % ads.length;

        // 顯示下一個廣告
        ads[currentIndex].style.display = 'block';
    }, 3000); // 調整輪播間隔時間，單位為毫秒（這裡設置為每 3 秒切換一次廣告）
}

