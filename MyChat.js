import React from "react";
import { GiftedChat ,Bubble} from "react-native-gifted-chat";
 import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import DefaultPreference from 'react-native-default-preference';
import {ActivityIndicator,View,Text} from 'react-native';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/183efb67-22e8-4a45-b7f1-81901d8a9586/token';
    const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:183efb67-22e8-4a45-b7f1-81901d8a9586';
    //const CHATKIT_ROOM_ID = '27339917';
    //const CHATKIT_USER_NAME = 'Ken';

    export default class MyChat extends React.Component {
      state = {
        messages: [],
         CHATKIT_USER_NAME:'Kimani',
         user:'Bot',
         roomName:'Group',
         isLoading:true
      };

static navigationOptions = ({ navigation }) => {
    const params=navigation.state.params || {};
    return {
        title: params.title,
        headerStyle: {
            backgroundColor: '#e81ce8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
};
      


      componentDidMount() {
        var room='';
        DefaultPreference.get('roomId').then((value)=> {
       room=value;
       this.setState({CHATKIT_ROOM_ID:value})
DefaultPreference.get('roomname').then((value)=> {
  this.props.navigation.setParams({
        title: value+" Group"
      })
          
DefaultPreference.get('displayName').then((value)=> {
     
          
        this.initChatKit(value,room);
        })
        
      })
   })
      }
onReceive = data => {
    const { id, senderId, text, createdAt } = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA',
      },
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage),isLoading: false
    }));
  };
  onSend = (messages = []) => {
    messages.forEach(message => {
      this.currentUser
        .sendMessage({
          text: message.text,
          roomId: this.state.CHATKIT_ROOM_ID,
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
  };
  initChatKit(user,room){
    //console.warn(user+" "+room)
    var name=user;
    var roomid=room;
this.setState({CHATKIT_USER_NAME:name})
    //console.warn("Room: "+roomid);
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: name,
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
        this.currentUser.subscribeToRoom({
          roomId: this.state.CHATKIT_ROOM_ID,
          hooks: {
            onMessage: message => this.onReceive(message),
            onUserStartedTyping: user => {
  console.warn(`User ${user.name} started typing`)
},
onUserStoppedTyping: user => {
  console.warn(`User ${user.name} stopped typing`)
}
          },
        });
      })
      .catch(err => {
        console.log(err);
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

      render() {
        if(this.state.isLoading){
var data=<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#2296f3"/>
        </View>;
        }else{
          data=<GiftedChat 
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
              user={{
              _id: this.state.CHATKIT_USER_NAME
             }}
             renderBubble={this.renderBubble}
             
           />
        }
        return(
<View style={{flex:1}}>
{data}
</View>
        )
      }
    }

