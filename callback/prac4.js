function test(print){
  console.log(`result: ${print}`)
}

function later(pram, callback){
  callback(pram)
}
later("a", test)

