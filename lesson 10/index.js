// string

// numbers & string

// console.log(1e-2); // kasr songa otb ketadi.
// console.log(1e7); // e orqali yoniga raqam yozib shuncha nol qoshishimiz mumkin.
// console.log(1e500); //meyordan otb ketsa infinity chqadi.

// console.log(Number(0.1 + 0.2).toFixed(10));

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

// let num = 12;
// console.log(num.toString(6)); //raqamni stringga o'girish

// .tofixed() - kasrdan keyin nechta son qolishi
// console.log(parseInt("101", 2)); // binarydan decimalga o'zgartrlyabti.
// .toString() (base)- raqamni stringga o'girish, descimal to binary
// .toFixed (count) - nechta kasr qismi qolishi
// isNaN() - raqam emasligini tekshiradi.

// Math.round(2.4) // sonni yaxlitlaydi.
// Math.floor(2.999) // yuqoriga   qarab yaxlitlaydi // 3
// Math.trunc(10.999) //10 kasr qismini chqarb olish
// console.log(Math.ceil(3.1)); // kasr bolsa boldi, 1ga kotarb yaxlitlaydi.
// 10
// 100
// 1000
// nechigacha chqarsh uchun osha songa kopaytrb qoyish kerak
// console.log(Math.trunc(Math.random() * 10));

// console.log(Math.min(1, 2, 33, 5, 9)); // ichidagi eng kichkina raqamni topib beradi
// console.log(Math.max(1, 2, 5, 9, 35, 55));

// console.log(Math.pow(5, 3)); //darajaga ko'tarish
// console.log(6 ** 2); // darajaga kotairhs

// console.log(Math.sqrt(9)); // 2 darajasini chiqarish
// console.log(Math.cbrt(27)); // kubini chiqarish

// console.log(Math.sign(-0)); // sign 1 0 1 qaytarib beradi.

// *********

// console.log(parseInt(5));
// 2)
// function get(min, max) {
//   if (min < max) {
//     console.log(max - min);
//   }
//   else if (min - max) {
//     console.log(min - max);
//   }
// }
// get(5, 10)

// 3)
// Math.floor(2.999) // yuqoriga   qarab yaxlitlaydi // 3
// Math.trunc(10.999) //10 kasr qismini chqarb olish
// console.log(Math.ceil(3.1)); // kasr bolsa boldi, 1ga kotarb yaxlitlaydi.

// 4)
// function randomIntiger(min, max) {
//   if (condition) {

//   }
// }

// const test = ;

function makeNegative(num) {
  it("test", () => {
    test.assertEquals(makeNegative(42), (-42));
  });
}

makeNegative(42)
