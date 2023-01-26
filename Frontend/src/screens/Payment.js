import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import './Payment.css';
import { userAction } from "../features/userSlice";
function Payment(props) {

  // const[radio1,setradio1]=useState(false);
  // const[radio2,setradio2]=useState(false);
  // const[radio3,setradio3]=useState(false);
  // const[radio4,setradio4]=useState(false);
  //const[type,setType]=useState('');
  const dispatch =useDispatch();
const Setlogin=()=>{
  dispatch(userAction.login());
}

 // const callAPI= async ()=>{
    // if(radio1){setType('debit card')}
    // if(radio2){setType('credit card')}
    // if(radio3){setType('Gpay')}
    // if(radio4){setType('PhonePay')}
  //  await fetch('http://localhost:3001/user/payment', { method: 'POST',
  //   headers: {
  //     'Content-Type':
  //         'application/json;charset=utf-8'
  // },
  //         body: JSON.stringify({"email":props.email})
  // })
  //         .then(response=>response) 

  // }
  return (
    <div className='payment__screen'>
      <h1>{props.amount}</h1>
      <h3>Select Payment</h3>
      <ul className='list__styling'>
      <form>
      <li><input type='radio' name='payments' value="Debit card" />Debit Card </li>
      <li> <input type='radio' name='payments' value="credit card" />Credit Card </li>
      <li>  <input type='radio' name='payments' value="Gpay" />Gpay </li>
      <li> <input type='radio' name='payments' value="Phonepay" />Phonepay </li>
      </form>
      </ul>
      <button   className='payment__button' onClick={Setlogin}>Finish</button>
    </div>
  )
}

export default Payment
