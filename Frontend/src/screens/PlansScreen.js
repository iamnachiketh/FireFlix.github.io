import React from 'react'
import "./PlansScreen.css";
//plans has to be returned form db
import {useState} from 'react';
import Payment from './Payment';
import {  useNavigate } from 'react-router-dom';
let plan=1;
function PlansScreen({emailReg}) {
   //const navigate =useNavigate();
  const [pay1,setpay1]=useState(false);
  const [pay2,setpay2]=useState(false);
  const [pay3,setpay3]=useState(false);
  //const [plan_id,setPlanid]=useState(1);
  
   let email=emailReg;
   console.log(email)
   console.log(plan)
  
   const callapi = ()=>{
    console.log('hello its in side fetch api');
     fetch('http://localhost:3001/user/subscribe', { method: 'POST',

    headers: {
      'Content-Type':
          'application/json;charset=utf-8'
  },
          body: JSON.stringify({"email":email , "plan_id":plan})
  })
          .then((response)=>{
            if(response.status === 400 || response.status === 401){
              alert('there is been a error');
            }
          })

          console.log('hello',({email:email,plan_id:plan}));
 }


  if (pay1||pay2||pay3){
    if(pay1){
      return <Payment amount={'$10.99'} />
    }
    if (pay2){
      return <Payment amount={'$18.79'} />
    }
    if(pay3){
      return <Payment amount={'$24.53'} />
    }
  }
  else{
  return (
    <div className='planScreen'>
      
      <div className='flex-container'>
        <div className='flex-box-1 flex-items'>
          <h1 className='head'>basic</h1>
          <h3 className='head1'>$10.99</h3>
          <h4 className='head2'>480p</h4>
          <button className='sub__button' onClick={()=>{setpay1(true);plan=1; callapi()}}> Subscribe</button>
          </div>
          <div className='flex-box-2 flex-items'>
           <h1 className='head'>standard</h1>
           <h3 className='head1'>$18.79</h3>
           <h4 className='head2'>1080p</h4>
           <button className='sub__button'onClick={()=>{setpay2(true);plan=2;callapi()}}>Subscribe</button>
          </div>
          <div className='flex-box-3 flex-items'>
             <h1 className='head'>premium</h1>
             <h3 className='head1'>$24.53</h3>
             <h4 className='head2'>4k+HDR</h4>
             <button className='sub__button' onClick={()=>{setpay3(true);plan=3;callapi()}}>Subscribe</button>
          </div>
      </div>
    </div>
  )
  }
}

export default PlansScreen
