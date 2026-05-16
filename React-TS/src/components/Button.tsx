import "../style/button.css"
type buttonprop={
    count: number,
    onClick: ()=>void,

}
export default function Button({count,onClick}:buttonprop){
    return(
        <>
        <div>
        <button className="mybutton" onClick={onClick}>i am a button</button>
        <h3>clicked {count} times</h3>
        </div>
        </>

    )
}