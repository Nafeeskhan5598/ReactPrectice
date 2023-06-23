// ---------------------------------------useMomo  Child component-----------------

// import React, { memo }  from "react";
//  const UseCallback = () => {
//     console.log("Child component Rerender!!")
//     return(
//         <>
//             <h2>Child Component</h2>
//              </>
//     )
//  }

// export default memo(UseCallback);

// -------------------------------------------useCall back ----------

// import React, { memo }  from "react";
//  const UseCallback = ({countertwo, setcountertwo}) => {
//     console.log("Child component Rerender!!")
//     return(
//         <>
//             <h2>Child Component</h2>
//              </>
//     )
//  }

// export default memo(UseCallback);

// ----------------------------------------------------------
import { useState, useEffect } from "react";
 const UseCallback = () => {
const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </> 
  )
    }
  export default UseCallback;