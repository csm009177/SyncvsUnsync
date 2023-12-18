// try, catch, finally는 자바스크립트에서 예외 처리를 위한 키워드들입니다. 
try { // try 블록은 예외가 발생할 수 있는 코드를 감싸고
  console.log("Try 블록 시작");
  throw new Error("예외 발생!");
} catch (error) { // catch 블록은 예외가 발생했을 때 실행되는 코드
  console.error("Catch 블록: " + error.message);
} finally { // finally 블록은 예외 발생 여부와 상관없이 항상 실행되는 코드
  console.log("Finally 블록: 항상 실행됩니다.");
}