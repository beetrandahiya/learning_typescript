console.log('Hello World');
//making printinfo function with setting the parameter types
function printinfo(name, age, designation) {
    return {
        name: name,
        age: age,
        designation: designation
    };
}
console.log(printinfo('sachin', 24, 'developer'));
//now we can use this info type
// Example : make a list of employees and add info of new employees to the list
let employees = [];
function add_employee(info) {
    return {
        name: info.name,
        age: info.age,
        designation: info.designation
    };
}
