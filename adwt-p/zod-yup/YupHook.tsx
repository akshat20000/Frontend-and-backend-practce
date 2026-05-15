import { useForm } from "react-hook-form";
import "./App.css"
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "./validators/userSchema";
type FormData={
    name:string,
    age:number
}
const YupHook=()=>{


const {handleSubmit,register,formState}=useForm<FormData>({
    resolver:yupResolver(userSchema)
});

const {errors}=formState;


const mySubmit=(data:FormData)=>{

    console.log(data);


  



}
//required,minLength,maxLength,min,max,pattern,validate
return(
    <>
    <div>
        <form onSubmit={handleSubmit(mySubmit)}>
            <div>
            <input type="text" {...register("name")}/>
            {/* {errors.name?.message} */}
            {errors.name?<p className="error-msg">{errors.name.message}</p>:""}
</div>
<div>
            <input type="number" {...register("age")}/>
             {errors.age?<p className="error-msg">{errors.age.message}</p>:""}
            </div>
            <input type="submit"/>

            
        </form>
        
    </div>
    </>
)

}
export default YupHook;
