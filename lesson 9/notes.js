// numbers & string

// console.log(1e-2); // kasr songa otb ketadi.
// console.log(1e7); // e orqali yoniga raqam yozib shuncha nol qoshishimiz mumkin.
// console.log(1e500); //meyordan otb ketsa infinity chqadi.

console.log(0.1 + 0.01);
console.log();

// toFixed(1) - qiymarlanri kasrdan keyin nechta son qolishi. tofixed avotimatik tarzda numberni stringga aylantrb yuboradi.
// Numberga convert qilib yuborhs uchun +, NUmber dan foydalaniladi.
// let num = 0.1 + 0.2

// console.log(Number(num.toFixed(1)));


// stringni numberga o'zgartsh uchun NUmber yoki pareint,parsefloat dan foydalansak boladi.
// let num = "0.1 + 0.2"
// console.log(parseInt(num)); //ko'rgan birinchi raqamini oladi.
// console.log(parseFloat(num)); // ko'rgan birnchi fraction'ni oladi.
// console.log(Number(num)); // NaN qaytadi chunki raqam bollmagan narsalar ustida arifmetik amallar bajarilyabti.
// console.log(Number(eval(num))); // string'da amallarni bajarish convert uchun evaldan foydalansak boladi
// console.log(Number.parseInt(num));
// console.log(Number.parseFloat(num));//number bilan ham bersak boladi.

let num = 12;
console.log(num.toString(6)); //raqamni stringga o'girish

// .tofixed() - kasrdan keyin nechta son qolishi
// .toString() (base)- raqamni stringga o'girish, descimal to binary
// .toFixed (count) - nechta kasr qismi qolishi
