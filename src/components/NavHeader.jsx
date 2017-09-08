import React from 'react'
import {Link} from 'react-router-dom'

const NavHeader = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bookmarks">Bookmarks</Link></li>
            <li><Link to="/old-match">Old Match, to be
                redirected</Link></li>
            <li><Link to="/will-not-match">Will Not
                Match</Link>
            </li>
        </ul>
        <hr/>
    </div>
)

export default NavHeader