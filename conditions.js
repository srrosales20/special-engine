console.log("Hello World");

let randomNumber = Math.random(); //0.0-1
//if condition w random number
if (randomNumber < 0.50) {
    console.log("Condition was met");
    console.log(randomNumber);
}
///if condition was met run random number & 'condition was met'
if (randomNumber >= 0.5) {
    console.log('Condition was Met');
    console.log(randonNumber);
    
}
///else if condition. string varibale is saturday so console.log returns Saturday
const dayOfWeek = 'Saturday';
if (dayOfWeek === 'Monday') {
    console.log("Yay its Monday!");

} else if (dayOfWeek === 'Friday'){

    console.log("Yay Its Friday");

} else if (dayOfWeek === 'Saturday') {

    console.log("You have the correct Day from the variable"); 
}


//else if conditon. Prompts "enter an age" 
//and returns correct else if statement based on what you entered. 
const age = prompt("Enter An Age");

if (age < 5) {
    console.log("Hey, you're just a baby!"); 

} else if (age <10 ) {
    console.log("Hey, youre just a kid!");

} else if (age <35) {
    console.log("You're getting older.");
}
// IF ALL OTHER CONDITIONS FAIL - ELSE.

else {
    console.log("You are over the age of 35.");
}

const fruit = 'Papayas';
//Switch case statements is a "cleaner" way to write if & else if stat.
//want to put a break stat. in between case stat. to break out of a switch/loop
//add default in case all other cases fail

switch (fruit) {

    case 'Orange':
        console.log("Oranges are $0.50 a pound");
        break;
    case 'Bananas':
        console.log("Bananas are $0.60 a pound");
        break;
    case 'Avocado':
        console.log("Avocados are $5.00 a pound");
        break;
    case 'Papaya':
        console.log("Papaya are $0.80 a pound");
        break;
    default:
        console.log("Last Resort If All Conditions Fail");
}
///if condition w nested if condition
//prompt of "enter pswd". first if stat checks for pswd length.
//if met moves on to check for spaces if yes spaces will run
// "pswd cant have spces" if no space will be vaild
//if first condition is not met will run else "pswd is too short"
const password = prompt("Enter in a new password");
if (password.length >= 6) {
    if (password.indexOf('') ===-1) {
        console.log("Valid Password");
    } else {
        console.log("Password Cant Have Spaces");
    }
} else {
    console.log("Password is too short");
}
//declarations

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
//Called singsong three times(Do,Re,Mi,Do,Re,Mi,Do,Re,Mi)
singSong()
singSong()
singSong()

//Template literals are enclosed by backticks ``

function greet(firstName) {
    console.log(`Hey There, ${firstName}`)
}
greet('Boomer');

function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName}`)
}
greet1('Boomer','Sooner');