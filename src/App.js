import { Route, Switch,Link,Redirect } from 'react-router-dom'
import RegisterFreelancerContainer from './containers/RegisterFreelancerContainer'
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase/firebase"
import LoginContainer from './containers/loginContainer'
import { AuthProvider } from '../auth/auth'
import { Layout, Menu, Typography } from 'antd';
import UserContainer from './containers/userContainer';
import AdminContainer from './containers/adminContainer';


const { Header, Content, Footer } = Layout;
const {Title} =Typography


function App() {

  return (

    <AuthProvider>
    
    <Switch>
        <Route exact path='/register' component={RegisterFreelancerContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/frelance' component={UserContainer} />
        <Route exact path='/admin' component={AdminContainer} />
        <Route path="/" component={RegisterFreelancerContainer}/>
        <Redirect from="/" to="/" />
    </Switch>
        
    </AuthProvider>

  )
}

export default App;
