// Step 8: 비동기 함수의 중첩
async function nestedAsyncFunctions() {
  console.log("Step 1: Start");

  await asyncTask("Task 1", 1000);

  await (async () => {
    console.log("Nested async function started");
    await asyncTask("Task 2", 1500);
    console.log("Nested async function completed");
  })();

  console.log("Step 2: End");
}

// 실행
nestedAsyncFunctions();