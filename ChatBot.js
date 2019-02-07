import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  ActivityIndicator
} from 'react-native';
import firebase from 'react-native-firebase';
import { GiftedChat ,Bubble} from "react-native-gifted-chat";

export default class Chat extends Component{
	constructor(props){
		super(props);
    this.state={
      isLoading:true,
      messages: [
        {
          _id: 1,
          text: 'Hello. This is InterveneBot.How can I help?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'InterveneBot',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    }
		}
	static navigationOptions = {
        title: 'InterveneBot',
        headerStyle: {
            backgroundColor: '#e81ce8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
componentDidMount(){
//this.contactChatBot();
}

contactChatBot=text=>{
	//alert("Contacting bot...");
fetch('http://10.0.3.103:8080/cakechat_api/v1/actions/get_response',{
	method: 'POST',
	headers:{
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	body:JSON.stringify({
		'context':['Hello',text],
		'emotion':'joy'
	}),
}).
then((response) => response.json())
            .then((resp)=>{
            	//console.warn(resp.response)
const incomingMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: resp.response,
      createdAt: new Date(),
      user: {
        _id: 'InterveneBot',
        name: 'InterveneBot',
        avatar:
          'https://placeimg.com/140/140/any',
      },
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage, ),isLoading:false
    }));
    }).catch((error) => {
    	console.warn('Fail')
    	console.warn(error)
      this.setState({isLoading:false})

            });
}
renderBubble(props) {
    if (props.isSameUser(props.currentMessage, props.previousMessage) && props.isSameDay(props.currentMessage, props.previousMessage)) {
      return (
        <Bubble
          {...props}
        />
      );
    }
    return (
      <View>
        <Text style={{color:'#00f'}}>{props.currentMessage.user.name}</Text>
        <Bubble
          {...props}
        />
      </View>
    );
  }


sendData=()=>{
firebase.database().ref("Test").push({
	"Hey":"Hello there"
}).then((resp)=>{
	//console.warn(resp.response)
})
}
onSend(messages = []) {
  const mymessage=messages.map((text)=>{
return text.text
  })

 // console.warn(mymessage[0]);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    this.contactChatBot(mymessage[0]);
  }

	render(){
    if(this.state.isLoading){
      var button=<View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator />
      </View>
    }
    else{
      button=<View>
      <Text>InterveneBot</Text>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      </View>

    }
		//console.warn(this.state.name)
		return(
<GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={this.renderBubble}
      />
			)
	}
}