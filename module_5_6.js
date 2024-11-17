// Задание 5.10.1

let quantity = prompt('Введите число');
let square = (+quantity) **2
let cube = (+quantity) **3
alert(`${+quantity}\n${+square}\n${+cube}`);


// // Задание 5.10.2

// let promocode = prompt('Введите промокод');
// if( promocode == "СКИДКА" || promocode == "скидка" || promocode == "скиДка") { 
//     alert('Промокод применён');
// } else {
//     alert('Промокод не работает'); 
// }


// // Задание 5.10.3

// let name = prompt('Введите ваше имя');
// let year = prompt('Введите ваш год рождения');
// let currentYear = new Date().getFullYear();
// let age = currentYear - year
// if(year = 'number') { 
//     alert(`${name}: ${age}`);
// } else {
//     alert('Год должен быть числом!'); 
// }


// // Задание 5.10.4

// let name = prompt('Введите ваше имя');
// let year = prompt('Введите ваш год рождения');
// let currentYear = new Date().getFullYear();
// let age = currentYear - year
// let remains = age % 10;
// let annum;
//  if (remains ===1 && year % 100 !== 11) {
//     annum = `${name}: ${age} год`;
//  } else if (remains >=2 && remains <= 4) {
//     annum = `${name}: ${age} года`;
//  } else {
//     annum = `${name}: ${age} лет`;
//  }
//  alert(annum)


//  //  Задание 5.10.5

//  let maxAmount;
// let age = prompt('Введите ваш возраст');
//  if (age < 18) {
//         alert("Кредит вы не получите, так как вам нет 18 лет.");
//     } else if (age >= 18 && age <= 21) {
//         maxAmount = 50000;
//     } else if (age >= 22 && age <= 35) {
//         maxAmount = 400000;
//     } else if (age >= 36 && age <= 65) {
//         maxAmount = 1000000;
//     } else {
//         alert("Кредит не предоставляется лицам старше 65 лет.");
//     }
// let thousendAmount = prompt("Введите желаемую сумму кредита (кратную 1000):");
// if (isNaN(thousendAmount) || thousendAmount === null) {
//         alert("Пожалуйста, введите корректную сумму.");
//     }
// thousendAmount = Number(thousendAmount);
//     if (thousendAmount % 1000 !== 0) {
//         alert(`Сумма кредита должна быть кратна 1000. Мы можем вам выдать ${maxAmount} рублей`);
//     } else if (thousendAmount > maxAmount) {
//         alert(`Мы можем вам выдать ${maxAmount} рублей.`);
//     } else {
//         alert(`Мы можем вам выдать ${thousendAmount} рублей.`);
//     }


// // Задание 6.6.1

// let wordRight = prompt("Введите слово")
// let wordLeft = '';
//     for (let i = wordRight.length - 1; i >= 0; i -= 1) {
//         wordLeft += wordRight[i];
//     }
// if (wordRight === wordLeft) {
//         console.log(`Слово ${wordRight} является палиндромом`);
//     } else {
//         console.log(`Слово ${wordRight} не является палиндромом`);
// }


// // Задание 6.6.2

// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
// const uniqueSet = new Set(arr)
// console.log(uniqueSet)


// // Задание 6.6.3

// let num = prompt("Введите любое число")
// let quantity = Number(num)
// let quantityArray = []
// for (let i = 0; i <= quantity; i += 1) {
//     quantityArray.push(i);
// }
// console.log(quantityArray);


// // Задание 6.6.4

// const board = [
//     ['x', 'o', 'x'],
//     ['o', 'x', 'o'],
//     ['x', 'o', 'x'],
//   ];

//   for (let i = 0; i < board.length; i++) {
//     let row = "";
//     for (let j = 0; j < board[i].length; j++) {
//     row += board[i][j] + " ";
//     }
//     console.log(row);
//   }


// //   Задание 6.6.5

// const arrValues = [];
// for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//         // массив, поэтому добавляем его элементы в arrValues
//         arrValues.push(...obj[key]);
//     } else {
//         arrValues.push(obj[key]);
//     }
// }
// console.log(arrValues);
