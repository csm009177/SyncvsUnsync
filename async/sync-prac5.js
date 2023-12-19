//Step 5: 에러 처리 추가
async function exampleAsyncFunctionWithError() {
  console.log("Step 1: Start");
  await new Promise((resolve, reject) => setTimeout(reject, 1000, new Error("Something went wrong")));
  console.log("Step 2: End");
}

async function runExampleWithError() {
  console.log("Before calling async function");
  try {
    await exampleAsyncFunctionWithError();
  } catch (error) {
    console.error("Error caught:", error.message);
  }
  console.log("After calling async function with error handling");
}

// 실행
runExampleWithError();