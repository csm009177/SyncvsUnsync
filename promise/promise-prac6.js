const changingStatePromise = new Promise((resolve) => {
  console.log("Promise가 생성되었습니다.");
  setTimeout(() => {
    resolve("성공적으로 처리됨");
    console.log("1초 후: Promise가 해결되었습니다.");
  }, 1000);
  console.log("Promise가 생성된 직후에 실행됩니다.");
});

changingStatePromise.then((result) => {
  console.log(result);
  console.log("이 부분은 Promise가 해결된 후에 실행됩니다.");
});