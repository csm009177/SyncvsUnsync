// try-catch를 사용한 자원 정리:
function openFile() {
  console.log("파일 열기");
  throw new Error("파일 열기 실패");
}
function processFile() {
  try {
    openFile();
  } catch (error) {
    console.error("파일 처리 중 에러: " + error.message);
  } finally {
    console.log("파일 처리 종료");
  }
}
processFile();