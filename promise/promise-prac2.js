// 비동기 setTimeout
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("타이머가 만료되었습니다.");
  }, 100);
});

delayedPromise.then((result) => {
  console.log(result);
});