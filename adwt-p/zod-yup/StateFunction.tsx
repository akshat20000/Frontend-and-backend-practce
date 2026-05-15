// const StateFunction=()=>{
//     const clickHandler=()=>{
//         count++;
//         console.log(count);

import { useState } from "react";

//     }
//     let count=1;
//     return (

//         <>
//         {count}
//         <button onClick={clickHandler}>Click me</button>
//         <h1> {count}</h1>
//         </>
//     )
// }
// export default StateFunction;
type StateType={
    name:string,
    age:number
}
const StateFunction=()=>{
  //console.log(  useState(1));
  const [count,setCount]=useState(1);
  const [obj,setObject]=useState<StateType|null>(null);


    const clickHandler=()=>{
     //   count++;
     setCount(count+1);

     setObject({name:"Code",age:10})
        console.log(count);

    }
  //  let count=1;
    return (

        <>
        {count}
        <button onClick={clickHandler}>Click me</button>
        <h1> {count}</h1>
        {obj?.name}
        </>
    )
}
export default StateFunction;
