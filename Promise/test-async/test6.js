try {
    setTimeout(() => {
        console.log('I am executing settimeout');
        console.log('I am meeting a problem');
        throw new Error('Can not solve');
    }, 3000);
} catch (e) {
    console.log(e);
}