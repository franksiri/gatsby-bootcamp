import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
            <div>
                 <h1>Hello</h1>
                 <h2>I'm Frank, a part-time Medical Writer in Parlin</h2>
                 <p>Need a website ? <a href="contact">Contact Me</a></p>
                 <p>Need a website ? <Link to="contact">Contact Me</Link></p>
            </div>
    )
}

export default IndexPage