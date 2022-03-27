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





/*Trying to write least HTML and even write the page content in TS*/

var body_content=document.createElement('div');
body_content.innerHTML='';


body_content.innerHTML+='<div class="what"><h1>But, What is TypeScript?</h1><h3>TypeScript is just Javascript more like Java.</h3><p>TypeScript is a superset of Javascript. In simpler words, it is Javascript with some extra features.</p></div>';
body_content.innerHTML+='<div class="concerns"><h1>While Learning a Language, our first concern is:</h1><h2>What is the purpose of the language?</h2><h2>What are the pros and cons of the Language?</h2>';

document.body.appendChild(body_content);
