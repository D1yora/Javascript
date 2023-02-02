// homework

// 1-task

// let browser = 'Operaaa';

// switch (browser) {
//   case 'Edge' :
//     alert('You have got the edge!');
//     break;
//   case 'Chrome' :
//     alert('You have got the Chrome!');
//     break;
//   case 'Firefox' :
//     alert('You have got the Friefox!');
//     break;
//   case 'Safari' :
//     alert('You have got the Friefox!');
//     break;
//   case 'Opera' :
//     alert('Okay, we support this browsers too!');
//     break;
//   default:
//     alert('We hope this page looks ok!')
// }

// 2-task

// let a = +prompt('Raqamni kiriting', 'write smth in here')

// if (a == 5) {
//   console.log(5);
// }
// if (a == 10) {
//   console.log(10);
// }
// if (a == 20 || a == 30) {
//   console.log(20,30);
// }

// 3-task

// let i = 3;

// while (i) {
//   console.log(i--);
// }

// bu yerda while loop ishlatilib, i-- bolgani uchun teskari 3 2 1ga sanadi.

// 4-task

// let i = 0;
// while (i++ < 5) console.log(i);

// 5gacha sanab consoleda chiqar deb buyruq berdik va u bizga 0dan 5gach chqarb berdi.

let i = 0;
while (++i < 5) console.log( i );

// bu yerda consoleda brdan 4gacha chiqdi, lekin why?*  !!!

// for(let i = 0; i <= 3; i++) {
//   // console.log(`number ${1}!`);
//   console.log(i);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${1}!`);
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++
// }

// *********************************
// 4-task
// *********************************

let a = 10;
c = 0;
for (let b = 2; b <= a; b++) {
      for (let i = 1; i <= b; i++) {
          if (b % i === 0) {
              c++;
          }
      }
      if (c == 2) {
          console.log(`tub son ${b}`);
      }
      c = 0;
  }
