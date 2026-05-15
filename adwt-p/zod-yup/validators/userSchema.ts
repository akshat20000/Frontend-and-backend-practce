
import * as yup from "yup"
export const userSchema=yup.object({
    name:yup.string()
    .required("Name must be given")
    .length(4,"Name must of 4 characters")
    .trim()
    .lowercase(),
    age:yup.number()
    .required("Age is required")
    .min(18, "Age must >18")
    

})