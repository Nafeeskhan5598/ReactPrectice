// import React from "react";

// function Head(){
// return(
//     <>
// <h1>welcome to my web page.</h1>

//     </>
// )
// }
// export default Head;
const youtuber = "nafees khan"
const teacher = "zuned"
const doctor = "sohel"

function myName(){
  let name = "haneef"
  return  name;
}

function nkName(){
    let name = "anees"
    return name;
}
function salary(){
    let salary = 26000
    return salary;
}

function add(a,b){
    let sum = a + b
    return sum;
}
function sub(a,b){
    let sub = a - b
    return sub;
}
function mult(a,b){
    let mult = a * b
    return mult;
}
function div(a,b){
    let div = a / b
    div = div.toFixed(2);
    return div;
}



export default youtuber;
export {teacher, doctor, myName, nkName,salary, add,sub,mult,div};
