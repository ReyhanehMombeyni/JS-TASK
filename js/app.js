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

