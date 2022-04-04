export {};

const reducer = (accumulator: number ,currentValue: number) => {
  //console.log({accumulator , currentValue});
  return accumulator + currentValue;
}

const sum: (...values: number[]) => number = (...values: number[]) => {
  //console.log(values);
  return values.reduce(reducer);
};

//sum(1, 2, 3 ,4);
console.log(sum(1, 2, 3 ,4));
