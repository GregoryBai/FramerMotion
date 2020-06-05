import React from 'react'
import "./dashboardV2.styles.scss"
import { motion, useAnimation } from "framer-motion"

import DashboardMessage from "../dashboard-message/dashboard-message.component"


 const DashboardV2 =  () => {

    //Framer Motion
        const messageVariants = {
            visible: {
                opacity: 1,
                y: 0,
                transition:{ 
                    duration: 0.2,
                    ease: "linear"
                }
            },
            hidden: {
                opacity: 0, 
                y:0 
            },
            1:{
                opacity: 1,
                y:0,
                transition:{ 
                    type: "tween",
                    duration: 0.6,
                    ease: [0.37,0.67,0.65,0.81]
                }
            },
            2:{
                opacity: 1,
                y:85,
                transition:{ 
                    type: "tween",
                    duration: 0.6,
                    ease: [0.37,0.67,0.65,0.81]
                }
            },
            3:{
                opacity: 1,
                y:170,
                transition:{ 
                    type: "tween",
                    duration: 0.6,
                    ease: [0.17,0.67,0.65,0.81]
                }
            },
    
        }

        const headerIconVariants = {
            hidden: {
                opacity: 0,
                scale:0.1,
                x:-60,
                transition: {
                    type: "tween",
                    duration: 0.6,
                    
                }
            },
            visible: {
                opacity: 1,
                scale:1,
                x:0,
                transition: {
                    type: "tween",
                    duration: 0.6,
                    
                }
            }
        }

        const messageIconVariants = {
            checkedHidden: {
                opacity: 0,
                x: -60,              
            },
            checkedVisible: {
                type: "tween",
                opacity: 1,
                x: -60,
                transition: {
                    delay: 0.02,
                    duration: 0.02
                }
            },
            loading:{
                rotateZ: 360,
                transition:{
                    duration: 0.5,
                    loop: 2,
                    ease: "linear"
                }
            },
            loaded:{
                rotateZ:0,
                opacity:0,
                transition:{
                    duration: 0.2,
                    ease: "linear"
                }
            }
        }

        const messageControls1 = useAnimation()
        const messageControls2 = useAnimation()
        const messageControls3 = useAnimation()

        const headerIconControls1 = useAnimation()
        const headerIconControls2 = useAnimation()
        const headerIconControls3 = useAnimation()

        const messageIconControls1 = useAnimation()
        const messageIconControls2 = useAnimation()
        const messageIconControls3 = useAnimation()
        //messageControls.start(2)
        
    
        const msgSim = async ()=>{
            // 1 starts loading
            await messageIconControls1.start("loading")
            messageIconControls1.start("checkedVisible")
            headerIconControls1.start("hidden")
            await messageControls1.start("2")
           headerIconControls2.start("visible")
             messageControls2.start("1")
            await messageIconControls2.start("loading")
            await messageIconControls2.start("checkedVisible")
            headerIconControls2.start("hidden")
            //moving down
             messageControls1.start("3")
            messageControls2.start("2")
            await messageControls3.start("1")
            headerIconControls3.start("visible")
            await messageIconControls3.start("loading")
            //loaded
            messageIconControls3.start("checkedVisible")



        }
        msgSim()

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <motion.div 
                initial="visible"
                variants={headerIconVariants}
                animate={headerIconControls1}
                className="header-icon">
                  <svg width="26" height="24" viewBox="0 0 26 24"        fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4968 9.23913L21.6133 0.36494C21.465 -0.0916986 20.819 -0.0916986 20.6707 0.36494L17.7872 9.23913H8.21241L5.32923 0.369002C5.18095 -0.0876361 4.53501 -0.0876361 4.38672 0.369002L1.50313 9.23913L0.0485411 13.7203C-0.0161579 13.9194 -0.0161817 14.1338 0.0484776 14.3329C0.113137 14.532 0.239155 14.7055 0.40848 14.8286L13.0001 23.977L25.5915 14.8245C25.7608 14.7014 25.8869 14.5279 25.9515 14.3288C26.0162 14.1298 26.0162 13.9153 25.9515 13.7162L24.4968 9.23913Z" fill="white"/>
                    </svg>
                </motion.div>
                <motion.div 
                initial="hidden"
                variants={headerIconVariants}
                animate={headerIconControls2}
                className="header-icon">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.88587 13C9.88587 11.2947 11.2699 9.91065 12.9752 9.91065C14.6805 9.91065 16.0646 11.2947 16.0646 13C16.0646 14.7053 14.6805 16.0894 12.9752 16.0894C11.2699 16.1141 9.88587 14.7053 9.88587 13ZM12.9752 0C6.89538 0 1.80412 4.15209 0.370662 9.78707C0.370662 9.8365 0.345947 9.86122 0.345947 9.91065C0.345947 10.2567 0.61781 10.5285 0.963818 10.5285H6.20336C6.45051 10.5285 6.67294 10.3802 6.7718 10.1578C7.85925 7.80989 10.2072 6.17871 12.9752 6.17871C16.7319 6.17871 19.7965 9.24335 19.7965 13C19.7965 16.7567 16.7319 19.8213 12.9752 19.8213C10.2319 19.8213 7.85925 18.1901 6.7718 15.8422C6.67294 15.6198 6.45051 15.4715 6.20336 15.4715H0.963818C0.61781 15.4715 0.345947 15.7433 0.345947 16.0894C0.345947 16.1388 0.345947 16.1635 0.370662 16.2129C1.80412 21.8479 6.89538 26 12.9752 26C20.1672 26 25.9999 20.1673 25.9999 12.9753C25.9999 5.80798 20.1672 0 12.9752 0Z" fill="white"/>
                     </svg>
                </motion.div>
                <motion.div 
                initial="hidden"
                variants={headerIconVariants}
                animate={headerIconControls3}
                className="header-icon">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.23747 2.51937L5.12585 2.63099L9.68194 7.18708C9.03772 8.19292 8.66667 9.42821 8.66667 10.8333C8.66667 14.7396 11.5343 17.3333 15.1667 17.3333C16.524 17.3333 17.7745 16.9712 18.8085 16.3137L23.3879 20.893C21.0151 24.0269 17.2448 26 13 26C5.82143 26 0 20.3571 0 13C0 8.62477 2.0588 4.85581 5.23747 2.51937ZM7.40461 1.2328C9.0994 0.439385 10.9969 0 13 0C20.1786 0 26 5.64286 26 13C26 15.0236 25.5596 16.9174 24.7717 18.5999L20.6514 14.4796C21.2956 13.4737 21.6667 12.2385 21.6667 10.8333C21.6667 6.92708 18.799 4.33333 15.1667 4.33333C13.8094 4.33333 12.5588 4.6955 11.5248 5.35298L7.40461 1.2328ZM15.1667 14.7333C12.9873 14.7333 11.2667 13.1771 11.2667 10.8333C11.2667 8.48958 12.9873 6.93333 15.1667 6.93333C17.3461 6.93333 19.0667 8.48958 19.0667 10.8333C19.0667 13.1771 17.3461 14.7333 15.1667 14.7333Z" fill="white"/>
                </svg>
                </motion.div>
                <div className="searchbar">
                    
                </div>
            </div>

            <div className="dashboard-body">
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>

            
                <motion.div 
                variants={messageVariants}
                initial="1"
                animate={messageControls1}
                className="dashboard-message">

                 
                    <div
                    className="message-icon">
                        <motion.div 
                        variants={messageIconVariants}
                        animate={messageIconControls1}
                        className="svg-wrapper">
                    <svg
                      width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                         fill-rule="evenodd" clip-rule="evenodd" d="M2 2V4.06882C2.01203 4.09231 2.03028 4.12559 2.05714 4.16959C2.15722 4.33354 2.32692 4.56675 2.58429 4.87727C3.0958 5.49442 3.88246 6.33226 4.95909 7.39891C5.17405 7.61009 5.29926 7.89781 5.30474 8.20202L5.33192 9.70928C5.33796 10.044 5.19891 10.3569 4.96375 10.5763C3.88029 11.587 3.09277 12.3889 2.58309 12.99C2.32706 13.2919 2.16053 13.5206 2.0633 13.6831C2.03054 13.7379 2.01105 13.7763 2 13.8001V15.9995L10 16V13.8001C9.98895 13.7763 9.96946 13.7379 9.9367 13.6831C9.83947 13.5206 9.67294 13.2919 9.41691 12.99C8.90723 12.3889 8.11971 11.587 7.03625 10.5763C6.80103 10.3569 6.66196 10.0441 6.66808 9.70928L6.69526 8.20202C6.70074 7.89783 6.82593 7.61014 7.04086 7.39896L7.03874 7.40106L7.74252 8.11147L7.04672 7.39324C7.04476 7.39514 7.04281 7.39705 7.04086 7.39896C8.11752 6.33229 8.90419 5.49443 9.41571 4.87727C9.67308 4.56675 9.84278 4.33354 9.94286 4.16959C9.96972 4.12559 9.98796 4.09231 10 4.06882V4.18128C10 4.08246 10.0207 4.0247 10.0207 4.0247C10.0207 4.0247 10.0154 4.03871 10 4.06882V2H10.5C10.2627 2 10 1.80527 10 1.48V2H2ZM0 1.48C0 0.624537 0.71044 0 1.5 0H10.5C11.2896 0 12 0.624537 12 1.48V4.18128C12 4.60141 11.7905 4.98145 11.65 5.21162C11.4786 5.49238 11.2411 5.80904 10.9556 6.15355C10.4247 6.79398 9.66522 7.60518 8.68875 8.58071L8.67451 9.37089C9.6468 10.2884 10.4074 11.0656 10.9423 11.6964C11.2332 12.0395 11.4769 12.3619 11.6531 12.6565C11.808 12.9155 12 13.2949 12 13.7148V16.52C12 17.3755 11.2896 18 10.5 18H1.5C0.71044 18 0 17.3755 0 16.52V13.7148C0 13.2949 0.19198 12.9155 0.346896 12.6565C0.523134 12.3619 0.766809 12.0395 1.05771 11.6964C1.59264 11.0656 2.3532 10.2884 3.32549 9.37089L3.31125 8.58071C2.33478 7.60518 1.57526 6.79398 1.04445 6.15355C0.758909 5.80904 0.521425 5.49238 0.350046 5.21162C0.209547 4.98145 0 4.60141 0 4.18128V1.48Z" fill="white"/>
                    </svg>
                    </motion.div>
                    </div>
                
                    
                        <motion.div 
                        variants={messageIconVariants}
                        initial="checkedHidden"
                        animate={messageIconControls1}
                        className="message-icon completed">
                            <svg  width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2797 0.306358L14.7203 1.69364L5.33332 11.4417L0.279663 6.19364L1.7203 4.80636L5.33332 8.55833L13.2797 0.306358Z" fill="white"/>
                    </svg>
                        </motion.div>
                        
                    <p className="message-text" >Check for updates</p>

                </motion.div>

                <motion.div 
                variants={messageVariants}
                initial="hidden"
                animate={messageControls2}
                 whileTap="3"
                className="dashboard-message">

                    <div
                    className="message-icon">
                        <motion.div 
                        variants={messageIconVariants}
                        animate={messageIconControls2}
                        className="svg-wrapper">
                    <svg
                      width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                         fill-rule="evenodd" clip-rule="evenodd" d="M2 2V4.06882C2.01203 4.09231 2.03028 4.12559 2.05714 4.16959C2.15722 4.33354 2.32692 4.56675 2.58429 4.87727C3.0958 5.49442 3.88246 6.33226 4.95909 7.39891C5.17405 7.61009 5.29926 7.89781 5.30474 8.20202L5.33192 9.70928C5.33796 10.044 5.19891 10.3569 4.96375 10.5763C3.88029 11.587 3.09277 12.3889 2.58309 12.99C2.32706 13.2919 2.16053 13.5206 2.0633 13.6831C2.03054 13.7379 2.01105 13.7763 2 13.8001V15.9995L10 16V13.8001C9.98895 13.7763 9.96946 13.7379 9.9367 13.6831C9.83947 13.5206 9.67294 13.2919 9.41691 12.99C8.90723 12.3889 8.11971 11.587 7.03625 10.5763C6.80103 10.3569 6.66196 10.0441 6.66808 9.70928L6.69526 8.20202C6.70074 7.89783 6.82593 7.61014 7.04086 7.39896L7.03874 7.40106L7.74252 8.11147L7.04672 7.39324C7.04476 7.39514 7.04281 7.39705 7.04086 7.39896C8.11752 6.33229 8.90419 5.49443 9.41571 4.87727C9.67308 4.56675 9.84278 4.33354 9.94286 4.16959C9.96972 4.12559 9.98796 4.09231 10 4.06882V4.18128C10 4.08246 10.0207 4.0247 10.0207 4.0247C10.0207 4.0247 10.0154 4.03871 10 4.06882V2H10.5C10.2627 2 10 1.80527 10 1.48V2H2ZM0 1.48C0 0.624537 0.71044 0 1.5 0H10.5C11.2896 0 12 0.624537 12 1.48V4.18128C12 4.60141 11.7905 4.98145 11.65 5.21162C11.4786 5.49238 11.2411 5.80904 10.9556 6.15355C10.4247 6.79398 9.66522 7.60518 8.68875 8.58071L8.67451 9.37089C9.6468 10.2884 10.4074 11.0656 10.9423 11.6964C11.2332 12.0395 11.4769 12.3619 11.6531 12.6565C11.808 12.9155 12 13.2949 12 13.7148V16.52C12 17.3755 11.2896 18 10.5 18H1.5C0.71044 18 0 17.3755 0 16.52V13.7148C0 13.2949 0.19198 12.9155 0.346896 12.6565C0.523134 12.3619 0.766809 12.0395 1.05771 11.6964C1.59264 11.0656 2.3532 10.2884 3.32549 9.37089L3.31125 8.58071C2.33478 7.60518 1.57526 6.79398 1.04445 6.15355C0.758909 5.80904 0.521425 5.49238 0.350046 5.21162C0.209547 4.98145 0 4.60141 0 4.18128V1.48Z" fill="white"/>
                    </svg>
                    </motion.div>
                    </div>
                
                    
                        <motion.div 
                        variants={messageIconVariants}
                        initial="checkedHidden"
                        animate={messageIconControls2}
                        className="message-icon completed">
                            <svg  width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2797 0.306358L14.7203 1.69364L5.33332 11.4417L0.279663 6.19364L1.7203 4.80636L5.33332 8.55833L13.2797 0.306358Z" fill="white"/>
                    </svg>
                        </motion.div>
                    <p className="message-text" >Update express to 4.1.7</  p>
                    
                        </motion.div>

                    <motion.div 
                     variants={messageVariants}
                     initial="hidden"
                    animate={messageControls3}
                     whileTap="3"
                    className="dashboard-message">

                    <div
                    className="message-icon">
                        <motion.div 
                        variants={messageIconVariants}
                        animate={messageIconControls3}
                        className="svg-wrapper">
                    <svg
                      width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                         fill-rule="evenodd" clip-rule="evenodd" d="M2 2V4.06882C2.01203 4.09231 2.03028 4.12559 2.05714 4.16959C2.15722 4.33354 2.32692 4.56675 2.58429 4.87727C3.0958 5.49442 3.88246 6.33226 4.95909 7.39891C5.17405 7.61009 5.29926 7.89781 5.30474 8.20202L5.33192 9.70928C5.33796 10.044 5.19891 10.3569 4.96375 10.5763C3.88029 11.587 3.09277 12.3889 2.58309 12.99C2.32706 13.2919 2.16053 13.5206 2.0633 13.6831C2.03054 13.7379 2.01105 13.7763 2 13.8001V15.9995L10 16V13.8001C9.98895 13.7763 9.96946 13.7379 9.9367 13.6831C9.83947 13.5206 9.67294 13.2919 9.41691 12.99C8.90723 12.3889 8.11971 11.587 7.03625 10.5763C6.80103 10.3569 6.66196 10.0441 6.66808 9.70928L6.69526 8.20202C6.70074 7.89783 6.82593 7.61014 7.04086 7.39896L7.03874 7.40106L7.74252 8.11147L7.04672 7.39324C7.04476 7.39514 7.04281 7.39705 7.04086 7.39896C8.11752 6.33229 8.90419 5.49443 9.41571 4.87727C9.67308 4.56675 9.84278 4.33354 9.94286 4.16959C9.96972 4.12559 9.98796 4.09231 10 4.06882V4.18128C10 4.08246 10.0207 4.0247 10.0207 4.0247C10.0207 4.0247 10.0154 4.03871 10 4.06882V2H10.5C10.2627 2 10 1.80527 10 1.48V2H2ZM0 1.48C0 0.624537 0.71044 0 1.5 0H10.5C11.2896 0 12 0.624537 12 1.48V4.18128C12 4.60141 11.7905 4.98145 11.65 5.21162C11.4786 5.49238 11.2411 5.80904 10.9556 6.15355C10.4247 6.79398 9.66522 7.60518 8.68875 8.58071L8.67451 9.37089C9.6468 10.2884 10.4074 11.0656 10.9423 11.6964C11.2332 12.0395 11.4769 12.3619 11.6531 12.6565C11.808 12.9155 12 13.2949 12 13.7148V16.52C12 17.3755 11.2896 18 10.5 18H1.5C0.71044 18 0 17.3755 0 16.52V13.7148C0 13.2949 0.19198 12.9155 0.346896 12.6565C0.523134 12.3619 0.766809 12.0395 1.05771 11.6964C1.59264 11.0656 2.3532 10.2884 3.32549 9.37089L3.31125 8.58071C2.33478 7.60518 1.57526 6.79398 1.04445 6.15355C0.758909 5.80904 0.521425 5.49238 0.350046 5.21162C0.209547 4.98145 0 4.60141 0 4.18128V1.48Z" fill="white"/>
                    </svg>
                    </motion.div>
                    </div>
                        <motion.div 
                        variants={messageIconVariants}
                        initial="checkedHidden"
                        animate={messageIconControls3}
                        className="message-icon completed">
                            <svg  width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2797 0.306358L14.7203 1.69364L5.33332 11.4417L0.279663 6.19364L1.7203 4.80636L5.33332 8.55833L13.2797 0.306358Z" fill="white"/>
                    </svg>
                        </motion.div>
                    <p className="message-text" >Update rails to 6.0.3</p>
                    
                </motion.div>

            </div>
        </div>
    )
}

export default DashboardV2