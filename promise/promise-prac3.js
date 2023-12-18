// 여러 Promise 병렬 처리:

const promise1 = Promise.resolve("첫 번째 Promise");
const promise2 = Promise.resolve("두 번째 Promise");

Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ["첫 번째 Promise", "두 번째 Promise"]
  });