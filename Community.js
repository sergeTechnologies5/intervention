import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
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
import DefaultPreference from 'react-native-default-preference';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'


const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/183efb67-22e8-4a45-b7f1-81901d8a9586/token';
    const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:183efb67-22e8-4a45-b7f1-81901d8a9586';
export default class Community extends Component{
	constructor(props){
		super(props);
		this.state={rooms:[],
			CHATKIT_USER_NAME:'Bot',
			currentUser:'Bot',
			user:'Kimani',
			isLoading:true}
	}
	static navigationOptions = {
        title: 'Communities',
        headerStyle: {
            backgroundColor: '#e81ce8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
componentDidMount(){

	DefaultPreference.get('displayName').then((value)=> {
		//this.setState({});
		//console.warn(value)
		 this.setState({user:value})
		 this.getGroup(value);
	});
//this.contact;ChatBot();
/*const chatManager = new ChatManager({
  instanceLocator: 'v1:us1:183efb67-22e8-4a45-b7f1-81901d8a9586',
  userId: value,
  tokenProvider: new TokenProvider({ url: 'your.auth.url' })
})*/
}

getGroup(user){
	 const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId:user,
      tokenProvider: tokenProvider,
      connectionTimeout: 20000,
      logger: {
    verbose: console.log,
    debug: console.log,
    info: console.log,
    warn: console.log,
    error: console.log,
  }
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.getJoinableRooms()
  .then(rooms => {
  	this.setState({rooms:rooms, currentUser:currentUser, isLoading:false})
   console.warn(rooms)
  })
  .catch(err => {
    console.log(`Error getting joinable rooms: ${err}`)
  })
    })
	
	
}
JoinRoom(currentUser,someRoomID){
	currentUser.joinRoom({ roomId: someRoomID })
  .then(room => {
  	alert("Successfully joined Group");
  })
  .catch(err => {
    console.log(`Error joining room ${someRoomID}: ${err}`)
  })
}
renderRooms(data){
            var infor=<View style={{backgroundColor:'#808080'}} key={data.name}>
                <Text style={{fontWeight:'bold', fontSize:18}}>Croup: {data.name}</Text>
                <Text style={{}} >Created By: {data.createdByUserId}</Text>
                <Text style={{}} >Created At: {data.createdAt}</Text>
            </View>
        return (
            <View key={data.name}>
                {infor}
            </View>
        );
    }
render(){
	if(this.state.isLoading){
		var data=<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#2296f3"/>
        </View>
	}
	else {
		data=
		<View style={{padding:10,margin:10}}>
            {
            	this.state.rooms.map((data) => {
                return (
                <TouchableOpacity onPress={()=>alert("data.name")} key={data.name}>
                <View style={{backgroundColor:'#fff'}} >
                <Text style={{fontWeight:'bold', fontSize:18}}>Croup: {data.name}</Text>
                <Text style={{}} >Created By: {data.createdByUserId}</Text>
                <Text style={{}} >Created At: {data.createdAt}</Text>
            </View>
            </TouchableOpacity>
            )
                                 })
                             }
        </View>;
	}

	return(
		<View style={{flex:1}}>
		{data}
		</View>
		)
}
}

const styles=StyleSheet.create(
{
	textStyle:{
        flex: 1,
         alignSelf: 'stretch',
         borderLeftColor: '#808080',
         borderLeftWidth:1,
         padding: 4
      }
})