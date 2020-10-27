function downloadFile(fileName, successCallBack) {

    // 模拟1s之后下载成功，调用回调
    setTimeout(function () {
        successCallBack(fileName + ' content is xxx;');
    }, 1000);
}

async function getAllFileContent1() {

    // 1. 先下载 inputman.js
    var inputman = await getDownloadContent('inputman.js');

    // 2. 然后才能下载 spread.js
    var spread = await getDownloadContent('spread.js');

    // 3. 最后才能下载 echart.js
    var echart = await getDownloadContent('echart.js');

    console.log(inputman + spread + echart);
}

async function getDownloadContent(fileName) {
    return new Promise(function (resolve) {
        downloadFile(fileName, resolve);
    }).then(function (content) {
        return content;
    });
}

(function () { getAllFileContent1(); })();