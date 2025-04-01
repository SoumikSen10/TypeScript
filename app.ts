/* var a = 12;
var b = 13;

function abcd(){
    let x = 12;
    let y = 22;
} */

// primitive types and reference types

// whenever using these --> [], {}, () means it is reference type

// whenever using these --> string, number, boolean means it is primitive type

// we can directly copy primitive types but not reference types

/* var a = 12; // number
var b = a;
console.log(b);

var c = [1,34,23,45,56];
var d = c; // reference type

console.log(d); */

//let arr1 = [1,2,3,4,5,{name:"harsh"},{name:12}];//wrong

//explicitly specify
/* let nums : number[] = [1,2,3,4]; */

//Tuples
/* let arr: [string,number] = ["harsh",22];

//Enums
enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    "SUPER_ADMIN" = "super_admin"
}

enum StatusCodes{
    ABANDONED = "abanodoned status code 500",
    NOTFOUND = "not found status code 404",
}

console.log(StatusCodes.NOTFOUND); */

/* let a : number;
a=12;

function test():never{
    while(true){}
}

test(); */
// never means it will never return anything

/* let b: number | boolean | string;
b=12;
b=true;
b="harsh"; */

/* function test(a:number, b:string):void{
    console.log(a+b);
    return; // void means it will not return anything
}

test(12,"harsh"); */

// Interfaces
// interface is used to define the structure of an object

/* interface User{
    name:string,
    email:string,
    password:string,
    gender?:string, // ? means optional
}

function getDataOfUser(obj : User)
{
   console.log(obj.name+" "+obj.email+" "+obj.password+" "+obj.gender);
}

getDataOfUser({name:"harsh",email:"harsh2025@gmail.com",password:"pass123",gender:"male"});


//Extending interfaces

interface Admin extends User{
    admin:boolean,
}

function getDataOfAdmin(obj : Admin)
{
    console.log(obj.name+" "+obj.email+" "+obj.password+" "+obj.gender+" "+obj.admin);
}

getDataOfAdmin({name:"harsh",email:"harsh2025@gmail.com",password:"pass123",gender:"male",admin:true}); */

/* type arg = string | null;

function abcd(obj : arg)
{
  console.log(obj)
}

abcd("harsh"); */

// Intersection types

/* type User = {
  name: string;
  email: string;
};

type Admin = User & {
  getDetails(user: User): void;
};

const admin: Admin = {
  name: "Harsh",
  email: "harsh2025@gmail.com",
  getDetails(user: User) {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  },
};

admin.getDetails({ name: "harsh", email: "harsh2025@gmail.com" }); */

// Classes

/* class Device {
  name = "lg";
  price = 12000;
  category = "digital";
}

let d1 = new Device();
let d2 = new Device(); */

/* class Bottle
{
    radius = 120;
    price = 100;
    color = "white";
}

let b1 = new Bottle(); */

/* class BottleMaker
{
    constructor(public name:string, public price:number){}
}

let b1 = new BottleMaker("Milton",1200); */

/* class HumanMaker
{
    constructor(public name:string,public isHandsome:boolean,public age:number=0){} //setting default value to age
} 

new HumanMaker("Harsh",true); */


/* class Music
{
    constructor(public name:string,public artist:string,public thumbnail:string="somethumbnail.jpg",public length:number, public free:boolean)
    {
        if(!thumbnail)
        {
            this.thumbnail = "somethumbnail.jpg"; // setting default value to thumbnail
        }
    }
}

let m1 = new Music("Chal Chaiyya Chaiyya","Harsh Sharma","",1200,false); // setting default value to thumbnail

let m2 = new Music("Timeless","Starboy","poster.png",2000,true); */


// this keyword

/* class abcd
{
    name = "harsh";
    changeSomeStuff()
    {
        this.name = "";
    }

    changeSomeMoreStuff()
    {
        console.log("Hey")
    }
} */


/* class BottleMaker
{
   constructor(public name:String)
   {
     this.name = name;
   }
}

let  b1 = new BottleMaker("milton"); */



//Access Modifiers
// public, private, protected


//public
/* class BottleMaker
{
    constructor(public name:string){}

}

let b1 = new BottleMaker("Milton");
b1.name = "Tupperware"; // public can be accessed outside the class 

class MetalBottleMaker extends BottleMaker
{
   constructor(name:string){
    super(name); // calling parent constructor
   }

   getValue(){console.log(this.name);}
}

let b2 = new MetalBottleMaker("Milton");
b2.getValue();  */


//private 

/* class BottleMaker
{
    constructor(private name:string){}

}

let b1 = new BottleMaker("Milton");
b1.name = "Tupperware"; // private cannot be accessed outside the class hence error

class MetalBottleMaker extends BottleMaker
{
   constructor(name:string){
    super(name); // calling parent constructor
   }

   getValue(){console.log(this.name);} //gives error
}

let b2 = new MetalBottleMaker("Milton");
b2.getValue(); 
 */


// protected
/* class BottleMaker
{
    protected name = "Harsh";
}

class MetalBottleMaker extends BottleMaker
{
    public material = "metal";

    changeName()
    {
        this.name = "some other name"; // protected can be accessed in child class but not outside the class
    }
}

let b1 = new MetalBottleMaker();
b1.changeName(); */


// Getters and Setters

/* class User
{
    constructor(public name:string,public age:number){}

    getName() //getter
    {
        return this.name;
    }

    setName(value:string) //setter
    {
        this.name = value;
    }
}

let u1 = new User("Harsh",22);
console.log(u1.getName()); //Harsh
u1.setName("Shanu");
console.log(u1.getName()); //Shanu */


// Static Properties and Methods

/* class Hero
{
    static version = 1.0;

    static getRandomNumber()
    {
        return Math.random();
    }
}

console.log(Hero.version);
console.log(Hero.getRandomNumber()); // static properties and methods can be accessed without creating an instance of the class */

// Abstract Classes and Methods

// Abstract Classes and Methods

/* abstract class CookingEssentials {
    constructor(protected gas: number, public gasName: string) {}

    // Abstract method that must be implemented by subclasses
    abstract cook(): void;

    // Common method accessible to all subclasses
    checkGasLevel(): string {
        return `Gas level: ${this.gas}L in ${this.gasName}`;
    }
}

// Child class for cooking Chicken Curry
class ChickenCurry extends CookingEssentials {
    cook(): void {
        console.log("Cooking Chicken Curry using spices, onions, and tomatoes.");
    }
}

// Child class for baking a Cake
class Cake extends CookingEssentials {
    cook(): void {
        console.log("Baking a Cake with flour, eggs, and sugar.");
    }
}

// Usage
const chicken = new ChickenCurry(5, "LPG");
chicken.cook();
console.log(chicken.checkGasLevel());

const cake = new Cake(3, "CNG");
cake.cook();
console.log(cake.checkGasLevel()); */


//Functions 

/* function login() : string
{
   return "Heyy";
} */

/* function abcd(name: string, callback: (value: string) => void): void 
{
    console.log(name);  // Log the name first --> Harsh
    callback(`Hello, ${name}!`);  // Call the callback with a meaningful message
}

abcd("Harsh", (value: string) => {
    console.log(value); // Will print: "Hello, Harsh!"
}); */


//Optional Parameters

/* function abcdef(name:string,age:number,gender?:string){

}

abcdef("Harsh",22,"male"); // all parameters can be given
abcdef("Harsh",22); // not all parameters are required
// Optional parameters should be at the end of the function signature
// Optional parameters can be undefined or not passed at all */


// Default Parameters
/* function abcdef(name:string,age:number,gender:string="not to be disclosed"){
    console.log(name+" "+age+" "+gender)
}

abcdef("Harsh",22);
abcdef("Harsh",22,"male"); // default parameters can be overridden */


//Rest Parameters

/* function abcd(...arr : number[]) // rest operator can be used to pass any number of arguments
{
    console.log(arr); 
}

abcd(1,2,3,4,5,6,7,8); */

/* let arr2: string[] = []; // ✅ Initialized to an empty array

function getTogether(...friends: string[]) {
    console.log(friends);  // Logs the array of friends

    // Spread operator is used to copy elements from `friends` into `arr2`
    arr2 = [...friends]; 
}

getTogether("Aman", "Suman", "Abhay");
console.log(arr2); // Output: ["Aman", "Suman", "Abhay"]
 */


// Function Overloading

/* function abcd(a : string) : void; // Typescript function signature
function abcd(a : string, b : number) : number;

function abcd(a : any, b? : any)
{
   if(typeof a === "string" && b === undefined)
   {
      console.log("Heyy")
   }
   
   if(typeof a === "string" && typeof b === "number")
   {
      return 123;
   }

   else 
     throw new Error("Something is wrong");
}

abcd("Hey");
abcd("hey",12); // returns 123
//abcd(12); // gives error because it is not defined in the function signature */


// Generics
// deciding while using a function that in what way it should treat the arguments
/* function logger <T> (a : T) //T for template class although you can use anything in place of T
{
   console.log(a);
}

logger("heyy");
logger(12);
logger(true);
logger(undefined);
logger(null); */


/* function abcd<H>(a : H, b : string, c : number)
{
   console.log(a +" "+b+" "+c);
}

abcd<String>("Halua","Puri",4); */


// Generic Interfaces

/* interface Halua<T> // generic interface
{
    name : string,
    age : number,
    key : T,
}

function abcd(obj : Halua<String>) // generic function
{
   console.log(obj.name+" "+obj.age+" "+obj.key);
}

abcd({name:"food",age:25,key:"abcdefghij"}); */


// Generic Classes

/* class BottleMaker<T>
{
    constructor(public key : T)
    {

    }
}

let b1 = new BottleMaker<String>("Hello");
console.log(b1);
let b2 = new BottleMaker<number>(12);
console.log(b2); 
// generic classes can be used to create objects of different types */


// Special case of generics
/* function abcd<T>(a:T,b:T): T // here T is used as a type for both a and b but return type cannot be set as T hence giving error while returning string 
{
   //return "hey"; // error because here it is a string literal and T can be of any type
    
}*/

//correct format
/* function abcd<T>(a:T,b:T):T
{
  // return "hey" as T; // type assertion is used to tell typescript that this is of type T

  // or another way is 
  return <T>"hey"; // type assertion is used to tell typescript that this is of type T
}

abcd<string>("hey","hello"); */



// Modules 

// importing modules from other files in Typescript

/* import { addPayment } from "./moduleTest";

addPayment(1234);

import Payment from "./moduleTest";

let p1 = new Payment(12);
let p2 = new Payment(1234);
console.log(p1,p2);  */


// Type assertion
// We can use type assertion to tell typescript that this is of this type

/* let a : any = 12;

(a as number).valueOf(); // type assertion is used to tell typescript that this is of type number

// or in another way

(<number>a).valueOf(); // type assertion is used to tell typescript that this is of type number


// Type casting

let n = Number("12");
console.log(n); //12 */



// Type Guards
// Type guards are used to check the type of a variable at runtime

/* function abcd(arg : string | number)
{
   if(typeof arg === "number")
   {
      arg.valueOf(); // get access to all number methods
   }
   else if(typeof arg === "string"){
    arg.toUpperCase(); // get access to all string methods
   }
   else {
    throw new Error("Invalid argument"); // if it is not string or number then throw error
   }
}

console.log(abcd(12));
console.log(abcd("hello"));
//abcd(true); // gives error because it is not string or number */


// Another way of type guards is using instanceof operator

/* class TvRemote{
    switchTvOff(){
        console.log("Switching off TV");

    }
}

class CarRemote{
    switchCarOff(){
        console.log("Switching off Car");
    }
}

const tv = new TvRemote();
const car = new CarRemote();

function SwitchOffFinal(device : TvRemote | CarRemote){
    if(device instanceof TvRemote){
        device.switchTvOff(); // get access to all methods of TvRemote class
    }
    else if(device instanceof CarRemote){
        device.switchCarOff(); // get access to all methods of CarRemote class
    }
}

SwitchOffFinal(tv); // Switching off TV
SwitchOffFinal(car); // Switching off Car */


