
// if,  if else, nullish

// let weather = 15;

// if(0 > weather) {
//   console.log("havo juda sovuq");
// } else if(0 < weather && 10 >= weather) {
//   console.log("havo sovuq");
// } else if(10 < weather && 20 >= weather) {
//   console.log("havo iliq");
// } else if(20 > weather) {
//   console.log("havo issiq");
// }


// console.log(0 || 1); // 0 false 1 true , faqat true'sini tanlab oladi
// console.log(0 && 1); // 0 &da brnchisini tanlab oladi
// console.log(0 ?? 1); // 0 true
// console.log(null ?? undefined); // undefined (2)
// console.log(undefined ?? null); // null (2)

// console.log(false || true); // value'si 1ga teng bolganini choose qiladi
// console.log(false && true); // false brnchsini tanlab oladi
// console.log(false ?? true); // false> voz it thinks it's true

// let login = "ceo";
// let pw = 0;

// console.log(1 ?? pw ?? login); // 1 brnchisni tanlavoladi
// console.log(1 || pw || login); // 1
// console.log(1 && pw && login); // 0   /// ???
// console.log(1 || pw && login); // 1
// console.log(1 && pw || login); // ceo   // ????
