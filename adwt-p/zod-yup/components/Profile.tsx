// type ProfileProps={
//     user:string

import { useContext } from "react";
import { UserContext,type UserType } from "../UserContext";

// import type { DashboardProps } from "./Dashboard";

// // }
// const Profile=(props:DashboardProps)=>{
//     return (
//         <>
//         <h3>Profile -{props.user}</h3>
//         </>
//     )
// }
//export default Profile;




const Profile=()=>{
    const data=useContext<UserType|null>(UserContext);

    return (
        <>
        <h3>Profile -{data?.name}</h3>
        </>
    )
}
export default Profile;