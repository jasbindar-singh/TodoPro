import React from 'react'
import '../Landing/landing.css'

const Landing = () => {
    return(
        <div className="container">
            <div className="landing_container">
                <div className="landing_main">
                    <div className="landing_header">
                        <div className="landing_header_content">
                            Todo Pro!
                        </div>
                    </div>
                    <div className="landing_main_container">
                        <div className="landing_main_content">
                            Your own personalised Todo App for you day to day work!
                        </div>
                        <div className="button started">Get Started</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;