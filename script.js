// Part B1: Variables & Data Types
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

// Part B2: Arrays & Objects
// Movies list
const movies = [
  "Inception",
  "Spirited Away",
  "The Matrix",
  "Interstellar",
  "Parasite",
];

const moviesList = document.getElementById("movie-list");
movies.forEach((movie) => {
  const li = document.createElement("li");
  li.textContent = movie;
  moviesList.appendChild(li);
});

// Student object
const student = {
  name: "Gustavo Iserte Bonfim",
  age: 30,
  skills: ["HTML", "CSS", "JavaScript"],
};

const studentDiv = document.getElementById("student-info");
studentDiv.innerHTML = `
  <p>Name: ${student.name}</p>
  <p>Age: ${student.age}</p>
  <p>Skills: ${student.skills.join(", ")}</p>
`;

// Part C1: Functions
function calculateSquare(num) {
  return num * num;
}

const squareResults = document.getElementById("square-results");
[2, 5, 10].forEach((num) => {
  const result = calculateSquare(num);
  console.log(`Square of ${num}:`, result);
  const p = document.createElement("p");
  p.textContent = `Square of ${num} is ${result}`;
  squareResults.appendChild(p);
});

// Part C2: Conditional Logic
const age = parseInt(prompt("Enter your age:"), 10);

if (age < 18) {
  alert("You are a minor");
} else if (age <= 60) {
  alert("You are an adult");
} else {
  alert("You are a senior citizen");
}

// Part C3: Loops
// For loop 1–10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// While loop sum 1–5
let sum = 0;
let counter = 1;
while (counter <= 5) {
  sum += counter;
  counter++;
}
const sumP = document.getElementById("sum-result");
sumP.textContent = `Sum of 1 to 5: ${sum}`;

// Part D1: Button & Events
document.getElementById("bg-btn").addEventListener("click", () => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});

// Part D2: Simple Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Clear old errors
  ["name", "email", "message"].forEach(
    (id) => (document.getElementById(`err-${id}`).textContent = "")
  );

  const nameVal = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const msgVal = document.getElementById("message").value.trim();

  if (!nameVal) {
    valid = false;
    document.getElementById("err-name").textContent = "Name is required";
  }
  if (!emailVal.includes("@")) {
    valid = false;
    document.getElementById("err-email").textContent = "Valid email required";
  }
  if (!msgVal) {
    valid = false;
    document.getElementById("err-message").textContent =
      "Message cannot be empty";
  }

  if (valid) {
    document.getElementById("success-msg").textContent =
      "Form submitted successfully!";
    form.reset();
  }
});

// Feature Polish: JS Animation
const headerTitle = document.getElementById("title");
headerTitle.style.opacity = 0;

let op = 0;
const fadeIn = setInterval(() => {
  if (op >= 1) clearInterval(fadeIn);
  headerTitle.style.opacity = op;
  op += 0.02;
}, 30);
