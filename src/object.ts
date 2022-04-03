export {};

let profile1: object = { name: "ham"};
profile1 = {aaa : "111"};

let profile2: {name: string;} = { name: "ham"};
profile2 = { name: "aaa"};

console.log(profile2);