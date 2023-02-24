// string

// Quotes
// let str1 = "webbrain"; //double quote
// let str2 = 'webbra'; // single quote
// let str3 = `webbrain`; // back tick

// console.log(str1, str2, str3);


// special characters
// \n - new line
// \ - ignores chars in "",''

// string 2 xil usulda yasalsa boladi. '',"",``lar orqali
// 2) new String() constructor orqali
// farqi, string'da value qaytaradi. constructor'da string

// console.log(str1.localeCompare(str2)); // 0 true
// console.log(str2.localeCompare(str1)); // -1 false
// console.log(str1.localeCompare(str2)); // 1 false
// qaysi biriga taqqoslayotganimizga bog'liq

// ******
// accessing chars
// by index[] - only positive Numbers
// by .at - can get minus value
// by .charAt(index) - not minus value

// let str1 = "webbrain";
// console.log(str1[0]); // element 1 dan, index 0 dan boshlanadi.
// console.log(str1[-1]); // undefined -  qabul qilmaydi.
// console.log(str1.at(-5)); // n
// console.log(str1.charAt(1)); // w

// let str = "webbrain academy";

// console.log(str.indexOf('my')); // 14 | nechinchi indeksdan boshlansa, shu raqamni chiqarb beradi
// console.log(str.indexOf('efjf')); // malumot yoq bolsa -1 chiqarb beradi.
// console.log(str.indexOf('bb', 5)); // -1 | 5nchi indeksdan boshlab qidirgin.
// console.log(str.lastIndexOf('bb', 6)); // oxiridan boshlab tekshiradi.
// /////
// let str = "webbrain academy";

// console.log(str.includes("in")); // true false qaytaradi
// console.log(str.endsWith("y")); // true false qaytaradi, nima bn tugashini tekshiradi.

// console.log(str.padEnd(22, ".")); // oxiriga
// console.log(str.padStart(30, 1)); //boshiga qo'yadi

// console.log(str.slice(2, 5));//kesib olish. minus qiymat oladi.
// console.log(str.substring(2, 0)); //we - qabul qilmaydi. o'zi togrilab oladi.
// console.log(str.substr(2, 5)); // index mas, nechta kesb olish kerakligini korsatradti.

// console.log(eval(`2+2`)); //stringda calculate qb beradi

// let str = "webbrain academy";
// console.log(str);
// console.log(str.trim()); // space'ni ignor qiladi,boshi+oxiri

// let str = "webbrain academy";
// console.log(str.split()); //arrayga o'zgartrb beradi.
// console.log(str.concat("grbjrjbe fbjkfdbjfd")); //malumot qoshadi

// console.log(new String("erfbj").valueOf()); //ichidagini qiymatini oliib beradi.
// console.log(str.replace("web", "Webdf")); //malumotni ozgartrsh
// console.log(str.replace(/WEB/ig, "WEB")); //regex, ignor qiladi, shriftlar br xil bolmsa

// //////
// loop
// for (char of str) {
//   console.log(char);
// }


// methods

// str1.localeCompare() //taqqoslash
// console.log(str.length); // uzunligini
// console.log(str.toUpperCase()); // katta harfga
// console.log(`${str}`.toUpperCase());
// console.log(str.toLowerCase()); // kichik harfga
// console.log(str.indexOf('my')); // boshidan bosh.
// console.log(str.lastIndexOf("bb", 5)); // oxiridan bosh.
// console.log(str.includes("in")); // true false qaytaradi
// console.log(str.endsWith("in")); // true false qaytaradi
// console.log(str.padEnd(22, ".")); // oxiriga
// console.log(str.padStart(30, 1)); //boshiga qo'yadi
// console.log(str.slice(2, 5));//kesib olish. -
// console.log(str.substring(2, 0)); //we - not
// console.log(str.substr(2, 5)); // nechta kesib olish
// console.log(eval(`2+2`)); // calculation
// console.log(str.trim()); // boshi, oxiridan bosh joylani chqarb tashlaydi.
// console.log(str.trimStart()); boshidan
// console.log(str.trimEnd()); oxiridan
// console.log(str.split()); // array
// console.log(str.concat("grbj")); //malumot qoshadi
