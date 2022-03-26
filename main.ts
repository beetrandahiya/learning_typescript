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



