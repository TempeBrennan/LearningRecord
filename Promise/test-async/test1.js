function downloadFile(fileName, successCallBack) {

    // 模拟1s之后下载成功，调用回调
    setTimeout(function () {
        console.log('%c\ndownloaded!\n', "color:red;font-size:20px");
        successCallBack(fileName + ' content is xxx;');
    }, 1000);
}