// Step 2: await를 사용한 비동기 작업 추가
async function exampleAsyncFunction() {
  console.log("Step 1: Start");
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 동안 대기
  console.log("Step 2: End");
}

exampleAsyncFunction()