// Step 10: Promise를 사용한 비동기 함수
function traditionalAsyncFunction() {
  console.log("Step 1: Start");

  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 2: End");
      resolve();
    }, 1000);
  });
}

// 실행
traditionalAsyncFunction().then(() => {
  console.log("After calling traditional async function");
});