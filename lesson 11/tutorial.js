// advanced array

let str = ['Orange', 'apple', 'Kiwi', 'Banana'];
let num = [1,2,3, 4,5,6];

console.log(str.sort((a,b) => a.localeCompare(b))); //ascii codega qarab joylashuvini chiqarib beradi.
console.log(num.sort());

// map/forEach - for loop
str.map((v,i)=> {
  console.log(i,v);
  return v + i;
})


// foreach da return yo'q
// str.forEach((v,i)=> {
//   console.log(i,v);
// })

// filter
// boolean'ga qaytadi.
// let res = num.filter((v) => v > 10 && v < 100);
// let res = num.filter((v) => {
//   return v === 12;
// });

// // Find
// let resFind = num.find((v) => {
//   return v === 12;
// });
// console.log(resFind);
// console.log(res);

// // FindIndex
// let resIndex = num.findIndex((v) => {
//   return v === 12;
// });
// console.log(resIndex);

// // findLastIndex
// let resFindLast = num.findLastIndex((v) => { // ???
//   return v === 12;
// });
// console.log(resFindLast);

// every
// console.log(num.every((v) => v < 10));

// some
// console.log(num.some((v) => v < 10));

// fill
// console.log(num.fill(4, 0, 2)); // boshlanish indeksi,
// 0 - 2indeksgacha 4 bilan fill qilsin

// fill
// console.log(num.fill(4, 0, 5));

// copyWithin
// console.log(num.copyWithin(0, 2, 3));

// flat
// console.log(num.flat(Infinity));

// flatMap
console.log(num.flatMap((v) => {
  return v;
}));

// agar 2ta ish qilmoqchi bo'lsak
console.log(num.flat(2).map((v) => {
  return v;
}));

// arrayFrom
let ar = Array.from(['web'], (v) => v.toString()); //faqat string bilan array qabul qiladi.
console.log(ar);

// reduce

const ress = num.reduce((sum, curr) => {
  // console.log(sum, curr);
  return sum;
}, 0);
console.log(ress);

// reduce 2ta parametr qabul qiladi. birinchisi calback function, intial state. Nima return'ga qaytsa, shungga teng. for loop'ga o'xshab aylanadi. Har safar aylanganda callback function'ni yurgizib beradi.
