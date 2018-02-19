// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

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