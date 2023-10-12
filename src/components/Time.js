import './Time.css'
import React,{useState} from 'react'


function Time(){
    

    let newTime = new Date().toLocaleTimeString();
    const [cTime,setCTime] = useState(newTime);

    function OnChange(){
        let CopynewTime = new Date().toLocaleTimeString();
        setCTime(CopynewTime);
        console.log(CopynewTime);

    }


    return(
        <div className="time">
            <h1>{cTime}</h1>
            <button onClick = {OnChange}>Get Time</button>
        </div>
    )
}
export default Time;