function wait(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}

// 不合适
function waitInterval(duration) {
    return new Promise(function (resolve) {
        setInterval(resolve, duration);
    });
}

// function wait2(duration) {
//     return new Promise(function (resolve) {
//         // 无法捕获
//         setTimeout(function () {
//             throw new Error('error');
//         }, duration);
//     })
// }

wait2(1000).then(function () { console.log('success') }).catch(function () { console.log('fail') });

// waitInterval(3000).then(function () {
//     console.log('after wait 3s');
// })

// wait(3000).then(function () {
//     console.log('after wait 3s');
//     return wait(1000);
// }).then(function () {
//     console.log('after wait 1s');
//     console.log('Meeting a error');
//     throw new Error('Meeting a error');
// }).then(function () {
//     console.log('after wait 2s 1th');
//     return wait(2000);
// }).then(function () {
//     console.log('after wait 2s 2nd');
//     return wait(2000);
// }).catch(function (e) {
//     console.log(e);
// }).then(function () {
//     console.log('after wait 2s 3rd');
//     return wait(2000);
// }).then(function () {
//     console.log('after wait 2s 4 fth');
// });

// function bind(ele, eventName) {
//     return new Promise(function (resolve) {
//         ele.addEventListener(eventName, resolve)
//     });
// }

// bind(window, 'load')
//     .then(function () {
//         // 错误，resolve只能用一次，之后就被销毁
//         return bind(document.body, 'keydown');
//     })
//     .then(function () {
//         console.log('keydown');
//     });

