var age = prompt("Please enter your age:");
if ((age) || age >= 18) {
  console.log("You are not an adult.");
} else {
  console.log("You are an adult.");
}

// Prompt user for first and last names
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");

// Concatenate names with a space in between
var fullName = firstName + " " + lastName;

// Display the result
console.log("Your full name is: " + fullName);

// Prompt user for height and weight
var height = prompt("Please enter your height (in meters):");
var weight = prompt("Please enter your weight (in kilograms):");

// Calculate BMI
var bmi = weight / (height * height);

// Check if BMI is greater than 25
if (bmi > 25) {
  console.log("You are overweight.");
} else {
  console.log("You are not overweight.");
}

// Prompt user for scores in three subjects
var html_score = parseInt (prompt("Please enter HTML score:"));
var css_score = prompt("Please enter CSS score:");
var javascript_score = prompt("Please enter Javascript:");

// Calculate average score
var averageScore = (Number(html_score) + Number(css_score) + Number(javascript_score)) / 3;

// Determine grade based on average score
var grade;
if (averageScore >= 90) {
  grade = "A";
} else if (averageScore >= 80) {
  grade = "B";
} else if (averageScore >= 70) {
  grade = "C";
} else if (averageScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// Display result
console.log(`Your average score is: ${averageScore.toFixed(2)}`);
console.log(`Your grade is: ${grade}`);


// Prompt user for original price and discount percentage
let originalPrice = prompt("Please enter the original price:");
let discountPercentage = prompt("Please enter the discount percentage (e.g., 10 for 10%):");

// Calculate discount amount
let discountAmount = (originalPrice / 100) * discountPercentage;

// Calculate discounted price
let discountedPrice = originalPrice - discountAmount;

// Display result
console.log(`Original Price: ${originalPrice}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: ${discountAmount.toFixed(2)}`);
console.log(`Discounted Price: ${discountedPrice.toFixed(2)}`);