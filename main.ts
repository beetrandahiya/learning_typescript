console.log('Hello World');


//making printinfo function with setting the parameter types

function printinfo (name:string,age:number,designation:string):object{

    return {
        name:name,
        age:age,
        designation:designation
    }
    
}

console.log(printinfo('sachin',24,'developer'));


//we can also make custom types
// lets make an info data type

type info = {
    name:string,
    age:number,
    designation:string
}

//now we can use this info type

// Example : make a list of employees and add info of new employees to the list

let employees: info[] ;
employees = [];
function add_employee(info:info):object{
    employees.push(info);
    return {
        name:info.name,
        age:info.age,
        designation:info.designation
    }
}

add_employee({name:'sachin',age:24,designation:'developer'});




