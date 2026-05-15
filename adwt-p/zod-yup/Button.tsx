type ButtonProps={
    value:string,
    click:(e:React.MouseEvent)=>void;
}
const clickHandler=()=>{
    alert("Button clicked");
    
}
const Button=(props:ButtonProps)=>{
    return (
        <button onClick={props.click}>{props.value}</button>
    )
}
export default Button;
