// (() => {
//   var names = ' web';
//   console.log(names);
// })();


// let fun = () => {
//   var name = "Diyora";
//   console.log(name);
// };
// fun()


// ================
// moment js

// function moment() {
//   moment.local = () => console.log('uz');
//   moment.counter = () => console.log("");
//   let time = new Date();
//   return {
//     format(ex) {
//       let data = {
//         LT: `${time.getHours()}:${time.getMinutes()}`,
//         LTS: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
//       }
//       console.log(data[ex]);
//       return data[ex]
//   }
//   };
// };

// moment().format('LTS');
// moment.local();
// moment.counter();

// ========
// NFE

// const getData = function callback() {
//   console.log("text");
//   callback(); // recursion'da ishlatsak bo'ladi.
// }
// getData();

// ========
// New function

// let sum = new Function('a', 'b', 'return a+b')
// console.log(sum(2,4));

// =====
// settimeout & settimeinterval
// let stId = setInterval(function() {
//   let time = new Date();
//   console.log(time.getSeconds());
// }, 1000);
// setTimeout(function() {
//   clearInterval(stId);
// }, 5000)

// if (1) {
//   clearTimeout(stId)
// }
// function greet() {
//   console.log("Hello!");
// }
// setTimeout(greet, 1000);

// let time = 5;
// let num = setInterval(function() {
//   console.log(time--);
//   if (time == 0) clearInterval(num);

// },1000)

// =========
// apply call bind
let users = [
  {name: "cc", surname: "mm"},
  {name: "cc", surname: "mm"},
  {name: "cc", surname: "mm"},
  {name: "cc", surname: "mm"},
  {name: "cc", surname: "mm"},
  {name: "cc", surname: "mm"},
  {name: "cc", surname: "mm"},
  {name: "cc", surname: "mm"},
]

function getInfo(a, b, c) {
  console.log(a,b,c);
  console.log(this.name, this.surname);
}
getInfo.call({name: "eshmat", surname: "toshmat"}, '123', 425, 45);
getInfo.apply({name: "eshmat", surname: "toshmat"}, ["456", 425, 44]); // appyly param'ga oladigan qiymatni array ko'rinishida qabul qiladi.
let test = getInfo.bind({name: "eshmat", surname: "toshmat"}, '123', 425, 45);
test();
// Bind ni ishlatish uchun alohida bita o'zgaruvchi'ga biriktirib, uni function sifatida chaqirsakkina ishlaydi.

// apply call bind, this'ga context berish uchun ishlatiladi.
// ma'lumot biriktirish uchun

// users.forEach((usr) => {
//   // console.log(usr.name, usr.surname);
//   getInfo.call(usr)
// });
