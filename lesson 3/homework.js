// homework!

// prefix and postfix

// let a = 1;
// let b = 1;

// let c = ++a; // => 2 // chunki birinchi 1+1, keyin console ga natija 2 chiqadi
// let d = b++; // => 1 // 1 chiqadi, birinchi console'ga natija 1 ko'rindi, keyin 1+1 bo'ldi

// console.log(d);

// =====================
// assignment result

// let a =2;
// let x = 1 + (a *= 2); // natija 5, 2*2=4 qavs ichidagi amal bajarildi keyin +1=5;

// console.log(x);

// =======================
// type conversion


// console.log("" + 1 + 0); // => javob 10 (string)
// chunki biz birinchi string 1ga qo'shiladi va va stringga aylanadi numberdan keyin + 0 = 10 javob bo'ladi
// empty string + number = string

// empty string equals to 0??????????

// console.log("" - 1 + 0); // => -1 (number)
// "" empty string 0 ga teng lekin u raqam emas?, 0 - 1 = -1 bo'ldi va -1 + 0 = -1
// empty string - number (+ number) = number

// console.log(true  + false); // => 1 (number)
// chunki true = 1, false = 0

// console.log(6 / "3"); //=> 2 (number)
// reason, we can divide number to string (number / string = number)

// console.log("2" * "3"); //=> 6 (number)
// string * string = number (raqamga o'zgarib ketti)

// console.log(4 + 5 + "px"); // => 9px (string)
// 4+5=9 number edi, keyin px qo'shildi, 9px stringga aylandi

// console.log("$" + 4 + 5); //=> $45 (string)
// string + number = string

// console.log("4" - 2); //=>2 (number)
// string - number = number

// console.log("4px" - 2); // => NaN
// coz 4px is not a num.

// console.log("  -9  " + 5); //  -9  5 (string)
// " space with number" + number = string
// space bo'lsa, it will be string not a num.

// console.log("  -9  " - 5); //=> 14 (number)
// " number with space" - number = number
// xullas, string ni biz numberga qo'shsak, we get string, but if we substract we get number!!

// console.log(null - 1); // => 1 (number)
// null + number = number (null = 0)

// console.log(undefined + 1); // => NaN
// undefined + number = NaN (undefined == undefined)

// console.log(" \t \n" - 2); // => -2 (number)
// \t symbol means add a tab (which is usually 4 spaces but can easily be 2 or 8 depending on the context).
// \n - a line break to add a new line to a string.

// console.log(5 > 4); //true
//coz 5 is bigger than 4

// console.log("apple" > "pineapple"); //=>false
// a p dan kichkina

// console.log("2" > "12"); //=> true
// 2 1dan katta

// console.log(undefined == null); //=> true
// values match 0 0

// console.log(undefined === null); //=> false
// different types

// console.log(null == "n0/n0"); //=> false
// null faqat undefined'ga teng!

console.log(null === +"n0/n"); //=> false
// different types
