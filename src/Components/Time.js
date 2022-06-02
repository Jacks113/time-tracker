import { useEffect, useState } from "react";



export  default function Time(props){

    const {data, time, index, icon} = props;

    const [state, setState] = useState(false);
    const [timeDataCurrent, setTimeDataCurrent] = useState("");
    const [timeDataPrevious, setTimeDataPrevious] = useState("");

    useEffect(() =>{
         if (data !== "" && data !== null && data !== undefined && data.length !== 0){
            setState(true);
        
            if (time === 1){
                setTimeDataCurrent(data[index].timeframes.daily.current);
                setTimeDataPrevious(data[index].timeframes.daily.previous);
              }
              
              else if (time === 2){
                setTimeDataCurrent(data[index].timeframes.weekly.current);
                setTimeDataPrevious(data[index].timeframes.weekly.previous);
            }
              
              else if (time === 3){
                setTimeDataCurrent(data[index].timeframes.monthly.current);
                setTimeDataPrevious(data[index].timeframes.monthly.previous);
              }

        }
    


        
    })

   

    return <div className="time-container">
                <div className="time-background">
                    <img src= {icon} />
                </div>
                
                <div className="time-user">
                    <div className="user-title">
                        {state ? <h2>{data[index].title}</h2> : <h2></h2>}
                        
                    <div className="more">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    </div>

                    

                    {state ? <h2>{timeDataCurrent} hours</h2> : <h2> hours</h2>}
                    {state ? <p>Last week: {timeDataPrevious}hours</p> : <p>Last Week:</p>}
            

                </div>
           </div>
}