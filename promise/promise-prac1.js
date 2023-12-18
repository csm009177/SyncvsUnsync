const promise = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) {
    resolve("작업 성공");
  } else {
    reject("작업 실패");
  }
});

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});