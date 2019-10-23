import React, {useState} from 'react';
import './Support.css';

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
      <div className='support'>
      <div className='supportContainer'>
         <h1 className= 'title'>Support</h1>
      <form >
         <div className="inputContainer">
         <p><label htmlFor = 'supportName'> Name </label></p>
         <input className='nameField'
         id= 'name' 
         name= 'name'
         type='text'
         value={support.name}
         onChange={handleChange}/>
         </div>
         <div className='inputContainer'>
         <p><label htmlFor = 'select'>What can we help you with?</label></p>
         <select className='supportDropdown'
         name= 'select'>
         <option value='Account'>Account</option>
         <option value='Forgot'>Forgot</option>
         <option value='Change'>Change</option>
         </select>
         </div>

         <div className='inputContainer'>
         <p><label htmlFor = 'supportAdditional'>Additional</label></p>
         <textarea className='lastField'
         id= 'additional' 
         name= 'additional'
         value={support.additional}
         onChange={handleChange}/>
         </div>
         <div className='button'><button>Contact Us</button></div>
      </form> 
      </div>
      </div>
   )
}

export default Support;