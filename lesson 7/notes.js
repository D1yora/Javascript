// let obj = {
//   eshmat: 100,
//   toshmat: 130,
//   gulmat: 200,
// };

// let sum = 0;

// // console.log(sum);

// for (usr in obj) {
//   // console.log(sum += obj[usr]);
//   console.log(sum = sum + obj[usr]);
// }

// usr ni o'zi yozilsa, bizga key chiqarib beradi.
// agar biz obj[user] yozsak value chiqadi.
// obj ichidagi infolarni olish uchun bz for dan foydalanishimiz mumkin.

// let menu = {
//   width: 200,
//   height: 200,
//   title: 'webbrain',
// };

// for(key in menu) {
//   if(typeof menu[key] === 'number') {
//     menu[key] = menu[key] * 2;
//     // console.log(menu[key] * 2);
//   }
//   // console.log(typeof menu[key] === 'number');
// }

// console.log(menu);

// let obj1 = {name: 1};
// let obj2 = obj1;
// let obj3 = structuredClone(obj1);
// obj1.name = 2;
// console.log(obj1, obj2, obj3);

// title = 'name'

// let obj = {name: 'webbrain', title};

// console.log(obj[title]);

// garbage collection => agar malumot ozgartrilsa, heap dagi malumotlar bn steak dagi connection uziladi. va heapdagi info ochiriladi.

// let obj = { age: 1};

// obj = 234;

let age = { age: 1};
let name = { name: 1};

// console.log(Object.assign(age, name));
// birbiriga add qiladi, object assign

// console.log({ ...age, ...name });
// spread operator ... nuqtali,


// ***********************

// { : }

// let account = "Justdiyo";

// const account = {
//   account: 'webbraim',
//   founded: 2020,
//   location: "Tashkent",
//   "full name": "webbrain IT academy",
//   major: "frontend"
// }

// Object.freeze(account) //malumotni ozgartrb bomedi, will be freezed
// Object.seal(account); // obj ichidagi  amlumotni yangilasa boladi.
// delete account.major;
// let key = "major";
// console.log(account);

// console.log(account['major']); // obj ichidagi haqiqiysini oladi
// console.log(account[key]); //obj tashqarisidagi also included
// console.log(account.key);

// const ac1 = {
//   name: 'webbraim',
//   major: "frontend",
// };

// console.log('name' in ac1);

// const ac2 = {}
// Object.assign(ac2, ac1); //value bilan tenglab qoylgan bilan bir xil
// console.log(ac2);
// const ac2 = structuredClone(ac1);
// ac1.name = "bhfjcsdbhjcd";
// console.log(ac2);
// const account2 = {
//   account: 'webbraim',
//   major: "frontend"
// }
// const account3 = account1;
// console.log(account1 == account3);
// console.log(account1 === account3);

// const ac1 = {
//   name: 'webbraim',
//   major: "frontend",
//   founded: 2022,
//   students: 1000,
//   mentors: 5,
// };

// for(let i in ac1){
//   console.log(i);
// }
// i orqali bz obj key larini olyabmiz

