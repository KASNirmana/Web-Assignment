 // Get the number from the user through a prompt box
 const dayNumber = parseInt(prompt("Enter a number from 1 to 7:"));

 // Define an array of days of the week
 const daysOfWeek = [
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
     "Sunday"
 ];

 // Check if the input is valid (between 1 and 7)
 if (dayNumber >= 1 && dayNumber <= 7) {
     // Get the corresponding day from the array
     const dayOfWeek = daysOfWeek[dayNumber - 1];

     // Display the result in an alert
     alert(`The day is: ${dayOfWeek}`);
 } else {
     // Display an error message for invalid input
     alert("Invalid input! Please enter a number from 1 to 7.");
 }