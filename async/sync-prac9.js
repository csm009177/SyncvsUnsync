// Step 9: 비동기 함수의 반환 값 활용
async function usingAsyncReturnValue() {
  console.log("Step 1: Start");

  const result = await asyncTaskWithReturnValue("Task 1", 1000);

  console.log("Returned value:", result);
  console.log("Step 2: End");
}

async function asyncTaskWithReturnValue(name, duration) {
  console.log(`${name} started`);
  await new Promise(resolve => setTimeout(resolve, duration));
  console.log(`${name} completed`);
  return `${name} result`;
}

// 실행
usingAsyncReturnValue();