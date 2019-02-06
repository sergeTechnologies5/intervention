import React, {Component} from 'react';
//import Routes from './Routes';
import {Text } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import Login from './Login';
import Loading from'./Loading';
import Main from './Main'; 
import SignUp from'./SignUp'; 
import Stories from'./Stories'; 
import Profile from'./Profile'; 
import Chat from'./Chat'; 
import MyChat from'./MyChat'; 
import Communities from'./Community'; 
//import chatClient from'./ChatClient';
const Home=createStackNavigator({
   Main:{
    	screen:Main
    },
    Stories:{
    	screen:Stories
    },
    Profile:{
    	screen:Profile
    },
    Chat:{
    	screen:Chat
    },
    MyChat:{
    	screen:MyChat
    },
     Communities:{
        screen:Communities
    },
},
    {
    	initialRouteName: 'Main',
    }

);
const Routes=createStackNavigator({
    Login:{
    	screen:Login
    },
    Loading:{
    	screen:Loading
    },
    SignUp:{
    	screen:SignUp
    },
    Home:{
    	screen:Home
    },
},
    {
    	initialRouteName: 'Loading',
    	headerMode:'none'
    }

);

export default class App extends Component{
	render(){
		return(
<Routes/>
			)
	}
}
