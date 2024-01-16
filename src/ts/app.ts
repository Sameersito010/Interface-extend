let cl=console.log;

// interface Iperson{
//     fname:string,
//     lname:string,
//     age:number,
//     email:string,
//     greet(phrase:string):void
// }

// let person:Iperson
// person={
//     fname:"Jhon",
//     lname:"Doe",
//     age:20,
//     email:"abc@gmail.com",
//     greet(phrase) {
        
//     },
// }

//=========================================================//

interface Iname{
    fname:string
}

interface Iperson extends Iname{
    age:number,
    greet(phrase:string):void
}


let person1:Iperson;

person1={   
fname:"Jhon",
age:20,
greet(phrase){
    cl(`${phrase} ${this.fname}`)
}
}



