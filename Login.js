
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  ToastAndroid,
  ActivityIndicator
} from 'react-native';
import firebase from 'react-native-firebase';
import {storage, storageLoad} from './Storage';
import DefaultPreference from 'react-native-default-preference';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      isLoading:false
    }
  }

  handleLogin (e){
     e.preventDefault();
    if (this.state.email===null || this.state.email==='') 
        {
              ToastAndroid.showWithGravity(
              'Please enter Email',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            
            this.setState({
                       isLoading: false
                    });
        }
     else if (this.state.password===null || this.state.password==='') 
        {
              ToastAndroid.showWithGravity(
              'Please enter password',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            
            this.setState({
                       isLoading: false
                    });
        }
        else{
          this.setState({isLoading:true})
          firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        //console.warn("response"+response.user.displayName);
        DefaultPreference.set('displayName', response.user.displayName).then(function() {});
        DefaultPreference.set('userId', response.user.uid).then(function() {//console.warn('done')
    });
        DefaultPreference.set('email', response.user.email).then(function() {//console.warn('done')
    });
        this.props.navigation.replace( 'Home')
      })
      .catch(error => {
        console.warn(error)
        ToastAndroid.showWithGravity(
              'Wrong username or password',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        this.setState({ errorMessage: error.message , isLoading:false})
      })
    }

  }

  render() {
    if(this.state.isLoading){
var login=<ActivityIndicator size="large" color="#2296f3"/>
    }else{
login=<TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.handleLogin.bind(this)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
    }
    return (
      <ImageBackground style={{width:'100%' ,height:'100%'}} source={require("./media/login_background_mobile.png")}>
      <View style={styles.container}>
      <Text style={[styles.btnText, {fontSize: 20, fontWeight:'bold', marginBottom:10,textDecorationLine:'underline'}]}>Login</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon}source={require("./media/email.png")}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>

          <Image style={styles.inputIcon} source={require("./media/keylogin.png")}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        {login}


        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.replace('SignUp')}>
            <Text style={styles.btnText}>Don't have an account? signup</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:'90%',
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'90%',
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  }
}); 