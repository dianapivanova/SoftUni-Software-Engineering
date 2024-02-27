console.log('Hello');

const p = new Promise(executor);
p.then(onSuccess);

function executor(resolve, reject) {
    console.log('executing');
    resolve('Bye!')
}

function onSuccess(data) {
    console.log(data)
}