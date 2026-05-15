import { useLocation } from "react-router-dom";

const About=()=>{

       const location= useLocation();

    return (

        <>
       <h3> About Page</h3>
       {location.state?.name}
        </>
    )
}
export default About;
