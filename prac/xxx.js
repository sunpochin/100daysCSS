var name = "John";
function callThis() {
  // console.log(this);
  console.log(this.name);
}
callThis();


const john = {
  name: "john",
  callJohn() {
    console.log(`hello, ${this.name}`);
  },
};

john.callJohn(); // hello, john


function Cellphone(brand) {
  this.brand = brand;
}

Cellphone.prototype.getBrand = function () {
  return this.brand;
};

let newIPhone = new Cellphone("Apple");
let newPixelPhone = new Cellphone("Google");

console.log(newIPhone.getBrand()); // Apple
console.log(newPixelPhone.getBrand()); // Google


let getThis = () => this;
console.log(getThis());

