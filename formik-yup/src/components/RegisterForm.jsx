import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchema } from '../schemas/RegisterFormSchema';

function RegisterForm() {
    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:'',
          term:''
        },
        validationSchema:registerFormSchema
      });

  return (
    <div>
        <form>
            <div className='inputDiv'>
            <label>Email</label>
            <input type="text" id="email" 
            placeholder='Enter email' 
            value={values.email} 
            onChange={handleChange} />
            </div>

            <div className='inputDiv'>
            <label>Age</label>
            <input type="number" id="age" 
            placeholder='Enter age' 
            value={values.age} 
            onChange={handleChange} />
            </div>

            <div className='inputDiv'>
            <label>Password</label>
            <input type="password" id="password" 
            placeholder='Enter password' 
            value={values.password} 
            onChange={handleChange} />
            </div>

            <div className='inputDiv'>
            <label>Confirm password</label>
            <input type="password" id="confirmPassword" 
            placeholder='Enter password again' 
            value={values.confirmPassword} 
            onChange={handleChange} />
            </div>

            <div className='inputDiv'>
                <div style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'flex-start',
                    justifyContent:'flex-start'
                }}>
                     <input style={{width:'20px',
                       height:'12px' 
                     }} type="checkbox" id="term" 
                     value={values.term} 
                     onChange={handleChange} />
                     <label>Accept all cookies</label>
                </div>
            </div>

            <button className='button'>Submit</button>
        </form>
      
    </div>
  )
}

export default RegisterForm
