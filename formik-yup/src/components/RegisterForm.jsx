import React from 'react'
import { useFormik } from 'formik';

function RegisterForm() {
    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:'',
          term:''
        },
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
            <input type="checkbox" id="term" 
            value={values.term} 
            onChange={handleChange} />
            <label>Accept all cookies</label>
            </div>
        </form>
      
    </div>
  )
}

export default RegisterForm
