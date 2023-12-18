// 비동기 작업을 처리하는 함수:
function fetchData() {
  return new Promise((resolve) => {
    // 비동기 작업 수행
    setTimeout(() => {
      resolve("데이터를 성공적으로 불러왔습니다.");
    }, 100);
  });
}

fetchData().then((data) => {
  console.log(data);
});