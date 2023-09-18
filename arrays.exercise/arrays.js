// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.

const names = ["David", "Ann", "Leia", "Mathew", "Mark"];
console.log(names);

// Task 2
// Print the second item of the array from the task 1.
console.log(names[1]);

// Task 3
// Print the length of the array.

console.log(names.lenght);

// Task 4
// Print the last item of the array

console.log(names[4]);

// Task 5
// Add Peter as the last item to the array and print the whole array
names.push("Peter");
console.log(names);

// Task 6
// Print the array with spaces, not commas
document.getElementById("task6").textContent = names.join(" ");

// Task 7
// Replace Mathew in the array with Lisa and Abraham
names.splice(3, 1, "Lisa", "Abraham");
console.log(names);

// Task 8
// Sort the array in the alphabetical order and print it
console.log(names.sort());

// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
const numbers = [1, 7, 45, 32, 27, 86];
numbers.sort((a, b) => b - a);

// Task 10
// Randomize the numbers array.

numbers.sort((a, b) => 0.5 - Math.random());

// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.

function maxArray(arr) {
  return Math.max.apply(null, arr);
}

document.querySelector("#task11").textContent = maxArray(numbers);

function minArray(min) {
  return Math.min.apply(null, min);
}

document.querySelector("#task11").textContent = minArray(numbers);
