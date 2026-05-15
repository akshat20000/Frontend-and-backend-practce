type GreetProps={
    name:string,
    years?:number
}

function Greet(props:GreetProps){
    return <h1>Greeting {props.name} - {props.years}</h1>
}

// export function greeting(){
//     return <h1>Another Component</h1>
// }

export default Greet;
