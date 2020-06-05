import React from 'react'
import "./dashboard-message.styles.scss"
import { motion, useAnimation } from "framer-motion"

const DashboardMessage = ({text, pos}) => {
     
    const messageVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition:{ 
                type: "tween",
                duration: 0.4,
                ease: "linear"
            }
        },
        hidden: {
            opacity: 0,   
        },
        1:{
            y:0,
            transition:{ 
                type: "tween",
                duration: 0.4,
                ease: [0.37,0.67,0.65,0.81]
            }
        },
        2:{
            y:85,
            transition:{ 
                type: "tween",
                duration: 0.4,
                ease: [0.37,0.67,0.65,0.81]
            }
        },
        3:{
            y:170,
            transition:{ 
                type: "tween",
                duration: 0.4,
                ease: [0.17,0.67,0.65,0.81]
            }
        },

    }
    
    const messageControls = useAnimation()
    messageControls.start(pos)
    

    const msgSim = ()=>{

    }

    return (
        <motion.div 
            variants={messageVariants}
            initial="1"
            animate={messageControls}
            whileTap="3"
        className="dashboard-message">

        <div className="message-icon"></div>
        <p className="message-text" >{text}</p>
        
        </motion.div>
    )
}

export default DashboardMessage

