// 에러 객체 정보 활용:
try {
  // 예외 발생 시 에러 객체에 추가 정보를 포함
  throw new Error("예외 발생!");
} catch (error) {
  console.error("에러 메시지: " + error.message);
  console.error("에러 스택: " + error.stack);
}