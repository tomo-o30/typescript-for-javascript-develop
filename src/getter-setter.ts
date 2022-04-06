export {};

class NyNumberCard{
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string{
    return this._owner;
  }

  set secretNumber(secretNumber: number){
    this._secretNumber = secretNumber;
  }
  debugPrint(){
    console.log( this._secretNumber);
  }
}

let card = new NyNumberCard("ham", 12);
//card.owner = "Ham"
console.log(card.owner);

card.secretNumber = 12345;
console.log(card.secretNumber);
card.debugPrint();