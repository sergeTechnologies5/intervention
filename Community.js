import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import depressionImage from './media/depression.png';
import traumaImage from './media/trauma.png';
import addictionImage from './media/drugs.png';
import anxietyImage from './media/anxiety.jpg';
import ptsdImage from './media/ptsd.png';
import bipolarImage from './media/bipolar.jpg';


const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/183efb67-22e8-4a45-b7f1-81901d8a9586/token';
    const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:183efb67-22e8-4a45-b7f1-81901d8a9586';
    
export default class Community extends Component{
	constructor(props){
		super(props);
		this.state={rooms:[],
			CHATKIT_USER_NAME:'Bot',
			currentUser:'Bot',
			user:'Kimani',
			isLoading:false}
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
		 //this.getGroup(value);
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
JoinRoom(roomname,roomId){
	/* Alert.alert(roomname+" group", 'Do you want to join this group',
        [
            {text: 'Cancel', style: 'cancel'},
            {text: 'OK', onPress: this.logout},
          ],
          { cancelable: false }
        )
      }*/
      DefaultPreference.set('roomname', roomname).then(function() {//console.warn('done: roomname'+ roomname)
  });
      DefaultPreference.set('roomId', roomId).then(function() {//console.warn('done:roomId'+ roomId)
  });
      this.props.navigation.navigate('MyChat');
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
	const myRooms=[{
    	'name':'Depression',
    	'id':'27376626',
    	'createdByUserId':'Ken',
    	'createdAt':'Wed, Feb 6, 2019',
    	'image':depressionImage
    },{
    	'name':'Anxiety',
    	'id':'27408693',
    	'createdByUserId':'Peter',
    	'createdAt':'Wed, Feb 6, 2019',
    	'image':anxietyImage

    },{
    	'name':'Bipolar Disorder',
    	'id':'27408802',
    	'createdByUserId':'Otieno',
    	'createdAt':'Wed, Feb 6, 2019',
    	'image':bipolarImage
    },
    {
    	'name':'Post Traumatic Stress Disorder',
    	'id':'27408566',
    	'createdByUserId':'Dommy',
    	'createdAt':'Wed, Feb 6, 2019',
    	'image':ptsdImage
    },{
    	'name':'Addiction',
    	'id':'27408855',
    	'createdByUserId':'Ken',
    	'createdAt':'Wed, Feb 6, 2019',
    	'image':addictionImage
    }
    ];
	if(this.state.isLoading){
		var data=<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#2296f3"/>
        </View>
	}
	else {
		data=
		<View >
		
<ScrollView style={{marginTop:10,marginBottom:10}}>
            {
            	myRooms.map((data) => {
                return (
                <TouchableHighlight style={{margin:5,}} onPress={this.JoinRoom.bind(this,data.name,data.id)} key={data.name}>
                <View style={{backgroundColor:'#fff',padding:10, flex:1,flexDirection:'row'}} >
                <Image source={data.image} style={{width:50, height:50,marginRight:10}}/>
               <View>
                <Text style={{fontWeight:'bold', fontSize:18,color:'#000'}}>{data.name}</Text>
                <Text style={{}} >Created By: {data.createdByUserId}</Text>
                <Text style={{}} >Created At: {data.createdAt}</Text>
                <Text style={{fontStyle:'italic',color:'#00f'}}>(tap to join)</Text>
               </View>
            </View>
            </TouchableHighlight>
            )
                                 })
                             }
                             </ScrollView>
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