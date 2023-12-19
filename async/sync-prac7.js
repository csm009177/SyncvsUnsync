// Step 7: 순차적 비동기 작업 처리
async function sequentialAsyncTasks() {
  console.log("Step 1: Start");

  await asyncTask("Task 1", 1000);
  await asyncTask("Task 2", 1500);

  console.log("Step 2: End");
}

// 실행
sequentialAsyncTasks();