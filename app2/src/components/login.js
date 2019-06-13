import React, { Component } from 'react';
import './login.css';


class LoginComponent extends React.Component{
    render(){
        return(
            <div className={'background'}>
                    <a href="http://localhost:8080/auth/google">
                        <button >Login with google</button>
                    </a>
            </div>
            
        )
    };
}

export default LoginComponent;
