export const mystery2 = (num) => {
  return (num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0);
};

// Years not divisible by 4 return a falsy result
// Years divisible by 400 return a truthy result (failed)
// Years divisible by 100 return a falsy result
// Years that are divisible by four return a truthy result (failed)
