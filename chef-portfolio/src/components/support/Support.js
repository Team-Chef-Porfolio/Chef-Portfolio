import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import Account from '../account/Account'


const Support = (props) => {
   const [support, setSupport] = useState([]);
   
   useEffect(() => {
     if(props.status){
        setSupport([...support, props.status]);
     } 
   },[props.status]);
 return (
   
   <div className='support-form'><h1>SUPPORT</h1>
      <Form>
         <Field type='text' name= 'name' placeholder='Name' />
         {props.touched.name && props.errors.name && (
            <p className= 'errors'> {props.errors.name} </p>
         )}
         <Field component = 'select' name='supportOptions' className='supportOptions' >
            <option value='account'> Account </option>
            <option value='forgot'> Forgot </option>
            <option value='change'> Change </option>
         </Field>
         <Field type='text' name='additional' placeholder='' />
         {props.touched.additional && props.errors.additional &&(
            <p className='errors'> {props.errors.additional} </p>
         )} 
         <button type='submit'> Send Email</button>
      </Form>
   </div>
 )
}

export default Support;