// Step 3: 비동기 함수 호출
async function exampleAsyncFunction() {
  console.log("Step 1: Start");
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 동안 대기
  console.log("Step 2: End");
}

async function runExample() {
  console.log("Before calling async function");
  await exampleAsyncFunction();
  console.log("After calling async function");
}

// 실행
runExample();