const pi = 22 / 7;

// Get radius from the user through a prompt box
const radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculate the area
const area = pi * radius * radius;

// Display the result in an alert
alert(`The area of the circle with radius ${radius} is: ${area}`);