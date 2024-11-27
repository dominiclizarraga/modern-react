const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
  let evenNumbers = [];
  let oddNumbers = [];

  array.map((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number)
    } else {
      oddNumbers.push(number)
    }
  })
  return [evenNumbers, oddNumbers]
}
console.log(orderNumbers(randomNumbers))
