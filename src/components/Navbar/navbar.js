import React from 'react'
import '../Navbar/navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav_heading">
                <div className="nav_heading_content">
                    Todo Pro
                </div>
            </div>
            <div className="nav_link_container">
                <ul className="nav_link_list">
                    <li className="nav_link"><a href="/home">Home</a></li>
                    <li className="nav_link"><a href="/login">Login</a></li>
                    <li className="nav_link"><a href="/signup">SignUp</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;