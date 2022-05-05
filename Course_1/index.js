//Ex1
calculate = (n) => { 
  return n % 2 == 0 ? n - 2 : 2 * n;
}
console.log(calculate(4));
console.log(calculate(5));

//Ex2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primes = arr.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) 
      return false;
  }
  return num !== 1;
});
console.log(primes);

//Ex3
function saveStrings(myArray) {
  const stringsArray = [];

  myArray.forEach(element => {
    if(typeof element === 'string') 
      stringsArray.push(element);
  });
  return stringsArray;
}

console.log(saveStrings([1, '1', 'salut', 2, 6, true, 'true']));
console.log(saveStrings([1, 2, 3, 4]));
console.log(saveStrings(['1','2','3','4']));

//Ex4
function addDigits(number) {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    if(parseInt(number[i]) %2 == 0)
      continue;
    else
      sum += parseInt(number[i]);
  }
  return sum;
}

console.log(addDigits("1523"));

//Ex5
const fruit = 'Papayas';
switch (fruit) {
  case 'Oranges':
    console.log('Oranges are good.');
    break;
  case 'Strawberries':
    console.log('Strawberries are sweet');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are amazing.');
    break;
  case 'Bananas':
    console.log('Bananas are delicious');
    break;
  default:
    console.log('Not a fruit');
}
