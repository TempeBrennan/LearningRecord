function downloadInputMan() {
    downloadFile('inputman.js', function (first) { downloadSpread(first) });
}

function downloadSpread(first) {
    downloadFile('spread.js', function (second) { downloadEchart(first + second) });
}

function downloadEchart(second) {
    downloadFile('echart.js', function (third) {
        console.log(second + third);
    });
}