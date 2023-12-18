const changingStatePromise = new Promise((resolve, reject) => {
  console.log("Promise가 생성되었습니다.");
  const condition = false;

  setTimeout(() => {
    if (condition) {
      resolve("성공적으로 처리됨");
      console.log("1초 후: Promise가 해결되었습니다.");
    } else {
      reject("처리 실패");
      console.log("1초 후 : Promise가 실패했습니다.");
    }
  }, 1000);
  console.log("Promise가 생성된 직후에 실행됩니다.");
});

changingStatePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
