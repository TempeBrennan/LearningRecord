window.addEventListener('load', function () {
    var calBtn = document.getElementById('calBtn');
    var commonBtn = document.getElementById('commonBtn');
    var renderBtn = document.getElementById('renderBtn');
    var utilBtn = document.getElementById('utilBtn');
    calBtn.addEventListener('click', function () {
        import(
            /* webpackChunkName: "my-calBtn-name" */
            /* webpackMode: "lazy" */
            './calEngine').then(function (m) {
            console.log('add method-->', m.add(1, 2));
        })
    });

    commonBtn.addEventListener('click', function () {
        import(
            /* webpackChunkName: "my-commonBtn-name" */
            /* webpackMode: "eager" */
            './common').then(function (m) {
            console.log(m.getEleHeight(document.body));
            // 还是不分离出单独的js文件，只是推迟加载这个模块方法的时机
        })
    });

    renderBtn.addEventListener('click', function () {
        import(
            /* webpackChunkName: "my-renderBtn-name" */
            /* webpackMode: "weak" */
            './render').then(function (m) {
            console.log(m.createTextBox());
        })
    });

    utilBtn.addEventListener('click', function () {
        var index = [1].length;
        import(
            /* webpackChunkName: "my-utilBtn-name" */
            /* webpackMode: "lazy-once" */
            `./util${index}`).then(function (m) {
            console.log(m.paint());
            // lazy-once
            // 编译时找到所有 utilxx.js，默认lazy
            // 则分别打包成很多个util模块文件，需要哪个请求哪个，发送哪个
            // lazy-once 则合并成一个模块文件，一次发过去
        })
    });
});