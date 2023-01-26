import React,{useState} from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Login from './screens/Login';
// import SignInScreen from './screens/SignInScreen'
// import PlansScreen from './screens/PlansScreen'
// import Payment from './screens/Payment'
// import AddProfilescreen from './screens/AddProfilescreen'
import { useSelector } from 'react-redux';

function App() {
  const isLoogedIn= useSelector((state)=>state.user.isLoogedIn);
  let res=false;
  console.log(isLoogedIn);
  res=isLoogedIn;
  return (
    <div className="App">
        {!res? (
          <Login/>
        ):(
        <HomeScreen/>
        ) }
    </div>
  );
}

export default App;
