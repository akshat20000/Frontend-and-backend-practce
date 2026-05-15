import React from "react"
type GreetClassProps={
    name:string
}
class GreetClass extends React.Component<GreetClassProps>
{
    render()
    {
        return (
            <h1>Greeting Class {this.props.name}</h1>
        )
    }
}
export default GreetClass