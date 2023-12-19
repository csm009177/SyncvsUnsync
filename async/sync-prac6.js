// Step 6: 병렬 비동기 작업 처리
async function parallelAsyncTasks() {
  console.log("Step 1: Start");

  const task1 = asyncTask("Task 1", 1000);
  const task2 = asyncTask("Task 2", 1500);

  await Promise.all([task1, task2]);

  console.log("Step 2: End");
}

async function asyncTask(name, duration) {
  console.log(`${name} started`);
  await new Promise(resolve => setTimeout(resolve, duration));
  console.log(`${name} completed`);
}

// 실행
parallelAsyncTasks();