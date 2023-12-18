//비동기 작업 순서 보장:
const sequentialPromise = new Promise((resolve) => {
  console.log("첫 번째 작업 시작");
  setTimeout(() => {
    resolve("첫 번째 작업 완료");
  }, 2000);
});

sequentialPromise.then((result) => {
  console.log(result);
  console.log("두 번째 작업 시작");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("두 번째 작업 완료");
    }, 1000);
  });
}).then((result) => {
  console.log(result);
});