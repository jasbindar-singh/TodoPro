import React from 'react'
import '../Navbar/navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav_heading">
                <div className="nav_heading_content">
                    <a href="/">Todo Pro</a>
                </div>
            </div>
            <div className="nav_link_container">
                <ul className="nav_link_list">
                    <a href="/home"><li className="nav_link">Home</li></a>
                    <a href="/signin"><li className="nav_link">SignIn</li></a>
                    <a href="/signup"><li className="nav_link">SignUp</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;