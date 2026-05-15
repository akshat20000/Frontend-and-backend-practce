import { createContext, useContext, useState } from "react"

type contexttype = {
    // count: number;
    step: number;
    // Increment: () => void;
    // Decrement: () => void;
    stepcount:(n:number)=>void;
    reset:()=>void;
}
const countercontext = createContext<contexttype | null>(null);

function Controls() {
    const counter = useContext(countercontext);
    if (!counter) { return null; }
    return (
        <>
            {/* <button onClick={counter.Increment}>Increment +</button>
            <button onClick={counter.Decrement}>Decrement -</button> */}
            <button onClick={()=>counter.stepcount(1)}>step+1</button>
            <button onClick={()=>counter.stepcount(5)}>step+5</button>
            <button onClick={counter.reset}>Reset</button>
        </>
    )
}
function Display() {
    const counter = useContext(countercontext);
    if (!counter) return null;
    return (
        <>

            <div>
                {/* <h2>current count: {counter.count}</h2> */}
                <h2>current step: {counter.step}</h2>
                <Controls />
            </div>
        </>
    )
}

export default function ApiContextPrac() {
    const [count, setcount] = useState<number>(0);
    const [step, countstep]= useState<number>(0);

    // const Increment = () => {
    //     setcount(count + 1);
    // };

    // const Decrement = () => {
    //     setcount(count - 1);
    // };
    const reset=()=>{
        countstep(0);
    }
    const stepcount=(n:number)=>{
        countstep(step+n);
    }
    
    return (

        <countercontext.Provider value={{  step ,stepcount, reset }}>
            <div>
                {/* <p>Count: {count}</p> */}
                <p>steps:{step}</p>
                <Display />
            </div>
        </countercontext.Provider>

    )
}