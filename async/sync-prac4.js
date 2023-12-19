//Step 4: async 함수에서 값 반환
async function exampleAsyncFunctionWithReturnValue() {
  console.log("Step 1: Start");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Step 2: End");
  return "Finished";
}

async function runExampleWithReturnValue() {
  console.log("Before calling async function");
  const result = await exampleAsyncFunctionWithReturnValue();
  console.log("After calling async function with result:", result);
}

// 실행
runExampleWithReturnValue();