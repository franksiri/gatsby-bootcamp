import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Us</h1>
            <p>Zircon LLC is a website company</p>
            <p>Need more info ? <Link to="contact">Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage