import React, { Component } from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import LoginComponent from './login';
import BuzzComponent from './buzz';
import ComplaintComponent from './Complaints';
import ResolveComponent from './Resolve';

class AppRouterComponent extends Component{

    constructor(props){
        super(props);
        console.log(props);
        if(localStorage.getItem('Token') && props.location.pathname === '/'){
            props.history.push('/dashboard')

         }else if(props.location.pathname === '/'){
         props.history.push('/login');
        }
    }
        render(){
            return (
                <Switch>
                <Route path='/token' render={(props)=><TokenComponent {...props}/>}/>

                <PrivateRoute path={'/dashboard'} component={BuzzComponent}/>
                <PrivateRoute path={'/complaints'} component={ComplaintComponent}/>
                <PrivateRoute path={'/resolve'} component={ResolveComponent}/>
                <Route path={'/login'} component={LoginComponent}/>



                </Switch>
            )
        }
}

const TokenComponent = (props) => {
    console.log(JSON.stringify(props));
    const token = props.history.location.search.split('?q=')[1];
    localStorage.setItem('Token', token);
    props.history.push('/dashboard');
    return <React.Fragment/>
}


const PrivateRoute = ({component: Component, ...rest}) => {
    console.log(Component);
    if (localStorage.getItem('Token')) {
        return <Route exact {...rest} render={(props) => (
            <div className={'actual-body'}>
                <div className={'container'}>
                   
                    <Component {...props}/>
                </div>
            </div>)}/>
    } else {
        console.log("Invalid login");
        return <Route {...rest} render={(props) => <Redirect {...props} to={'/login'}/>
        }/>
    }
};


export default AppRouterComponent;