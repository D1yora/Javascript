// obj 2

// let obj = {
//   name: "webbrain",
//   age: 23,
//   child: {
//     name: "eshmat",
//     age: 33,
//     child: {
//       name: "gishmat",
//       age: 21,
//     },
//   },
// };

// let sum = 0;
// while (obj) {
//   sum += obj.age

//   obj = obj.child
// }

// console.log(sum);
// let title = "name"
// let obj = {title: "nam", nam: "age"}
// // console.log(obj[title]);
// console.log("title" in obj);

let obj1 = {
  name: "webbrain",
  title: "it center",
  // getData: function() {
  //   return obj.name + this.title;
  // },
};
let obj2 = {
  age: 3,
}

// let usr = obj;
// obj = null
// console.log(usr.getData());
let obj3 = {...obj1, ...obj2}
console.log(obj3);
// console.log(Object.assign(obj1, obj2));
console.log(obj1);
