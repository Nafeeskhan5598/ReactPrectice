import { render } from "@testing-library/react";
import React, { useState } from "react";

// ------------------------------------------------class example----------------------------------
// class Profile extends React.Component{

//     render()
//     {

//         return(
//             <div><h1>Profile Components</h1></div>
//         )

//     }
// }
// export default Profile;
// --------------------------------------------------------Props Example -----------------------------
            function Profile(props){
                console.log(props)
            return(
                     <>
                        <div className="cards">
                            <div className="card">
                               <img src={props.imgsrc} id="lembo" alt="mypic" className="card_img" />
                                <div className="card_info">
                                     <span className="card_category">{props.title}  </span>
                                       <h3 className="card_title"> {props.sname} </h3>
                                      <a href= {props.link} target="_blank">
                                 <button>Watch Now</button>
                             </a>
                        </div>
                     </div> 
                </div>

            </>
         );
     }

export default Profile;  


// ---------------------------------------------------function Component-incriment number -----------------------------

// function Nafees(props) {

//     const [num, setNum] = useState(0)
//     const update = () => {
//         setNum(num + 1);
//     }

//     return (
//         <>
//             <div style={{textAlign: 'center'}}>
//                 <div>
//                     <span>{num}</span>
//                 </div>
//                 <div>
//                     <button onClick={()=> {update()}}>click</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// import Nafees extends React.Component{
//     render()
// {
// ----------------------------------------------------Class Component--alert-----------------------------
// export class Nafees extends React.Component{
//     render(){
//     const hello = () =>{
//         alert("Your form is submited")
//     }

// return(
//     <>
// <button onClick={hello}>Submit</button>
// <h1> good night</h1>

//     </>
// )
// }
// }


// export default Nafees;
// -----------------------------------------------------------Class Component Event-------------------------------
// export class Nafees  extends React.Component{

//   testFun()
//   {
//     alert("hello good morning")
//   }
//   render()
//   {

//     return (
//         <div>
//         <button onClick={this.testFun.bind()}>Take the shot!</button>
//         </div>
//     );
//   }
// }
//   export default Nafees;
// ---------------------------------------------------------------Function Component Event---------------------------------
// export default function Nafees(){

//     const textFun = () =>{

//         prompt("")
//         alert("Thank you")


//     }   
//     console.log(textFun)
//     return(
//         <div>
//             <button onClick={textFun}>Submit</button>
//         </div>
//     )
// }
// ------------------------------------------
// class Nafees extends React.Component {  
//     constructor(props) {  
//         super(props);  
//         this.state = {  
//             companyName: ''  
//         };  
//     }  
//     changeText(event) {  
//         this.setState({  
//             companyName: event.target.value  
//         });  
//     }  
//     render() {  
//         return (  
//             <div>  
//                 <h2>Simple Event Example</h2>  
//                 <label htmlFor="name">Enter company name: </label>  
//                 <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
//                 <h4>You entered: { this.state.companyName }</h4>  
//             </div>  
//         );  
//     }  
// } 
// -----------------------------------------------------------Constructor--------------------------
// class Nafees extends React.Component {  
// constructor(props){
//     super(props);
//     this.state = {
//         value:''
//     }
//    this.handlerEvent = this.handlerEvent.bind(this);
//    this.Change = this.Change.bind(this);
// }
// handlerEvent(){
//     console.log(this.props);
// }

// Change(event) {
//     this.setState({value: event.target.value});  
// }
// render(){
//     return(
//         <>
//         <h1> Hello World</h1>
//         <input type="text" name='input' value={this.state.value} onChange={this.Change}/>
//         <button onClick={this.handlerEvent}>Please Click me</button>
//         </>
//     )

// }
// }
// export default Nafees;  
// ------------------------------------------------------events alert and css style------------------------------------------------
// const Nafees = () => {

//     const bgChange = () =>{
//     //    console.log("clicked")

//     };
//     const hello = () =>{
//         alert("Please dont mouse over this text");

//     }

// return(

//     <>
//     <div style={{ backgroundColor : 'orange'}}>
//         <h2 onMouseOver={hello}>good morning</h2>
//         <button style={{ backgroundColor : 'green', border : '2px solid red', borderRadius : '10px'}}> <h5 style={{color: 'red'}}>Click me</h5></button>
//         </div>
//     </>
// )
// }
// export default Nafees;  
// -----------------------------Event-----------  change text lovercase to uppercase without page reload ----------------------------------
// function Nafees (props){
//     const handleUpClick = () => {
// // console.log("Uppercase was clicked" + text)
// let newText = text.toUpperCase();
// setText(newText)
//     }
//     const handleOnChange = (event) => {
//         // console.log("On change")
//         setText(event.target.value);        
//             }
//     const [text, setText] = useState('Enter text here2');
//     // text = "new text"; //wrong way to change the state 
//     // setText("new text"); //Correct way to change state
//      return(
//         <>
//         <div>
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//   <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" cols = "50"></textarea>
// </div>
// <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
// </div>

//         </>
//      )
// }
// export default Nafees;

// -------------------------------------------------Practice-----------------------------------------------------------
// function Nafees(props){

//     const upperCase = () =>{
//         console.log(upperCase)
//       const  newText = text.toUpperCase();
//         setText(newText)

//     }

//     const loverCase = (event) =>{
//         console.log(loverCase)
// setText(event.target.value);
//     }
//  const [text, setText] = useState("please Enter Text")
//     return(
//         <>
//         <div>
//             <h1>{props.heading}</h1>
//             <div>
//                 <textarea className="btn" value={text} onChange={loverCase} rows= "8" cols= "30" ></textarea>
//             </div>
//             <button onClick={upperCase} > To Uppercase</button>
//             </div>
//         </>
//     )
// }
// export default Nafees

// --------------------------------Evnts------------Upper to lower and lower to upper case text ------------------------------









// import React, { useState } from "react";
// function Nafees(props) {

//     const lowerCase = () => {
  
//         if(clickC % 2 == 0 ){
//             setText(ent.toUpperCase());
//         } else {
//             setText(ent.toLowerCase());
//         }
//         setClickCount(clickC + 1)
//     };
     
//    const [ent, setText] = useState("")
//     const [clickC, setClickCount] = useState(0);
//     const upperCase = (event) => {
  
//             setText(event.target.value)
//     };

//     const deleteBtn = () => {
//         setText('');
//       };
 
//     return (
//      <>
//             <div  className='textarea_body'>   
//                 {/* <h1>{props.heading}</h1> */}
//                 <div className="ev">
//                     <textarea className="txt" id="chack" value={ent} onChange={upperCase} cols="80" rows="20"></textarea>
//                 </div>
//                 <button className="btn1" onClick={lowerCase}>Change Text To L/U</button>
//                 <button className="btn1" onClick={deleteBtn}>Delete</button>
//             </div>
//             </>
  
//     )
//     }

    
// export default Nafees;
