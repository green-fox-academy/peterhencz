// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

function getAverage(num1, num2, num3) {
    return ((num1 + num2 + num3) / 3);
}


let nameOut: string = ('Greenfox');

function greet(greatings?: string) {
    if (greatings != undefined) { 
    console.log('Greetings, dear ' + greatings);  
}
else {
        console.log('Please fill name');
    }
}
greet(nameOut);
console.log(getAverage(12, 43, 876));



