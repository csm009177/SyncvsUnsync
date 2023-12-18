const promiseWithError = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  const hasError = true;
  if (hasError) {
    reject("작업 실패"); // reject는 loging 기능이 있음
  } else {
    resolve("작업 성공"); // resolve는 loging 기능이 없음
  }
});

promiseWithError.catch((error) => {
  console.error(error);
});