import './App.css';
import Time from './Components/Time';
import UserInfo from './Components/UserInfo';
import { getData, setEvent } from './Services/fetchData';

import React,{useState,useEffect} from 'react';

function App() {

  const [userData, setUserData] = useState([]);
  const [timeframeIndex, setTimeframeIndex] = useState(3);
 
 
 
  

  useEffect(() =>{
    getData(setUserData);
  })

  

    return (
    
      <div className="App">
  
        <UserInfo data = {userData} timeIndex = {timeframeIndex} setTimeIndex = {setTimeframeIndex}/>

        <Time activity = "Work" time = {timeframeIndex} data = {userData} index = {0} icon = "./images/icon-work.svg"/>

        <Time activity = "Play" time = {timeframeIndex} data={userData}  index = {1} icon = "./images/icon-play.svg"/>

        <Time activity = "Study" time = {timeframeIndex} data={userData} index = {2} icon = "./images/icon-study.svg"/>
        
        <Time activity = "Exercise" time = {timeframeIndex} data={userData} index = {3} icon = "./images/icon-exercise.svg"/>

        <Time activity = "Social" time = {timeframeIndex} data={userData} index = {4} icon = "./images/icon-social.svg"/>

        <Time activity = "Self care" time = {timeframeIndex} data={userData} index = {5} icon = "./images/icon-self-care.svg"/>
      
      </div> 
    );
}

export default App;
