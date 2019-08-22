import React from 'react'
import '../SignIn/signIn.css'

const SignIn = () => {
    return(
        <div className="container">
            <div className="form_container">
                <div className="form_main">
                    <div className="landing_header">
                        <div className="landing_header_content">
                            SignIn
                        </div>
                    </div>
                    <div className="form_main_content">
                        <div >
                            <label htmlFor="email">Email</label><br/>
                            <input type="text" name="email" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <div className="message">Please Login.</div>
                        <div className="button started">Sign In</div>
                        <div className="terms">
                            *Terms and Condition
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;