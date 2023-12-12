function computer(cpu, mb, pw, ram,  callback){
  console.log(`${cpu}, ${mb}, ${pw}, ${ram}`)
}


function later(pram1,pram2,pram3,pram4,callback){
  callback(pram1,pram2,pram3,pram4)
}
later("12400","z690","1000w","ddr5 4200", computer)

