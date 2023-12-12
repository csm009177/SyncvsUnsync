function test(print){
  console.log(`result: ${print}`)
}

test("test");

function later(callback){
  const print = "test2"
  callback(print);
}

later(test); // 콜백이면 안에서 부터 실행된다


