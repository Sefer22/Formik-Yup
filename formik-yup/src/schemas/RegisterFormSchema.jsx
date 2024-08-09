import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
    email : yup.string().email("Enter valid email").
    required("Email area is required"),

    age : yup.number().positive("Enter positive number").
    integer("Enter full mode").required("Age area is required"),
    
    password : yup.string().required("Password area is required"),
    
    confirmPassword: yup.string().required("password repetition is mandatory").
        oneOf([yup.ref('password',yup.password)],'Passwords doesn`t matches'),
        
    term : yup.boolean().required("Please confirm box")

})