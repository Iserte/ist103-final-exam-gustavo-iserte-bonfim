let userName = "Gustavo";
const year = 2025;
var isStudent = true;
let emptyValue = null;
let noValue;

console.log("Name:", userName);
console.log("Year:", year);
console.log("Is student:", isStudent);
console.log("Empty value:", emptyValue);
console.log("No value:", noValue);

const movies = [
  "Inception",
  "Spirited Away",
  "The Matrix",
  "Interstellar",
  "Parasite",
];
const moviesList = document.createElement("ul");
movies.forEach((movie) => {
  const li = document.createElement("li");
  li.textContent = movie;
  moviesList.appendChild(li);
});
document.body.appendChild(moviesList);
