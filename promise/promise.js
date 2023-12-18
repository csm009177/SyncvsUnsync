//* Promise는 비동기 작업을 처리하는 JavaScript의 객체 중 하나로, 
//* 어떤 값 또는 오류가 나중에 반환될 것임을 나타냅니다. 
//* 주로 비동기 작업을 더 쉽게 다루고 여러 개의 비동기 작업을 조율하기 위해 사용됩니다.

//* Pending  (대기중): 초기 상태로, 약속이 이행되거나 거부되지 않은 상태.
//* Fulfilled(이행됨): 약속이 성공적으로 이행된 상태.
//* Rejected (거부됨): 약속이 실패하거나 거부된 상태.

//*  매개변수는 이행(resolve) 함수이고, 두 번째 매개변수는 거부(reject) 함수

const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  // 성공 시 resolve 호출, 실패 시 reject 호출
});

myPromise()