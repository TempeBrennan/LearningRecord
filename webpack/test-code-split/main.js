window.addEventListener('load', function () {
    var calBtn = document.getElementById('calBtn');
    var commonBtn = document.getElementById('commonBtn');
    var renderBtn = document.getElementById('renderBtn');
    var utilBtn = document.getElementById('utilBtn');
    import(
        /* webpackChunkName: "my-calBtn-name" */
        /* webpackMode: "lazy" */
        './calEngine').then(function (m) {
        console.log('add method-->', m.add(1, 2));
    });
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
        import(
            /* webpackChunkName: "my-utilBtn-name" */
            /* webpackMode: "lazy-once" */
            './util').then(function (m) {
            console.log(m.paint());
        })
    });
});