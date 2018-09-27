module.exports = function getZerosCount(number) {
  // your implementation
  let zeros = 0;
	while (number > 0) {
	number /= 5;
	zeros += Math.floor(number);
}
return	zeros;
}
