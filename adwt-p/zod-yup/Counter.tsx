import { useEffect, useState } from "react";

const Counter = () => {

    let id: number;
    const [count, setCount] = useState(0);
    // const data=useState(1);
    //data[0], data[1]();
    //array -> 2
    //console.log(useState(1));



    const countHandler = () => {
        // count++;
        //setCount(count+1);
        setCount((prev) => (prev + 1));


        console.log(count);

    }
    //let count=1;
    console.log("DEmo");

    //setTimeout(countHandler,200);
    useEffect(() => {
      //  id = setInterval(countHandler, 200);
       // console.log(id);

       // return () => clearInterval(id);


    }, [])//once

    return (

        <>
            {count}
            <button onClick={countHandler}>Click me</button>
        </>
    )

}

export default Counter;
