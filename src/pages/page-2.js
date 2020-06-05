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
    <Dashboard/>
    
    
  </Layout>
)

export default SecondPage
