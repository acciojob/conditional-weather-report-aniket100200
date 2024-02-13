import React from "react";
import './../styles/App.css';
let state=[
    {
        temprature:25,
        conditions: "Sunny"
    },
    {
        temprature:25,
        conditions: "Cloudy"
    },
    {
        temprature:15,
        conditions: "Cold"
    },
    {
        temprature:15,
        conditions: "Rainy"
    },
    {
        temprature:40,
        conditions: "Hot"
    },
]

const App = () => {
  return (
    <div>
        {
            state.map(item=><>
                    {/* I'll use shock circuit.. */}
                  {item.temprature>20 ? <p style={{color:"red"}}>{item.temprature} {item.conditions}</p>:<p style={{color:"blue"}}>{item.temprature} {item.conditions}</p>}
            </>)
        }
      
    </div>
  )
}

export default App
