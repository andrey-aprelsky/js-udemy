/*
// базовые арифмиетические операторы 

const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // 2 * 2 * 2

console.log(volume);

// Строки 
const city = 'Москва';
const street = 'Новослободская';
console.log(city + ', ' + street + ' ' + 5);

console.log( 5 % 2); // 1

// Операторы присваивания
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3; // age = age - 3
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++     // age = age + 1
age--     // age = age - 1
console.log(age);

// Операторы сравнения
const vasia = 20;
console.log(age > vasia); // true
console.log(age >= vasia); // true
console.log(age < vasia); // false 
console.log(age <= vasia); //false
console.log(age == vasia); //false
console.log(age != vasia); //true

// Порядок операторов
const box = 100;
const size = 90;
const isSuited = box - 10 > size - 5;
console.log(isSuited);
// 100 -(12) 10 >(10) 90 -(12) 5;

const a = (6 + 10) / 2;
console.log(a);

let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);

//Примитивные типы 

let d = 5;
let e = 5.6;
console.log(typeof d); // number
console.log(typeof e); // number
d = 'строка';
console.log(typeof d);  //string
let isAdmin = d > 10;
console.log(typeof isAdmin); //boolean

let f;
console.log(typeof f); // undefined
f = 5;
console.log(typeof f); //number

let g = null ;
console.log(typeof g); // object
*/
//-----------------------------------------------------------------
/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/
/*
const stavka = 80;
const workTime = 25;
const zakazTime = 40;
const timeToGo = 50;
console.log(zakazTime > timeToGo); // false
console.log(zakazTime * stavka);  //3200

//Данные
const payRateUsd = 80;
const projectHours = 40;
const avaibleHours = (11 - 2) * 5;

//Результат
console.log('Смогу ли я работать? ' + (avaibleHours > projectHours));
console.log('Сколько заработаю? ' + projectHours * payRateUsd);
*/
//--------------------------------------------------------------------
/*Шаблонные строки

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`
console.log(template2);

const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`
console.log(template4);
*/
//Преобразование типов

const age = '18';
console.log(Number(age) + 5);
const userName = 'Вася';
console.log(Number(userName) + 5); // NaN
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean(1)); //(1, 123 , -1, 'sadsd') true (0 , ' ') false
console.log(true + 2); // 3