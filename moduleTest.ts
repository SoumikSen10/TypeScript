// Modules

// Exporting and importing modules in Typescript
// Default exports

export function addPayment(val : number)
{
    console.log(val);
}

export default class Payment
{
    constructor(public price : number){}
}