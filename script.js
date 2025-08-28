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

// Movies list
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

// Student object
const student = {
  name: "Gustavo",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"],
};

const studentDiv = document.createElement("div");
studentDiv.innerHTML = `
  <h2>Student Details</h2>
  <p>Name: ${student.name}</p>
  <p>Age: ${student.age}</p>
  <p>Skills: ${student.skills.join(", ")}</p>
`;
document.body.appendChild(studentDiv);

function calculateSquare(num) {
  return num * num;
}

// Display results
[2, 5, 10].forEach((val) => {
  console.log(`Square of ${val}:`, calculateSquare(val));
  const p = document.createElement("p");
  p.textContent = `Square of ${val} is ${calculateSquare(val)}`;
  document.body.appendChild(p);
});

// Conditional Logic
const age = parseInt(prompt("Enter your age:"), 10);

if (age < 18) {
  alert("You are a minor");
} else if (age <= 60) {
  alert("You are an adult");
} else {
  alert("You are a senior citizen");
}

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
const sumP = document.createElement("p");
sumP.textContent = `Sum of 1 to 5: ${sum}`;
document.body.appendChild(sumP);

// Change background button
document.getElementById("bg-btn").addEventListener("click", () => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});

// Form validation
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
