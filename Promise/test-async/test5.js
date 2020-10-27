function wait(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}

wait(3000).then(function () {
    console.log('after wait 3s');
    return wait(1000);
}).then(function () {
    console.log('after wait 1s');
    return wait(2000);
}).then(function () {
    console.log('after wait 2s');
});