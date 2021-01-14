import delay from './promise1';
import toggleUserState from './promise2';
import makeTransaction from './promise3';
console.log(' start ...');

setTimeout(function () {
  console.log('setTimeout');
}, 2000);

Promise.resolve().then(toggleUserState).then(makeTransaction).then(delay);
