import React from "react";

function Per(){

    let curDate = newDate()
    curDate = curDate.getHours()

    let greeting = " "
    const cssStyle = {};

     if(curDate > 1 && curDate < 12){
        greeting = "good morning"
        cssStyle.color.red;
     } else if(curDate >= 12 && curDate < 20){
        greeting = "good afternoon"
        cssStyle.color.yellow;
     }else{
        greeting = "good night"
        cssStyle.color.green;
     }

    return(
    <>

    <h5> hello sir, <span style={cssStyle}> {greeting}</span></h5>
<p>My name is nafees khan, i live in jhalawar (rajsthan). i have done BCA since 2020. my hobby is riding and my favorite color is black.</p>

    </>
    )
}
export default Per;