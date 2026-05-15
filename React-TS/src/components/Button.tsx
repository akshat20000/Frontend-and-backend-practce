import "../style/button.css"
import { useState } from 'react' 
export default function Button(){
    const [count,setcount] = useState(0)
    function handleclick(){
        setcount(count+1);
    }
    return(
        <>
        <div>
        <button className="mybutton" onClick={handleclick}>i am a button</button>
        <h3>clicked {count} times</h3>
        </div>
        </>

    )
}