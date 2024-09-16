console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

const password =
  receivedPassword === SUPER_SECRET_PASSWORD
    ? "Welcome! You are logged in as Brunhilde1984."
    : "Access denied!";
console.log(password);

// Part 2: Even / Odd
const number = 1;

if (number % 2 === 0) {
  console.log("Number is even!");
} else {
  console.log("Number is odd!");
}

const numberOddEven = number % 2 === 0 ? "Number is even!" : "Number is odd!";
console.log(numberOddEven);

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;

if (numberOfHotdogs < 5) {
  console.log("2 Euro per hotdog!");
} else if (numberOfHotdogs < 100) {
  console.log("1,50 Euro per hotdog!");
} else if (numberOfHotdogs < 1000000) {
  console.log("1 Euro per hotdog!");
} else {
  console.log("0,10 Euro per hotdog!");
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour >= 17 ? "Partytime" : "Still need to learn";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Coach" ? "Coach" : userName) + "!";

console.log(greeting);
