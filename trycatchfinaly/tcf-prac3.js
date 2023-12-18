// Catch 블록이 없는 경우:
try {
  console.log("Try 블록 시작");
  throw new Error("예외 발생!");
} finally {
  console.log("Finally 블록: 항상 실행됩니다.");
}