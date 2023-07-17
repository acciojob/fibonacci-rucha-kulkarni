
let a = 0, b = 1;
function fibonacci(num) {
	if(num<=2){
		return n-1;
	}
	for(let i = 3; i<=num; i++){
		let temp = b;
		b = a + b;
		a = temp;
	}
	return b;
}

module.exports = fibonacci(num);
