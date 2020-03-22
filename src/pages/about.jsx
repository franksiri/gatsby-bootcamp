import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Zircon LLC is a website company</p>
            <p>Need more info ? <Link to="contact">Contact Me</Link></p>
        </div>
    )
}

export default AboutPage