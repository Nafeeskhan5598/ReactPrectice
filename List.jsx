import React from "react";
import youtuber,{ teacher, doctor, myName, nkName, salary,add,sub,mult,div} from "./heading";


function Lis(){


    return(

        <>

<ol>
    <li>khan</li>
    <li>{youtuber}</li>
    <li>{teacher}</li>
    <li>{doctor}</li>
    <li>{myName()}</li>
    <li>{nkName()}</li>
    <li>{salary()}</li>
   
 <li> sum of two number is 40 + 2 = {add (40, 2)}</li>
 <li> sub of two number is 40 - 2 = {sub (40, 2)}</li>
 <li> mult of two number is 40 * 2 ={mult (40, 2)}</li>
 <li> div of two number is 40 / 3 = {div (40, 3)}</li>

</ol>

        </>
    )

}
export default Lis;