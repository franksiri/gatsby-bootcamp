import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm Frank, a part-time Medical Writer in Parlin</h2>
            <p>Need a website ? <a href="contact">Contact Me</a></p>
            <p>Need a website ? <Link to="contact">Contact Me</Link></p>
        </Layout>
    )
}

export default IndexPage