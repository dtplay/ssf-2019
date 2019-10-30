//const name = 'Fred';
//
//const hello = function(name) {
//	return `Hello ${name}`;
//}
//
//
//const apply = function(f, v) {
//	return f(v);
//}
//
//const mkGreeting = function(name) {
//	const f =
//		function() { 
//			return `Hey I'm from mkGreeting: ${name}`; 
//		}
//
//	return (f);
//}
//
//console.info('>> ', apply(hello, name));
//
//const helloFred = mkGreeting('fred');
//const helloBarney = mkGreeting('barney');
//
//console.info('** fred:', helloFred());
//console.info('** barney', helloBarney());

//console.info(hello(name));
//console.info(hello('barney'));
//
const mkPower = function(exp) {

	const power = function(base) {
		let ans = 1;
		for (let i = 0; i < exp; i++)
			ans *= base;
		return (ans);
	}
	return (power);
}

const square = mkPower(2);
const cube = mkPower(3);

console.info('6^2 = ', square(6))
console.info('6^3 = ', cube(6))

const power = function(base, exp) {
	let ans = 1;
	for (let i = 0; i < exp; i++)
		ans *= base;
	return (ans);
}

//console.info('2^3 = ', power(2, 3));
//console.info('3^3 = ', power(3, 3));
