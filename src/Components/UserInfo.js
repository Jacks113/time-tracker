import { useState } from "react"

export  default function UserInfo(props){

    const {setTimeIndex, timeIndex, data} = props;

    const changeIndex = (index) =>{
       var timePeriod = document.getElementsByClassName("periods");

       var arr = [].slice.call(timePeriod)

       arr.forEach(element => {
           if(element == arr[index]){
            element.classList.add("selected");
            element.classList.remove("not-selected");
           }

           else{
                element.classList.add("not-selected");
                element.classList.remove("selected");
           }
       });

       setTimeIndex(index);
    }

    return <div className="user-container">
                <div className = "userInfo">
                    <figure className = "title-user">
                        <img src ="./images/image-jeremy.png" />
                        <div className="username">
                            <h2>Report for</h2>
                            {(data !== "" && data !== null && data !== undefined && data.length !== 0) ? 
                            <h1>{data[6].userName}</h1>
                            :<h1></h1>}
                        </div>
                    </figure>
                </div>

                <div className="period">
                 
                    <p id="daily" onClick={() => {changeIndex(0)} } className="not-selected periods">Daily</p>
                    <p id="weekly" onClick={() => {changeIndex(1)} } className="selected periods">Weekly</p>
                    <p id="monthly" onClick={() => {changeIndex(2)} } className="not-selected periods">Monthly</p>
                </div>
           </div>
  
}