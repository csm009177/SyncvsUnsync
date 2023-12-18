// 비동기 작업 중단과 재개:
let isDataLoaded = true;

const loadData = new Promise((resolve) => {
  // 이 코드에서 중단되는 부분은 if (isDataLoaded) 조건문입니다.
  if (isDataLoaded) {
    resolve("이미 데이터를 불러왔습니다.");
  } else {
    // 데이터를 불러오는 비동기 작업
    setTimeout(() => {
      isDataLoaded = true;
      resolve("데이터를 성공적으로 불러왔습니다.");
    }, 2000);
  }
});

loadData.then((result) => {
  console.log(result);
});