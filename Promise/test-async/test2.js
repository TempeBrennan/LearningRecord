function getAllFileContent() {
    var all = '';
    // 1. 先下载 inputman.js
    downloadFile('inputman.js', function (content) {
        all += content;

        // 2. 然后才能下载 spread.js
        downloadFile('spread.js', function (content) {
            all += content;

            // 3. 最后才能下载 echart.js
            downloadFile('echart.js', function (content) {
                all += content;
                console.log(all);
            });
        });
    });
}