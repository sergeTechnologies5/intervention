import React, {Component} from 'react';
//import Routes from './Routes';
import {Text } from 'react-native';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import Login from './Login';
import Loading from'./Loading';
import Main from './Main'; 
import SignUp from'./SignUp'; 
import Stories from'./Stories'; 
import Profile from'./Profile'; 
import Chat from'./Chat'; 
import ChatBot from'./ChatBot';
import MyChat from'./MyChat'; 
import Communities from'./Community'; 
import Depression from'./Depression';
import About from'./About\ Intervene';
import professionals from'./Professionals';
import Trauma from'./Trauma';
import Anxiety from'./Anxiety';
import Addiction from'./Addiction';

const home=createStackNavigator({
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
    ChatBot:{
        screen:ChatBot
    },
    MyChat:{
    	screen:MyChat
    },
     Community:{
        screen:Communities
    },
    professionals:{
        screen:professionals
    },
    Depression:{
        screen:Depression
    },
    Depression:{
        screen:Depression
    },
    Trauma:{
        screen:Trauma
    },
    Addiction:{
        screen:Addiction
    },
    Anxiety:{
        screen:Anxiety
    },
    About:{
        screen:About
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
    Home: { 
        screen: home
    }
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


