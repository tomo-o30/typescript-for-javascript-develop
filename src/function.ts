export {};

function bmi(height: number, weigth: number): number{
  return weigth / (height * height);
}

console.log(bmi(1.78, 86));