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
let employees;
employees = [];
function add_employee(info) {
    employees.push(info);
    return {
        name: info.name,
        age: info.age,
        designation: info.designation
    };
}
add_employee({ name: 'sachin', age: 24, designation: 'developer' });
/*Trying to write least HTML and even write the page content in TS*/
var body_content = document.createElement('div');
body_content.innerHTML = '';
body_content.innerHTML += '<div class="what"><h1>But, What is TypeScript?</h1><h3>TypeScript is just Javascript more like Java.</h3><p>TypeScript is a superset of Javascript. In simpler words, it is Javascript with some extra features.</p></div>';
body_content.innerHTML += '<div class="concerns"><h1>While Learning a Language, our first concern is:</h1><h2>What is the purpose of the language?</h2><h2>What are the pros and cons of the Language?</h2>';
body_content.innerHTML += '<div class="concerns1"><p>The goal of TypeScript is to help catch mistakes early through a <span class="importantblue">type system</span> and to make JavaScript development more efficient.</p></div>';
body_content.innerHTML += '<div class="concerns2"><div class="pros"><h1>Pros</h1> <ul><li>Optional <span class="importantwhite">Static</span> Typing</li><li>Readability</li><li>Early bug spotting</li><li>World\'s second most loved language </li></ul></div><div class="cons"><h1>Cons</h1> <ul> <li>Clumsy Programming Style</li><li>Browsers can\'t directly run it, needs to be <span class="importantblue">transpiled</span></li><li>Bloated Code</li><li>Unnecessary in many cases</li></ul></div> </div>';
document.body.appendChild(body_content);
