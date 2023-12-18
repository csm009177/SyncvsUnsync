const promiseWithError = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  const hasError = true;
  if (hasError) {
    console.log("작업성공")
    resolve("작업 성공"); // reject는 loging 기능이 있음
  } else {
    resolve("작업 성공"); // resolve는 loging 기능이 없음
  }
});

promiseWithError.catch((error) => {
  console.error(error);
});