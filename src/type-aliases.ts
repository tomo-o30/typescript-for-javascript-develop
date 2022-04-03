export {};

type Mojiretsu = string;

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

const example: Profile = {
  name: "ham",
  age: 43
}


type Profile = {
  name: string;
  age: number;
}

type Profile2 = typeof example;