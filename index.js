const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Введите имена адресатов через запятую: `, (names) => {
  let myArray = names.split(", ");
  console.log(`Список адресатов:`);
  for (let i = 0; i < myArray.length; i++) {
    console.log(`${i + 1}. ${myArray[i]}.`);
  }
  rl.question(`Укажите номер адресата: `, (recepient) => {
    console.log(`Сообщение получит ${myArray[recepient - 1]}.`);
    rl.close();
  });
});
