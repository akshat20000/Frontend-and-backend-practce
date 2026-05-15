import { useRef, useState } from "react";

// const FormData = () => {
//     // let name="";
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [city, setCity] = useState("");

//     // let age="";

//     const nameChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {

//         //name=evt.target.value;
//         setName(evt.target.value);


//     }
//     const ageChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {

//         // age=evt.target.value;
//         setAge(evt.target.value);


//     }
//     const cityChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {

//         // age=evt.target.value;
//         setCity(evt.target.value);


//     }

//     const clickHandler = () => {
//         alert(name + " " + age);

//     }
//     const changeHandler = () => {
//         //name="Test";
//         setName("Test");
//         setAge("20");



//     }

//     return (
//         <>
//             <div>
//                 <input type="text" value={name} onChange={nameChangeHandler} />
//                 <input type="text" value={age} onChange={ageChangeHandler} />
//                 <input type="text" value={city} onChange={cityChangeHandler} />
//                 <input type="button" value="Send" onClick={clickHandler} />
//                 <input type="button" value="Change" onClick={changeHandler} />

//             </div>
//         </>
//     )
// }

// const FormData = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         age: "",
//         city: ""
//     })

//     const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
//         //name -key , value->value
//         //evt.target->Object->keys(name,value)
//         const { name, value } = evt.target;//De-Structing
// //obj.prop=value
// //key="name"
// //ob[key]=value

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value

//         }))

//     }
//     const clickHandler=()=>{
//         console.log(formData);

//     }
//     const changeHandler=()=>{
//          setFormData((prev) => ({
//             ...prev,
//             "name":"Test"

//         }))

//     }
//     return (
//         <>
//         <div>
//             <input type="text" value={formData.name} name="name" onChange={handleChange} />
//             <input type="text" value={formData.age} name="age" onChange={handleChange} />
//             <input type="text" value={formData.city} name="city" onChange={handleChange} />
//             <input type="button" value="Send"  onClick={clickHandler}/>
//              <input type="button" value="Change"  onClick={changeHandler}/>

// </div>

//         </>
//     )

// }
// import {useForm} from "react-hook-form"
// type FormType={
//     name:string,
//     age:string,
//     city:string
// }
// const FormData=()=>{

//     //useForm->Object->keys
//    const{handleSubmit,register,formState:{errors}}=   useForm<FormType>();//Destructing

// const mySubmit=(data:FormType)=>{
//     console.log(data);


// }
//     return (
//         <>
//         <div>
//             <form onSubmit={handleSubmit(mySubmit)}>
//             <input type="text" {...register("name")}/>
//             <input type="text" {...register("age")}/>
//             <input type="text" {...register("city")}/>
//             <input type="submit"/>
//             </form>

//         </div>
//         </>
//     )
// }

const FormData = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const ageRef = useRef<HTMLInputElement | null>(null);
    const clickHandler = () => {
        console.log(nameRef.current?.value);
        console.log(ageRef.current?.value);
    }

    return (
        <>
            <div>
                <input type="text" ref={nameRef} />
                <input type="text" ref={ageRef} />
                <input type="button" value="Send" onClick={clickHandler} />
            </div>
        </>
    )


}

export default FormData;
