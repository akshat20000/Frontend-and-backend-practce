import { useLoaderData } from "react-router-dom";

const Contact=()=>{

   const data=  useLoaderData();

    return (

        <>
       <h3> Contact Page</h3>
       {data}
        </>
    )
}
export default Contact;
