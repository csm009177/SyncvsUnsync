// 중첩된 try-catch:
try {
  console.log("외부 Try 블록 시작");
  try {
    console.log("내부 Try 블록 시작");
    throw new Error("내부 예외 발생!");
  } catch (innerError) {
    console.error("내부 Catch 블록: " + innerError.message);
  }
} catch (outerError) {
  console.error("외부 Catch 블록: " + outerError.message);
} finally {
  console.log("Finally 블록: 항상 실행됩니다.");
}