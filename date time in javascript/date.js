// 1 .
// Write a program that displays current date and time in
// your browser.

// let currentDate = new Date();

// document.write(currentDate);



// 2. 

// Write a program that alerts the current month in words.
// For example December.

// let currentMonth = new Date().getMonth();


// let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// alert(months[currentMonth]);



// 3.

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let currentDay = new Date().getDay();

// let days = ["sun","mon","tues","wed","thu","fri","sat"]

// alert(`Today is ${days[currentDay]}`);

// 4.

// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// let day = new Date().getDay();

// let week = ["sun","mon","tues","wed","thu","fri","sat"];


// let isfun = week[day];

// if(isfun =='sun' || isfun =='sat'){
//     alert(`It's fun day ${isfun}`)
// }


// 5.
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let month = new Date().getDate();

// if(month < 16){
//     alert ('First fifteen days of the month')
// }
// else{
//     alert("last days of the month")
// }


// 7.

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


// let currentTime = new Date().getHours();

// if(currentTime < 12){
//     alert('its AM')
// }else{
//     alert('its PM')
// }




// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// // Get the current date and time
// const currentDate = new Date();

// // Calculate the number of milliseconds since midnight, Jan. 1, 1970
// const millisecondsSince1970 = currentDate.getTime();

// // Convert milliseconds to minutes
// const minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// // Print the result
// console.log(`Minutes since midnight, Jan. 1, 1970: ${minutesSince1970}`);

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.






// // Create a Date object for December 31, 2020
// const lastDayOf2020 = new Date(2020, 11, 31);

// // Assign it to a variable named laterDate
// const laterDate = lastDayOf2020;

// // Print the laterDate
// console.log(laterDate);




// // 9.
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// // Create a Date object for the starting date of Ramadan (June 18, 2015)
// const startingDateOfRamadan = new Date(2015, 5, 18); // Note: Months are zero-based, so 5 represents June

// // Get the current date
// const currentDate = new Date();

// // Calculate the difference in milliseconds between the two dates
// const differenceInMilliseconds = currentDate - startingDateOfRamadan;

// // Convert milliseconds to days
// const daysPassedSinceRamadanStart = differenceInMilliseconds / (1000 * 60 * 60 * 24);

// // Alert the number of days passed since 1st Ramadan
// alert(`Number of days passed since 1st Ramadan: ${Math.floor(daysPassedSinceRamadanStart)}`);



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// // Create a Date object for the current date and time
// const currentDate = new Date();

// // Extract the current hours
// const currentHours = currentDate.getHours();

// // Reset the date object one hour ahead
// currentDate.setHours(currentHours + 1);

// // Display the updated date object
// document.write(currentDate);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// // Create a Date object for the current date
// const currentDate = new Date();

// // Subtract 100 years from the current date
// const date100YearsBack = new Date(currentDate);
// date100YearsBack.setFullYear(currentDate.getFullYear() - 100);

// // Show the date 100 years back in an alert box
// alert(`Date 100 years back: ${date100YearsBack}`);
