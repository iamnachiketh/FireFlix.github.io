import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
//to add ur details for register the account
import "./AddProfilescreen.css";
import PlansScreen from './PlansScreen';
import Axios  from 'axios';

function AddProfilescreen() {
          
  const [plans ,setPlans]=useState(false);
  const [emailReg,setEmailReg]=useState('');
  const [nameReg,setNameReg]=useState('');
  const [passwordReg,setPasswordReg]=useState('');
  // const [count,setcount]=useState(2);
  // const [phonenumberReg,setPhonenumberReg]=useState('');
  const register= () =>{
    
    //console.log('its register api')
    Axios.post('http://localhost:3001/register',{
    email:emailReg,
    username:nameReg,
    userpassword:passwordReg,
    // phonenumber:phonenumberReg
  },
  console.log('this is register api')
  ).then((response)=>{
           if(response.status===404 || response.status=== 401)
           alert('something is wrong !!!');
    });
  }
  // const navigate=useNavigate();
  return (
    <div>
      {plans?(
      <PlansScreen emailReg={emailReg}/>
      ):(
        
      <div className='addprofilescreen'>
      <form>
        <h1 className='heading'>SignUp</h1>
        <input type="email" placeholder='Email' onChange={(e)=>{setEmailReg(e.target.value)}}/>
        <input type="name" placeholder='Name' onChange={(e)=>{setNameReg(e.target.value)}} />
        <input type='password' placeholder='Setpassword' onChange={(e)=>{setPasswordReg(e.target.value)}} />
        {/* <input type="phone number" placeholder='phone number' onChange={(e)=>{setPhonenumberReg(e.target.value)}}/> */}
        <button type='submit' onClick={()=>{setPlans(true); register()}} >Select Plans</button>
     </form>
     </div>
      )}
    </div>
  )
}

export default AddProfilescreen
