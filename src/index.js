console.log("Hello World");

let x = 17;

var isPrime = true;

for (let i = 2; i < x; i++) {
  if (x % i == 0) isPrime = false;
}
if (isPrime == false) console.log(`${x} is not a prime Number`);
else console.log(`${x} is a prime number`);
