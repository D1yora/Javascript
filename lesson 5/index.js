// switch

// if(condition = weather)

// let weather = 'bulut';
// // weather = 'qor'
// switch(weather) {
//   case('yomgir') : console.log('bugun havo yomgirli');
//   break;
//   case('yomgir') : console.log('bugun havo yomgirli');
//   case('yomgir') : console.log('bugun havo yomgirli');
//   break;
//   case('qor') : console.log('bugun havo qorli');
//   default : console.log('bugun havo bulutli');
// }

// for

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// let i = 1;
// for(i; i <=10; i++) {
//   console.log(i);
// }



// *********************************
// while
// *********************************

// while(true) {
//   console.log('hey');
// }
// while ichidagi qiymat true ga teng boloishi kerak, bolmasa yurmaydi.

// let i = 4;
// while(i) {
//   console.log(i);
//   i--;
// }

// while qavs ichida qiymat yozamiz. kod yurgiziladi agar while() togri bolsa

// let i = 4;
// do {
//   console.log(i);
//   i--;
// } while (i == 0);

//do while da, kodni birnchi ishlatb keyn while ni ohirga tushrb qoyadi.

// function getAvr() {
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('Hello Diyora!');
//   console.log('=============');
// }

// interview questions

// functionlarni create qilish yo'llari.
//function declaration
// function expression
// arrow function

// functionlarni declare qilish yo'llari.
// hohlagan joyimizda yurgizishimz mumkin, chunki js engine tomonidan yaratilgan. variablega ohwab br xil takrorlanmas nomi boladi.

// function expression => variable ga brktiriladi. lekin bu var ga ohwedi. faqat intiliaze bolgandan keyn chaqirish mumkin. for ex:

// const hello = function() {
//   console.log('hey');
// }

// hello();

// hoisting nima?
// function expression hamda variablelarni fayllarni eng yuqori qismida declare qilib ketishiga aytiladi.
// callback function nima?
//function inside another functions of parameter

// arrow function
// const getAvr = ()=>{}

// dynamic => function ichidagi malumotlarni ozgartrsh.bu uchun bz functionlarni parametr xususiyatidan foydalanamiz.
// const getAvr = function (name, surname, age) {
//   // console.log(name);
// // let i = 4;
//   console.log(`Name: ${name}`);
//   console.log(`Surname: ${age}`);
//   console.log(`Age: ${surname}`);
// }

// getAvr("Nozima", "Mamatova", 21);
// getAvr("Umar", 'frbjrebj', '20');
// getAvr("Abu-bakr");

// const test =()=>{
//   let name = "diyora"
//   console.log(name);
// }

// test()

// // variable shadow = > variable bir xil nom bilan yani inner var bilan outer var bir xil nomda bolsa, var shadow bo'ladi.

// let name = "nozima"
// const test =()=>{
//   name = "diyora"
//   console.log(name);
// }

// test();
// console.log(name);

// default parametrs | or | if
// 1)
// const telegram = (name, surname) => {
//   if(surname) console.log(name, surname);
//   else console.log(name);
// };
// telegram("diyora", "soyibjonova")

// **** 2)
// const telegram = (name, surname) => {
//   surname ? console.log(name, surname) : console.log(name);
// };

// telegram("diyora")

// 3)
// const telegram = (name, surname) =>{
//   console.log(name, surname || "");
// };
// telegram("diyora")

// or yoki bunday qiymat bersak ham boladi
// const telegram = (name, surname = "") =>{
//   console.log(name, surname);
// };
// telegram("diyora")

// function with return
// const gpa = (a = 0, b = 0, c = 0, d = 0 ) => {
//   let res = (a + b + c + d) / 4;
//   console.log(res);
// }
//   console.log(gpa(5, 4, 4, 4));

// clean code nima?
// naming, nomlashga aytiladi asosan
// get... - return a value
// calc... - calculate sth
// create... - create sth
// camel case - getAge, showPrime