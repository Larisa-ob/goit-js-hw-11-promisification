console.log('start....');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('from timer ...');
        resolve(logger());
    }, 2000);
    const logger = time => {
        console.log(`Resolved after ${time}ms`);
    };
});
//delay(2000).then(logger);
//promise.then(const delay = time => { logger(time); });
console.log('end ...');
/*
 * then не выполнится так как в функции fn, внутри new Promise(fn),
 * был вызван reject(). А catch как раз выполнится через 2 секунды
 */
