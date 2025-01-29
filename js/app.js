const number=0;
function isPrime (number) {
    if(number===2 || number===3 || number===5 || number===7 || number===11) {
        console.log("Number is Prime");
    }
    else if(number === 1 || !(number%2) || !(number%3) || !(number%5) || !(number%7) || !(number%11) || !(number%13)) {
        console.log("Number isn't Prime");
    }
    else {
        console.log("Number is Prime");
    }
}

isPrime(727);


// Time Format Task
const time=0;
function timeFormat (time) {
    let time_12_hour;
    if(time<0 || time>24) {
        console.log("The time range entered isn't correct.")
    }
    else if (time>12 && time<25) {
        time_12_hour= time%12;
        console.log("Time is", time_12_hour, "!")
    }
    else {
        console.log("Time Format is correct.")
    }
}
timeFormat(14);

// Whether or not a number is within a specified range.
const num=0, min=0, max=0;
function isWithin (num, min, max) {
    if(num>=min && num<=max) {
        console.log("Number is within sperified range.")
    }
    else {
        console.log("Number isn't within sperified range.")
    }
}
isWithin (17, 10, 15);


// BMI Function
const weight=0, height=0;
function BMI (weight, height) {

    const bmi= (weight/(height^2)).toFixed(2);
    console.log("Your BMI is:",bmi)

    if (bmi<18.5) {
        console.log("You are Underweight.")
    }
    else if (bmi>=18.5 && bmi<=25) {
        console.log("You are Normalweight.")
    }
    else if (bmi>25 && bmi<=30) {
        console.log("You are Overweight.")
    }
    else {
        console.log("You are Obesity.")
    }
}
BMI (70, 1.75)


// Leap Year
const year=0;
function isLeapYear (year) {
    if (year>=1244 && year<=1342) {
        if(year%33===1 || year%33===5 || year%33===9 || year%33===13 || year%33===17 || year%33===21 || year%33===26 || year%33===30) {
            console.log("Year is leap year.")
        }
        else {
            console.log("Year isn't leap year.")
        }
    }
    else if (year>=1343 && year<=1472) {
        if(year%33===1 || year%33===5 || year%33===9 || year%33===13 || year%33===17 || year%33===22 || year%33===26 || year%33===30) {
            console.log("Year is leap year.")
        }
        else {
            console.log("Year isn't leap year.")
        }
    }
}
isLeapYear(1251)


// findMinimum Function
const array=[];
function findMinimum (array) {
    let min=array[0];
    for(i=1; i<array.length; i++) {
        if(array[i]<min) {
            min= array[i];
        }
    }
    console.log("The smallest number in the array is:", min)
}
findMinimum([43,65,24,78,56,98])


// Reverse Function
const initial_string="";
function reverseFunction (initial_string) {
    let new_string="";
    for(i=initial_string.length-1; i>=0; i--) {
        new_string+= initial_string[i]
    }
    console.log("The reverse string is:", new_string)
}
reverseFunction("hello beautiful")


// Vowels Function
function vowelsFunction (input) {
    const input_string= input.toUpperCase();
    let isExist= false;
    for(i=0; i<input.length; i++){
        if(input_string[i]==="O" || input_string[i]==="A" || input_string[i]==="E" || input_string[i]==="I" || input_string[i]==="U") {
            isExist= true;
        }      
    }
    console.log(isExist)
}
vowelsFunction("hello")