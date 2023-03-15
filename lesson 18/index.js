// // ddos attack


// var getData = (id) => {
//   // console.log("get data");
//   return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json())
// }

// // count = 1;
// // setInterval(() => {
// //   console.log();
// // }, 1000);

// const getCache = (func) => {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//     } else {
//       let res = func(x);
//       console.log(res);
//       cache.set(x, res);
//     };
//   };
// };

// getData = getCache(getData);


//  let obj = {
//   id: 1,
//   getData() {
//     console.log(this.id);
//   },
// };

// const getCache = (func) => {
//   return function() {
//     func.call(this);
//   };
// };

// obj.getData = getCache(obj.getData);

// obj.getData();

var ar = [123, 3, 1, 4, 45, 56, 322];

Array.prototype.del = function (arg) {
  console.log(this, arg);
}

ar.del(4);
// const del = (el) => {
//   ar.splice(ar.indexOf(el), 1);
//   console.log(ar);
// };

// del(4);
// del(322)
