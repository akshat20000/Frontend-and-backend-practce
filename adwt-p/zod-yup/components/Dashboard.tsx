import { useContext, useState } from "react";
import { UserContext, type UserType } from "../UserContext";
import Profile from "./Profile";

// export type DashboardProps={
//     user:string
// }
// const Dashboard=(props:DashboardProps)=>{

//    // const [result,setResult]=useState(0);

//     return (
//         <>

//         <h3>Dashboard - {props.user}</h3>
//         <Profile user={props.user}/>
//         <Sidebar/>

//         </>
//     )
// }

const Dashboard=()=>{

    const data= useContext<UserType|null>(UserContext);

    return (
        <>
        <h3>Dashboard {data?.name}</h3>
        <Profile/>
        
        </>
    )
}
export default Dashboard;
