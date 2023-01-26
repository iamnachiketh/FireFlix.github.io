import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import './Payment.css';
import { userAction } from "../features/userSlice";
function Payment(props) {

  const[type,setType]=useState('');
  const dispatch = useDispatch();
const Setlogin=()=>{
  dispatch(userAction.login());
}

 const callAPI= async ()=>{
  console.log('this is payment api',type,props.email);
   await fetch('http://localhost:3001/user/payment', { method: 'POST',
    headers: {
      'Content-Type':
          'application/json;charset=utf-8'
  },
          body: JSON.stringify({"email":props.email,"payment_type": type})
  })
          .then(response=>response) 

  }
  return (
    <div className='payment__screen'>
      <h1>{props.amount}</h1>
      <h3>Select Payment</h3>
      <ul className='list__styling'>
      <form>
      <li><input type='radio' name='payments' value="Debit card" onChange={(e)=>{setType(e.target.value)} } />Debit Card </li>
      <li> <input type='radio' name='payments' value="credit card" onChange={(e)=>{setType(e.target.value)} } />Credit Card </li>
      <li>  <input type='radio' name='payments' value="Gpay" onChange={(e)=>{setType(e.target.value)} }/>Gpay </li>
      <li> <input type='radio' name='payments' value="Phonepay" onChange={(e)=>{setType(e.target.value)}}/>Phonepay </li>
      </form>
      </ul>
      <button   className='payment__button' onClick={()=>{Setlogin(); callAPI()}}>Finish</button>
    </div>
  )
}

export default Payment
