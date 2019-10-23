import React, {useState} from 'react';


const Support = () => {
   const defaultSupport = {
      name: '',
      additional: ''
   }

   const [support, setSupport] = useState({defaultSupport});
   const handleChange = e => {
      setSupport({...support, [e.target.name]: e.target.value})
   }
   return(
      <form className='supportContainer'>
         <label htmlFor = 'supportName'> Name </label>
         <input 
         id= 'name' 
         name= 'name'
         type='text'
         value={support.name}
         onChange={handleChange}/>
         
         <label htmlFor = 'select'>What can we help you with?</label>
         <select className='supportDropdown'
         name= 'select'>
         <option value='Account'>Account</option>
         <option value='Forgot'>Forgot</option>
         <option value='Change'>Change</option>
         </select>
         
         
         <label htmlFor = 'supportAdditional'>Additional</label>
         <input 
         id= 'additional' 
         name= 'additional'
         type='text'
         value={support.additional}
         onChange={handleChange}/>
      </form> 
   )
}

export default Support;