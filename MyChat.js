import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
 import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import DefaultPreference from 'react-native-default-preference';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/183efb67-22e8-4a45-b7f1-81901d8a9586/token';
    const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:183efb67-22e8-4a45-b7f1-81901d8a9586';
    //const CHATKIT_ROOM_ID = '27339917';
    //const CHATKIT_USER_NAME = 'Ken';

    export default class MyChat extends React.Component {
      state = {
        messages: [],
        CHATKIT_ROOM_ID:'27408855',
         CHATKIT_USER_NAME:'Kimani',
         user:'Bot',
         roomName:'Group'
      };

static navigationOptions = {
        title: 'Group',
        headerStyle: {
            backgroundColor: '#e81ce8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
      


      componentDidMount() {
        DefaultPreference.get('displayName').then((value)=> {
          var user=value;
          this.setState({CHATKIT_USER_NAME:value}
            )}
          )
         DefaultPreference.get('roomId').then((value)=> {
          this.setState({CHATKIT_ROOM_ID:value}
            )}
          )
         DefaultPreference.get('roomname').then((value)=> {
          this.setState({roomName:value}
            )}
          )
        const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: this.state.CHATKIT_USER_NAME,
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
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
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
      messages: GiftedChat.append(previousState.messages, incomingMessage),
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
      render() {
        return <GiftedChat 
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
            user={{
            _id: this.state.CHATKIT_USER_NAME
           }}
         />;
      }
    }