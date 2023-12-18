// 비동기 작업 체이닝
const promiseChain = new Promise((resolve) => {
  resolve(1);
});

promiseChain
  .then((value) => {
    console.log(value); // 1
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 2
  });
