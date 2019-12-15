function* prostyGenerator() {
  yield "1";
  yield "2";
  yield "3";
}

const iterator = prostyGenerator();
console.log(iterator.return("123"));
