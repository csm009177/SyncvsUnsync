// try-catch-finally를 활용한 함수 예외 처리:
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("나누는 수는 0이 될 수 없습니다.");
    }
    return a / b;
  } catch (error) {
    console.error("에러 발생: " + error.message);
  } finally {
    console.log("나눗셈 시도");
  }
}
console.log(divide(10, 2));  // 정상 실행
console.log(divide(10, 0));  // 에러 발생