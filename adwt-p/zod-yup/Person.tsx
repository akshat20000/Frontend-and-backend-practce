type PersonProps={
    details:{
        name:string,
        age:number
    }
}
const Person=(props:PersonProps)=>{
    return (
        <h1>Welcome {props.details.name}</h1>
    )

}
export default Person;