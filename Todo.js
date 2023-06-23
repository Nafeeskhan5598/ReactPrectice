// ---------------------------------------Use Memo simple exaple-----------------------------

// import React, { useState } from "react";
// import UseCallback from "./Usecallback";
// const Todo = () => {
   
//  const[counterOne, setcounterOne] = useState(0);
            

//             const IncrementOne = () => {
//                 setcounterOne(counterOne + 1)
//             }
//     return (
//     <div>
//          <UseCallback />
//          <button onClick={IncrementOne}>+ {counterOne}</button>
//                     </div>
// )
//                                 // ager useMemo ka use nahi kare to unwanted child component load hoga or har bar button click par child component ko print karega
//                                 // use memo ka use karenge to  unwanted child component ko load nahi hoga  use memo ka use karke child component ko stop kar sakte he
// }

// export default Todo;

// ------------------------------------------------use callBack-------------------
// import React, { useCallback, useState } from "react";
// import UseCallback from "./Usecallback";
// const Todo = () => {
   
//  const[counterOne, setcounterOne] = useState(0);
//  const[countertwo, setcountertwo] = useState([]);
            

//             const IncrementOne = () => {
//                 setcounterOne(counterOne + 1)
//             }
// const fun=useCallback(() => {
//     console.log("hello nafees")
// }, countertwo)

//     return (
//     <div>
//          <UseCallback  countertwo = {countertwo} fun = {fun}/>
//          <button onClick={IncrementOne}>+ {counterOne}</button>
//                     </div>
// )

// }

// export default Todo;
// ---------------------------------------------------------------


import React, {useEffect, useState} from "react";
import useTitle from "./useTitle";

function Todo(){
    const[count, setcount] = useState (0);
  useTitle(count)

    return(
        <>
            <h1>Custom Hooks</h1>
            <button onClick={() => setcount(count + 1)}>Click</button>
        </>
    )
}

export default Todo;