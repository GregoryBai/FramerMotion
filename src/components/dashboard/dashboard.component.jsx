import React, {useState} from 'react'
import "./dashboard.styles.scss"
import { motion } from "framer-motion"

import DashboardMessage from "../dashboard-message/dashboard-message.component"

 const Dashboard =  () => {

    const messageArray = [ "Check for updates" ]

    const messageSimulation =  () =>{  
        messageArray.push("Update express to 4.1.7") 
        messageArray.push("Update rails to 6.0.3" )
    }

        messageSimulation()

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="searchbar">
                    
                </div>
            </div>

            <div className="dashboard-body">
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>

              {messageArray.map((msg,idx)=>(
                    <DashboardMessage  
                    pos={`${idx+1}`}
                    text={msg}
                    key={idx} />
                ))}        
             





              
            </div>
        </div>
    )
}

export default Dashboard