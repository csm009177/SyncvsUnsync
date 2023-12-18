const changingStatePromise = new Promise((resolve) => {
  console.log("Promise가 생성되었습니다.");
  resolve("성공적으로 처리됨");
  console.log("이 부분은 실행되지 않습니다.");
});

changingStatePromise.then((result) => {
  console.log(result);
});