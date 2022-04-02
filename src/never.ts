export {};

function error(message: string): never{
  throw new Error(message);
}

try{
  let result = error("test");
  console.log({result});
}catch(aaa){
  console.log({aaa});
}

let foo: void = undefined;
let bar: never = error("only me");
