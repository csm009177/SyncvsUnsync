// 예외가 발생하지 않는 경우:
try {
  console.log("Try 블록 시작");
// 예외가 발생하지 않는 코드
} catch (error) {
  console.error("Catch 블록: " + error.message);
} finally {
  console.log("Finally 블록: 항상 실행됩니다.");
}