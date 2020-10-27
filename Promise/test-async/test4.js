new Promise(function (resolve) {
    downloadFile('inputman.js', function (first) { resolve(first) });
}).then(function (first) {
    return new Promise(function (resolve) {
        downloadFile('spread.js', function (second) { resolve(first + second) });
    });
}).then(function (second) {
    return new Promise(function () {
        downloadFile('echart.js', function (third) {
            console.log(second + third);
        });
    });
});

// new Promise(function (resolve) {
//     downloadFile('inputman.js', function () { resolve(); });
// }).then(function (resolve) {
//     // 错误，这里的resolve是上一步调用的人给你传的参数，因为没传，故undefined
//     // 想拿到后面再下一步的callback，需要再起一个Promise
//     downloadFile('spread.js', function () { resolve(); });
// }).then(function (resolve) {
//     downloadFile('echart.js', function () { resolve(); });
// });

function download(name) {
    return new Promise(function (resolve) {
        downloadFile(name, resolve);
    })
}