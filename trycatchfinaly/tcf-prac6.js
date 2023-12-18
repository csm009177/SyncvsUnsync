// try-catch를 이용한 JSON 파싱:
try {
  const jsonString = '{"key": "value"}';
  const parsedObject = JSON.parse(jsonString);
  console.log(parsedObject);
} catch (error) {
  console.error("JSON 파싱 에러: " + error.message);
}