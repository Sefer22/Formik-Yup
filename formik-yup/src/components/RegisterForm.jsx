import React from 'react'
import { useFormik } from 'formik';

function RegisterForm() {
    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:''
        },
      });
      console.log(formik);
  return (
    <div>
        <form>
            <div>
            <label>Email</label>
            <input type="text" id="email" 
            placeholder='Enter email' 
            value={values.email} 
            onChange={handleChange} />
            </div>

            <div>
            <label>Age</label>
            <input type="number" id="age" 
            placeholder='Enter age' 
            value={values.age} 
            onChange={handleChange} />
            </div>

            <div>
            <label>Password</label>
            <input type="password" id="password" 
            placeholder='Enter password' 
            value={values.password} 
            onChange={handleChange} />
            </div>

            <div>
            <label>Confirm password</label>
            <input type="password" id="confirmPassword" 
            placeholder='Enter password again' 
            value={values.confirmPassword} 
            onChange={handleChange} />
            </div>
        </form>
      
    </div>
  )
}

export default RegisterForm
