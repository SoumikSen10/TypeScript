"use strict";
// Modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
// Exporting and importing modules in Typescript
// Default exports
function addPayment(val) {
    console.log(val);
}
class Payment {
    constructor(price) {
        this.price = price;
    }
}
exports.default = Payment;
