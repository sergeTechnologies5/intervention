import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './Login';
import Main from './Main'; 
import SignUp from'./SignUp'; 
import Stories from'./Stories'; 
import Profile from'./Profile'; 
export default class Routes extends React.Component<props>{

    render(){
        return(
            <Router navigationBarStyle={{ backgroundColor: '#e81ce8' }}>
                <Scene key='root'>
                    <Scene key = "login" component = {Login} title="Login"  initial = {true} hideNavBar={true}/>
                    <Scene key = "main" component = {Main}  title = "Home" />
                    <Scene key = "signup" component = {SignUp}  title = "SignUp" hideNavBar={true}/>
                    <Scene key = "stories" component = {Stories}  title = "Shared Stories" />
                    <Scene key = "profile" component = {Profile}  title = "My Profile" />
                </Scene>
            </Router>
        );
    }
}