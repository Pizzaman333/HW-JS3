const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const email = "andrijmalchevv369@gmail.com";
console.log("Is there an @?", email.includes("@"))
console.log("The length of email is", email.length)

const firstWord = "My ";
const secondWord = "name ";
const thirdWord = "is ";
const fullName = firstWord + secondWord + thirdWord + "Victor";
console.log(fullName)

const userName = prompt("Введіть своє ім'я");
const payment = 3333;
console.log(`Дякуємо, ${userName}! До сплати ${payment} гривень`)