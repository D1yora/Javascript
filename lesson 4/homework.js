// Homework lesson -4
// if, if else, nullish.


// 1-task
// if("0") {
//   alert('Hello');
// }

// output : Hello alert

// 2-task
// 1-variant:

// let jsName = "ECMAScript"

// if(true) {
//   alert("Right!");
// } else {
//   alert("You don't know? ECMAScript!")
// }

// 2-variant:

// let jsName = prompt(`What's the official name of "Javacript"?`);

// if (jsName == 'ECMASccript') {
//   alert("Right!")
// } else {
//   alert("You don't know? ECMAScript!")
// }

// 3-task
// let value = -5;

// if (value > 0) {
//   console.log(1);
// } else if (value < 0) {
//   console.log(-1);
// } else {
//   console.log( 0 );
// }

// 4-task
// let result;

// if(a + b < 4) {
//   result = 'Below'
// } else {
//   result = 'Over'
// }
// let result = (a + b < 4) ? 'Below' : 'Over';


// 5-task

// let login = 'Employee'
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// console.log(message);

// *************

// let login = 'Employee';

// let message = (login == 'Employee') ? 'Hello' :
//    (login == 'Director') ? 'Greetings' :
//    (login == '') ? 'No login' :
//    '';

// *************
// let login = 'Employee';
// let message;

// login == 'Employee' ? 'Hello' :
//   login == 'Director' ? 'Greetings' :
//   login == '' ? 'No login' :
//   '';

// console.log(message);

// **************************

let login = 'Employee';
let message = (login == 'Employee') ? 'Hello' :
   (login == 'Director') ?  'Greetings' :
   (login == '') ? 'Director' :
   'j';

console.log(message);
