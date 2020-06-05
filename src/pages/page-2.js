import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dashboard from "../components/dashboard/dashboard.component.jsx"
import DashboardV2 from "../components/dashboardV2/dashboardV2.component.jsx"


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <DashboardV2/>
     <h2>The only that works is the one above, refresh the page to play the animation all over again</h2>
    <Dashboard/>
    
    
  </Layout>
)

export default SecondPage
