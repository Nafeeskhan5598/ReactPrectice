import React from "react";

function Hello(){
let curDate = new Date(2020, 5, 5, 16);  
curDate = curDate.getHours();
let greeting = ' ';
const cssStyle = {};

if(curDate >= 1 && curDate > 11){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
}else if(curDate >= 12 && curDate > 20){
    greeting = 'Good Afternoon';
    cssStyle.color = 'red';

}else{
    greeting = 'Good Noght';
    cssStyle.color = 'black'
}


    return(
        <>
<h1>Hello sir, <spam style = {cssStyle}>{greeting} </spam>  </h1>
        </>
    )
}   
export default Hello;