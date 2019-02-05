import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Chat extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	static navigationOptions = {
        title: 'Chat',
        headerStyle: {
            backgroundColor: '#e81ce8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
componentDidMount(){
this.contactChatBot();
}

contactChatBot=()=>{
	
fetch('http://x:port/cakechat/api/v1/actions/get_response',{
	method: 'POST',
	headers:{
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	body:JSON.stringify({
		'contest':['Hello','hello'],
		'emotions':'joy'
	}),
}).
then((response) => response.json())
            .then((resp)=>{
            	console.warn('Success')
            	console.warn(resp)
                //this.setState({items: resp, isLoading: false})
    }).catch((error) => {
    	console.warn('Fail')
    	console.warn(error)
            });
}

	render(){
		return(
<View style={{justifyContent:'center', alignItems:'center'}}>
<Text>Welcome to Chat</Text>
</View>
			)
	}
}