// import { useForm } from "react-hook-form";
// type FormData={
//     name:string,
//     age:string
// }
// const ReactForm=()=>{

import { useState } from "react";

// const {handleSubmit,register}=useForm<FormData>();

// const mySubmit=(data:FormData)=>{



// }
// return(
//     <>
//     <div>
//         <form onSubmit={handleSubmit(mySubmit)}>
//             <input type="text" {...register("name")}/>
//             <input type="text" {...register("age")}/>
//             <input type="submit"/>

            
//         </form>
        
//     </div>
//     </>
// )

// }
// export default ReactForm;


const ReactForm=()=>{
    const [formData,setFormData]=useState({
        name:"",
        age:""
    });

const changeHandler=(evt:React.ChangeEvent<HTMLInputElement>)=>{

    const {name,value}=evt.target;
    // if(name=="age")
    // {
    //     if(parseInt(value)<18)
    //     {
    //         console.log("Age is not valid");
    //         return ;

    //     }
    // }

    setFormData((prev)=>({
        ...prev,
        [name]:value
    }))


}
const clickHandler=()=>{
    console.log(formData)
    if(parseInt(formData.age)<18)
    {
        console.log("Age is not valid");
        return;

    }



    console.log("Submit...")
}
    return(
        <>
        <div>
            <form>
            <input required type="text" name="name" value={formData.name} onChange={changeHandler}/>
            <input type="number" name="age" min={18} value={formData.age} onChange={changeHandler}/>
            <input type="button" value="Send" onClick={clickHandler}/>
       <input type="submit"/>

       </form>
        </div>
        </>
    )
}
export default ReactForm;
