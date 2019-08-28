import React from 'react'
import '../SignUp/signUp.css'

const SignUp = () => {
    return(
        <div className="container">
            <div className="form_container">
                <div className="form_main">
                    <div className="landing_header form">
                        <div className="landing_header_content">
                            SignUp
                        </div>
                    </div>
                    <div className="form_main_content">
                        <div >
                            <label htmlFor="name">Name</label><br/>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div >
                            <label htmlFor="email">Email</label><br/>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <div>
                            <label htmlFor="password">Re-Password</label><br/>
                            <input type="password" name="repassword" id="repassword"/>
                        </div>
                        <div className="message">New Account.</div>
                        <div className="button form">Sign In</div>
                        <div className="terms">
                            *Terms and Condition
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;