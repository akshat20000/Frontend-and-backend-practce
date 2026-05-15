import { Outlet, useParams } from "react-router-dom";

const ParentElement=()=>{
  const params=  useParams();//dynamics routes->variables->object

    return (
        <>
        <h1>Parent Component</h1>
        <Outlet/>
        {params.category}

        </>
    )
}
export default ParentElement;
