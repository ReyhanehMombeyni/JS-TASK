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