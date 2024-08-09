import React from 'react'
import { useFormik } from 'formik';

function RegisterForm() {
    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
        },
      });
      console.log(formik);
  return (
    <div>
        <form>
            <label>Email</label>
            <input type="text" id="email" placeholder='Enter email' 
            value={values.email} onChange={handleChange} />
        </form>
      
    </div>
  )
}

export default RegisterForm
