function myCallback(result) {
  console.log('Callback 함수가 호출되었습니다. 결과는 ' + result + ' 입니다.');
}

function doAsyncTask(callback) {
  setTimeout(function () {
    const result = "비동기 작업 완료!";
    callback(result);
  }, 100); // 0.1초 후에 callback 함수를 호출
}

doAsyncTask(myCallback); 
// myCallback 함수를 doAsyncTask 함수의 인자로 전달