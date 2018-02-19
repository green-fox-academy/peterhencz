'use strict'

// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)



function printer(anything: any[]): string {
    return anything.join(' x ');
}

console.log(printer(['szia' , 'jo reggelt', 263678534798542, 'mittudomen']));
