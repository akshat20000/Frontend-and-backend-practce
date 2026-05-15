type ParentComponentProps={
    children:React.ReactNode
}
const ParentComponent=(props:ParentComponentProps)=>{
    return (
        <h1>Parent Component - {props.children}</h1>
    )
}
export default ParentComponent;
