// DALIDA SHOP

let customer;
customer = "Ayan";
const ADDRESS = "Altyn Bulak";
const info = `Name: ${customer}`;

// DATA TYPES
let number = 2;
let shopIsOpened = false;
shopIsClosed = true;
let income = null;

// PRINT
console.log(income); // undefined

// DATA TYPES.OBJECTS
let product = {
  name: "phone",
  price: 100000,
  origin: "Vietnam",
};

alert(product.name); // phone
alert(product.origin); // Vietnam

// Adding once more
product.sale = "50%";

// Deleting added object
delete product.sale;

// Similarity
let name = "banana";
let price = 800;
let product = { name, price };

// Functions in objects
product.tap = function () {
  console.log(product.name + product.price);
};
product.tap(); // phone 100000

// Check if object contains property
alert("price" in product);

// ARRAYS
let phones = ["Iphone", "Samsung", "Xiaomi"];
let laptops = ["Asus", "MAC", "Acer", "Samsung"];
console.log(laptops.length); // 4

phones.push("Huawei"); // ["Iphone", "Samsung", "Xiaomi", "Huawei"]
laptops.pop(); // ["Asus", "MAC", "Acer"]

laptops.unshift("HP"); // ["HP","Asus", "MAC", "Acer"]
phones.shift(); // ["Samsung", "Xiaomi", "Huawei"]

let technics = phones.concat(laptops); // ["HP","Asus", "MAC", "Acer", "Samsung", "Xiaomi", "Huawei"]

// REGULAR && STRICT comparing

alert("01" == 1);
alert("42" == 42); 
alert(null == undefined); // 3x true

alert("01" === 1);
alert("42" === 42);
alert(null === undefined); // 3x false

// Ternary expression 
let compare = 1 === "1" ? "right" : "false";
console.log(result); //false

// Coalescing operator 
let selectedLaptop;
let thisLaptop = selectedLaptop ?? "Asus";
console.log(thisLaptop); //undefined

// TRUTHY FALSY VALUE 
let selectedPhone = "Iphone";
if (selectedPhone) {
  console.log("Let's buy and Dilda will have extra budget" + selectedPhone);
} else {
  console.log("Basket is empty"); 
} // "Let's buy and Dilda will have extra budget" "Iphone"

// When will be true
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)

// When will be false
if (false)
if (0)
if (-0)
if ("")
if (null)
if (undefined)

// Finding total by using loop
laptops = ["Asus", "MAC", "Acer", "Samsung", "Acer"];

let count = 0;
for (let i = 0; i < laptops.length; i++) {
  if (groceries[i] === "Acer") {
    count += 1;
  }
}
console.log(count);

// FUNCTIONS
function countPhones() {
  return phones.length;
}

countGroceries(); //3

function canBuyProduct(product) {
  return laptops.includes(product);
}

canBuyProduct("Iphone"); //false
canBuyProduct("Asus");  //true
canBuyProduct("LG");    //false

// DESCTRUCTURING
function show({ name, price }) {
  console.log(`${name} costs ${price}tg`);
}

function show({ name: n, price: p }) {
  console.log(`${n} costs ${p}tg`);
}

// FUNCTIONS.FUNCTION EXPRESSION
let countPhones = function () {
  return groceries.length;
};

// FUNCTIONS.ARROW FUNCTION
let countPhones = () => {
  return phones.length;
}; //3
let canBuyProduct = (product) => {
  return phones.includes(product);
}; //true or false
// FUNCTIONS.ARROW FUNCTION ONE LINE

// FUNCTIONS.MAP, FILTER, REST, SPREAD
phones = ["Iphone", "Iphone", "Iphone", "Samsung","Samsung", "Samsung"];
let sams = phones.filter((phone) => phone === "Samsung"); // "Samsung", "Samsung","Samsung"
let onebyone = phones.map((phone) => marker(phone));

// REST puts the rest of some specific user-supplied values into a JavaScript array.
// So for instance, you can call the sort(), map(), forEach(), or pop() method on a rest parameter.

const { firstName, lastName, ...otherInfo } = {
  firstName: "Dalida",
  lastName: "Yerkuli",
  companyName: "Dalida's shop",
  profession: "Queen",
  gender: "Female",
};

console.log(otherInfo);

// SPREAD helps you expand iterables into individual elements. So effectively, it does the opposite thing from the rest operator.
// Он не сворачивает элементы, а наоборот, растягивает их. С его помощью обычно копируют или сливают массивы.
const greeting = ["Dalida", "Yerkuli", "ovoshaya"];
const aboutMe = ["Zdravstvuite", ...greeting, "Chem mogu pomoch?"];
console.log(aboutMe);

// How to Use Spread to Convert a String into Individual Array Items
const myName = "Dalida Yerkuli";
console.log([...myName]);

// Spread Example 3: How the Spread Operator Works in a Function Call
const numbers = [1, 3, 5, 7];
function addNumbers(a, b, c, d) {
  return a + b + c + d;
}
console.log(addNumbers(...numbers));

// Spread Example 3:
const myName = "Dalida";
function spellName(a, b, c) {
  return a + b + c;
}
console.log(spellName(...myName));
