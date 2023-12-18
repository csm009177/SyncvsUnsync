// 비동기 함수에서의 try-catch:
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("데이터 불러오기 에러: " + error.message);
  } finally {
    console.log("데이터 불러오기 시도");
  }
}

fetchData();