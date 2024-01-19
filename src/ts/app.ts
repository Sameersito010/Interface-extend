let cl=console.log;

function logMsg(nameofClass:string){
    return function (target:Function){
        cl(`Instance of class ${nameofClass} is created!!!`)
    }
}

@logMsg("Department") class Department{
    constructor(){

    }
}
let d1=new Department()

@logMsg("Person") class Person{
    constructor(){

    }
}
let p1=new Department()
