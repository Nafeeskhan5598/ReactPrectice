// import userEvent from "@testing-library/user-event";
import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState, useRef, useReducer } from "react";
import { act } from "react-dom/test-utils";
// ------------------------------if else condition------ old type ----------------------------------------
// function Condition(){
//     const [loggedIn, setLoggedIn] = useState(true)
//     if(loggedIn){
//     return(

//                 <div>
//                     <h1> welcome Nafees</h1>
//                 </div>

//     )
//     }else{
//         return(
//             <div>
//             <h2>welcome Guest</h2>
//             </div>
//         )
//     }

// }
// ------------------------------if else condition------ new type ----------------------------------------
//     function Condition(){
//         const[loggedIn, setLoggedIn] = useState(false)
//         //1,2,3
//         return(
//             <div>
//                 {loggedIn?<h1>welcome Nafees</h1>:<h1>welcome Zuned</h1>}
//             </div>
//         )
//     }
// // ------------------------------if else condition------ new type ----------------------------------------
// function Condition(){
//     const[loggedIn, setLoggedIn] = useState(3)
//    //1,2,3
//     return(
//         <div>
//             {loggedIn ==1? <h1>welcome Nafees</h1>
//             : loggedIn ==2? <h1>wolcome Zuned</h1>
//             :<h1>welcome Sohel</h1>
//             }
//         </div>
//     )
// }

// function Condition(props){
// let x = '😄';
// let y = '😄';
// let z = ' 🥈';

// let x = props.x;
// let y = props.y;
// let z = props.z;

// let {x, y, z} = props;

//     // if((x===y) && (y===z)){
//     //     return(
//     //          <>
//     //             <div className="slot_inner">

//     //                 <h1> 
//     //                 {x} {y} {z}
//     //                 </h1>
//     //                 <h1> This is matching.</h1>
//     //                 <hr />
//     //             </div>
//     //          </>
//     //     )
//     // }else{
//     //     return(
//     //         <>
//     //            <div className="slot_inner">

//     //                <h1> 
//     //                {x} {y} {z}
//     //                </h1>
//     //                <h1> This is not  matching.</h1>
//     //                <hr />
//     //            </div>
//     //         </>
//     //    )
//     // }

//     return(
//         <>
//             <div>
//                 <h1 className="heading_style"> 
//                  🎰 welcome to <span style={{fontWeight : 'bold'}}> Slot machine game </span> 🎰  </h1>
//               </div>
//               <div className="style">
//             {x === y? <h1> {x} {y} {z}  <h1> This is matching.</h1> </h1> 
//     :y === z? <h1> {x} {y} {z}  <h1> This is not matching.</h1> </h1> 
//     :  <h1> {x} {y} {z}  <h1> This is not matching.</h1> </h1>
//             }
//             </div>




//         </>
//     )
// }
// ----------------------------------------------------------------------Form----------------------------------------
// function Condition() {
//     const [fullName, setFullName] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         phone: "",

//     });
//     const inputEvent = (event) => {
//         console.log(event.target.value)
//         console.log(event.target.name)

//         const { name, value } = event.target;

//         setFullName((preValue) => {
//             console.log(preValue);

//             return {
//                 ...preValue,
//                 [name]: value,
//             };



//         })

//     }

//     const onSubmits = (event) => {
//         event.preventDefault();
//         alert("form submitted");
//         fullName.fname = '';
//     };



//     return (
//         <>
//             <div className="main_div">
//                 <form onSubmit={onSubmits}>
//                     <div>
//                         <h1>
                        
//                             form fillup {fullName.fname} {fullName.lname}
//                         </h1>
//                         <p> {fullName.email}</p>
//                         <p> {fullName.phone}</p>
//                         <input
//                             type="text"
//                             placeholder="Enter Your First Name"
//                             name="fname"
//                             onChange={inputEvent}
//                             value={fullName.fname}
//                         />


//                         <br />
//                         <input
//                             type="text"
//                             placeholder="Enter Your Last Name"
//                             name="lname"
//                             onChange={inputEvent}
//                             value={fullName.lname}
//                         />


//                         <input
//                             type="email"
//                             placeholder="Enter Your Email"
//                             name="email"
//                             onChange={inputEvent}
//                             value={fullName.email}
//                             autoComplete="off"
//                         />
//                         <br />

//                         <input
//                             type="number"
//                             placeholder="Enter Your Mobile"
//                             name="phone"
//                             onChange={inputEvent}
//                             value={fullName.phone}
//                         />
//                         <button type="submit">Submit Me</button>
//                     </div>

//                 </form>
//             </div>
//         </>

//     )

// }

// export default Condition;

// -------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";


  
// function Condition(){
// const users = [
//     {name: "nafees", email: "nafees@.com", contact: "45456564"},
//     {name: "zuned", email: "zuned@.com", contact: "456454544"},
//     {name: "matin", email: "matin@.com", contact: "41564654"}, 
//     {name: "sohel", email: "sohel@.com", contact: "44564654"},
 
    
// ];

 
    // return <li>{myList}</li>

// return(
//     <>
//         <h1>List with bootstrap table</h1>
//         {
//             users.map((item) =>{
//                 <tr>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.contact}</td>
                
//                 </tr>
//             }
//             )
//         }
//     </>
// )

//         }  


{/* <>
<h1>
    welcome
</h1>

<ul>
    <li>hello</li>
    <li>good</li>
    <li>soft</li>
</ul>
</>
)
} */}
// -----------------------------------------------hooks example -------------------button chick and change value--------------------------------
// function Condition(){

// const [myName, setMyName] = useState('good morning indore');

// const changeName = () => {

//     setMyName('NKKhan5598');
// }

// console.log(myName)
//     return(

//         <div>
//             <h1>{ myName }</h1>

//             <button className="btn"  onClick={changeName}>Change value</button>
//         </div>
//     )
// }
// ---------------------------------------------------------------------
// function Condition(){
//     changeName = () => {
//     this.setState({count : this.state.count + 1})
// }
//         return(
    
//             <div>
//                 <h1>{ this.state.count }</h1>
    
//                 <button className="btn"  onClick={() => {this.changeName()}}>Change value</button>
//             </div>
//         )
//     }
    // -------------------------------------------------------use state --------Hooks------------------------------------

    // function Condition(){
// const [data, setData] = useState(10)
// console.warn(data)

// return(
//   <div>
//     <h1>hello{ data }</h1>
//     <button onClick={() => setData(data + 5)}>Upsata Data</button>
// </div>
// )
// }
// ----------------------------------------------2 Example---------------------------------------------
// function Condition(){
// const [car, setCar] = useState({

//     brand: "Ford", 
//     modal: "Mustand",
//     year:  2022,
//     color: "red"
// });

// const updateColor = () => {
//     setCar(hello => {
//         return{ ...hello, color: "blue" }
//     })
// }
// return(
//   <div>
//     <h1>My{ car.brand }</h1>
//     <p> 
//     it is a {car.color} {car.modal} from {car.year}.
//     </p>
//     <button type = "button" onClick={updateColor}>Upsata Blue</button>
// </div>
// )    
// }
// ---------------------------------------------------------------------Use Effects-----------------------------------

// function Condition(){
//             const [num, setNum] = useState(0);

//             useEffect (() => {
//                 alert("thank you incriment " + num  )
//             })
//     return(
//         <div>
  
//             <button onClick={() => setNum(num + 1)}>click { num } </button>
           
//         </div>
//     )
// }

// -----------------------------------------------Use Effect  (Timer Example)------- Auto counter-------------


// function Condition(){
//         const [count, setCount] = useState(1);

//         useEffect(() =>{

//             setTimeout(() => {
//                 setCount((count) => count + 1)
//             },1000)
//         },[]);
//     return(
//         <div>
  
//             <h1>hello it is Auto counting programm { count }</h1>
           
//         </div>
//     )
// }



// -----------------------------------------------Use Effect  (+2) (+2*2)------- Auto counter-------------


// function Condition(){
//         const [count, setCount] = useState(1);
//         const [calculation, setCalculation] = useState(1);


//         useEffect(() =>{
//                 setCalculation(() => count * 2)
//         }, [count]);
//     return(
//       <>  
//         <p> Count: { count }</p>
//         <button onClick={() => setCount((c) => c + 1 )}>+</button>
//            <p> Calculation: { calculation }</p>
//            </>

//     );
// }



// ----------------------------------------------------------form input type------------------------------------
// function Condition (){
//    const [name, setName] = useState({}) 

//    const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))


//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(inputs);
//     }
//   }
// return(


//   <div>
//     <form>
//     <label> Enter your name: 
//           <input
//            type="text"
//            name="Enter your name"
//           value={name}
//           onChange={ (e) => setName(e.target.value) }
//           />
//              </label>
//         <label> Enter your number:
//         <input 
//         type="number"
//         value={inputs.age || ""} 
//         onChange={ handleChange } 
//           />
//         </label> 

//       <input type="submit" />
 

//     </form>
//   </div>
// )
        
    
// }

// -------------------------------------------------------------Use increment number old is  type----------------------------------------

// function Condition(){
 
//   const [count, setCount] = useState(0);



//   const Increment = () => {
//       setCount((c) => c + 1);

//   }
//  return(
//   <>
//      <h1>
//       Count: { count }
  
//       <button onClick={Increment}>+</button>
   
// </h1>
//   </>
// )


// }

// --------------------------------------------------------------------------

// function Condition(){

//   const [number, setNumber] = useState(1);
//   const [inc, setInc] = useState(0);
//   const factorial = factorialOf(number);

//   const onChange = event => {
//     setNumber(Number(event.target.value));
//   };
// const onClick = () => setInc(i => i+1);


//   return(
//     <>
//             <div>
//                   factorial of
//                 <input type="number" value={ number } onChange={ onChange } />
//                 is { factorial }
//                   <button onClick={ onClick}>increment in Console</button>
//             </div>
   
//     </>
//   )
// }
// function factorialOf(n){
//   console.log('factorialOf(n) called!')
//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// };


//  function Condition(){
   
//   const [number, setNumber] = useState(1);
//   const [inc, setInc] = useState(0);

//   const factorial = factorialOf(number);

//   const onChange = event => {
//     setNumber(Number(event.target.value));
//   };
//   const onClick = () => setInc(i => i + 1);
  
//   return (
//     <div>
//       Factorial of 
//       <input type="number" value={number} onChange={onChange} />
//       is {factorial}
//       <button onClick={onClick}>Re-render</button>
//     </div>
//   );
// }

// function factorialOf(n) {
//   console.log('factorialOf(n) called!');
//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// }



// ----------------------------------------------------------------------------useContext----------------------------------


// function Condition() {
//   const user = { name: 'John Doe', age: 30 };

//   return (
//     <useContext.Provider value={user}>
//       <UserProfile />
//     </useContext.Provider>
//   );
// }

// function UserProfile() {
 
//   const user = useContext(useContext);

//   return (
//     <div>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// }

// _________________________________________________________________________Use Ref_______________________


//           const UseRef = () =>{

//            [myData, setMyData] = useState(" ")
//           // const [count, setCount] = useState()
//           const count = useRef(10);
// console.log("hello good", count)          

//           useEffect(() =>{
// // setCount (count + 1);
// count.current = count.current + 1;
//           });
//   return(
//     <>
//         <div> 
//               <input 
//               type="text"
//               value={myData}
//               onChange={(e) => setMyData(e.target.value)} 
//               />
//               <h1>The number of timer render {count}</h1>

//         </div>

//     </>
//   )
// }

// _________________________________________________________________Usr Ref _____________________________________
    // function Condition(){
    //           let inputRef = useRef(null)

    //           // let a = 4;
    //           // let b = 5;
    //           // let c = a + b;
    //           // console.log(c);
    //           function handleInput(){
    //             inputRef.current.style.color = "red"
    //             inputRef.current.value = 1000;
    //             // inputRef.current.style.display = "none";
    //             inputRef.current.focus()

    //           }
    //   return(

    //     <>
    //       <input
    //       type="text"
    //       ref={inputRef}
    //       />

    //       <button onClick={handleInput}>Handale input</button>
    //     </>
    //   )
    // }
// ____________________________________________________use reducer old type_______________________________________________________
// function Condition(){
//   const[count, setCount] = useState(0)

//   return(
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </>
//   )
// }
//  _______________________________________________use reducer new type_______________________________________________________

// function Condition(){
//   const[count, setCount] = useState(0)
  const initialState = 5;

  const reducer = (state, action) => {
    console.log(state, action);
    if(action.type === "INCREMENT"){

    return state + 1;
   
  }

  if(action.type === "DECREMENT"){
    return state - 1;
}

return state;
  }

  const Condition = () => {
    const [state, dispatch]  =  useReducer(reducer, initialState);
  
    let a = 40;
    
    const add = () => {
    a++;
    console.log(a)
    return a;
    }
  return(
    <>
      <p>{state}</p>
      <button onClick={() => dispatch({type : "INCREMENT"})}>INC</button>
      <button onClick={() => dispatch({type : "DECREMENT"})}>DEC</button>
      <p>{a}</p>
      <button onClick={add}>click</button>
    </>
  )
}

export default Condition;




