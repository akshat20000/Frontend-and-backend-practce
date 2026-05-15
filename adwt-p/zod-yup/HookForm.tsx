import { useForm } from "react-hook-form";
import "./App.css"
type FormData={
    name:string,
    age:string
}
const HookForm=()=>{


const {handleSubmit,register,formState}=useForm<FormData>();

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
            <input type="text" {...register("name",{
                required:"Name is required",
                minLength:{
                    value:4,
                    message:"Name should be atleat of 4 characters"
                },
                // validate:value=>{
                //     return value!="admin" || 'Name is not valid'
                // }
                validate:{
                    adminError:value=>{
                        return value!="admin" || 'Name is not valid' 
                    }
                }
            })}/>
            {/* {errors.name?.message} */}
            {errors.name?<p className="error-msg">{errors.name.message}</p>:""}
</div>
<div>
            <input type="text" {...register("age",{
                required:"Age is required",
                min:{
                    value:18,
                    message:"Age must be >18"
                }
            })}/>
             {errors.age?<p className="error-msg">{errors.age.message}</p>:""}
            </div>
            <input type="submit"/>

            
        </form>
        
    </div>
    </>
)

}
export default HookForm;
