let students = [
  {id: 1, year: 1999, name: "ii"},
  {id: 2, year: 2001, name: "mm"},
  {id: 3, year: 2002, name: "dd"},
  {id: 4, year: 2003, name: "ff"},
  {id: 5, year: 2005, name: "gg"},
  {id: 6, year: 1998, name: "gg"},
  {id: 7, year: 2000, name: "hh"},
  {id: 8, year: 2002, name: "jj"},
]

//  read

// const sortByYear = () => {
//   let res = students.sort((a, b) => a.year - b.year)
//   students = res;
// };

// const sortByAlphabet = () => {
//   let res = students.sort((a, b) => a.name.localeCompare(b.name));
//   students = res;
// };

// sortByYear()
// console.log(students);


// delete - filter

// const delteByUser = (id) => {
//   let res = students.filter((v) => v.id !== id);
//   students = res;
// }
// delteByUser(4);
// console.log(students);

// create - spread operator

// const addUser = (user) => {
//   students = [...students, {id: students.length +1, ...user}]
// };

// addUser({ name: "web", year: 2010});
// console.log(students);

// update

const updateUser = (data) => {
  let res = students.map((value) => value.id === data.id ? {...value, [data.type]: data.value} : value);
  students = res;
}
updateUser({id: 2, type: "name", value: "gul"})
updateUser({id: 2, type: "year", value: 2003})
console.log(students);
