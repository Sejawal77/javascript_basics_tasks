// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var first = prompt("enter first name");
// var last = prompt("enter your last name");

// var fullName = (`${first}  ${last}`);

// alert(fullName);



// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// var mobModel =prompt("tell the favourite mob model ");



// document.write(`my favourite mobile model is :${mobModel} <br>

// length of the model : ${mobModel.length}  `)


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// var word = prompt("write any word");

// var ind = prompt("tell one letter from word that wrote you ")

// var let = word.indexOf(ind);

// document.write(`string: ${word} <br> length of the ${ind} is ${let}`)



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.



// function replaceSubstring() {
//     var word = "Hyderabad";
//     document.write(`city name : ${word} <br>`)
//     var replacedWord = word.replace("Hyder", "Islam");
//     document.write("Replaced word:", replacedWord);
// }


// replaceSubstring();


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// Function to replace all occurrences of "and" with "&" in a string
// function replaceAndWithAmpersand(inputString) {
//     return inputString.replace(/and/g, "&");
//   }
  
  // Example string
//   var originalString = "Ali and Sami are best friends. They play cricket and football together";
  
  // Replace "and" with "&"
//   var modifiedString = replaceAndWithAmpersand(originalString);
  
  // Log the modified string to the console
//   document.write(modifiedString);
  


// 9.
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// let first = "472";

//  let second = Number(first)
// document.write(`value: ${first} <br> type: string <br> value : ${second} <br> type: number`)



// 10.
// Write a program that takes user input. Convert and
// show the input in capital letters.
// let userInput = prompt("put any words to convert upper case");

// document.write(`userInput: ${userInput} <br>`)


// let upperCase = userInput.toUpperCase()

// document.write(`uppercase : ${upperCase}`)

// 11.

// Write a program that takes user input. Convert and
// show the input in title case.


// function convertAndShowTitleCase() {
//     // Get the user input
//     let userInput = prompt("write the word to change to tilecase")

//     // Convert the input string to title case
//     var titleCaseString = toTitleCase(userInput);

//     // Log the result to the console
//     document.write("Title Case:", titleCaseString);
//   }

//   // Function to convert a string to title case
//   function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });

// }

// convertAndShowTitleCase()

// 12
// Write a program that converts the variable num to
// string.

// let num = 345.4;

// let covrt = num.toString().replace(".","");

// document.write(` Number :${num} <br>`);
// document.write(` String :${covrt} <br>`)


// 13