import { useEffect, useState } from "react";



export  default function Time(props){

    const {data, time, index, icon} = props;

    const [state, setState] = useState(false);
    const [timeDataCurrent, setTimeDataCurrent] = useState("");
    const [timeDataPrevious, setTimeDataPrevious] = useState("");
    const current = ["32", "10", "4", "4", "5", "2"];
    const previous = ["36", "8", "7", "5", "10", "2"];

    useEffect(() =>{
        
        setTimeDataCurrent(current[index]);
        setTimeDataPrevious(previous[index]);
        
        if (data !== "" && data !== null && data !== undefined && data.length !== 0 && data[index] !== ""){
            
            
        
            if (time === 0){
                setTimeDataCurrent(data[index].timeframes.daily.current);
                setTimeDataPrevious(data[index].timeframes.daily.previous);
              }
              
              else if (time === 1){
                setTimeDataCurrent(data[index].timeframes.weekly.current);
                setTimeDataPrevious(data[index].timeframes.weekly.previous);
            }
              
              else if (time === 2){
                setTimeDataCurrent(data[index].timeframes.monthly.current);
                setTimeDataPrevious(data[index].timeframes.monthly.previous);
              }

           

              setState(true);
        }
    


        
    },[current, index, previous, data, time] )

   

    return <div className="time-container">
                <div className="time-background">
                    <img src= {icon} />
                </div>
                
                <div className="time-user">
                    <div className="user-title">
                        { state ? <h2>{data[index].title}</h2> : <h2>Title</h2> }
                        
                        <div className="more">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                </div>

                    

                    <div className="timeInfo">
                        <h2>{timeDataCurrent} hours</h2> 
                        <p>Last week: {timeDataPrevious}hours</p> 
                    </div>
            

                </div>
           </div>
}