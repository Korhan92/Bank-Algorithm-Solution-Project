const k = 400;
const amounts = [
  100,
  100,
  600,
  300,
  500,
  200,
  100,
  1000,
  100,
  400,
  100,
  800,
  100,
  100,
  100,
  100,
];

const getFinalOrder = (k, amounts) => {
  const result = [];

  const fitleredAmounts = amounts.map((el, i) => {
      if (el <= k) {
        result.push(el);
        return el;
      } else {
        return el;
      }
    })
    .filter((el) => el > k)
    .sort((a, b) => a - b);


  const returnValue = []; 
  const sortedAmounts = [...result, ...fitleredAmounts];

  console.log(sortedAmounts);
  
  sortedAmounts.forEach((el) => {
    if (returnValue.includes(amounts.indexOf(el) + 1)) {
      amounts[amounts.indexOf(el)] = el + 1;
    }
    returnValue.push(amounts.indexOf(el) + 1);
  });

  return returnValue;
};
console.log(getFinalOrder(k, amounts));