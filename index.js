const array = ['a', 'b', 'c'];

function iterativeLog(array) {
  array.forEach(function(element, index) {
  console.log(`${index}: ${element}`);
});
}
