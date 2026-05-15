import { Component } from "react";
type StateType={
    count:number
}
class CounterClass extends Component<{},StateType>
{
    id:number=1;

    constructor(props:{})
    {
        super(props);//base class constructor- Component
        this.state={count:1};

    }

    componentDidMount(): void {
      this.id=  setInterval(this.clickHandler,200);

    }
    componentWillUnmount(): void {
        clearInterval(this.id);
    }

    clickHandler=()=>{
        this.setState({count:this.state.count+1})
    }

    render()
    {
        return (
            <>
            {this.state.count}
            <button onClick={this.clickHandler}>Click me</button>
            </>
        )
    }
}
export default CounterClass;
