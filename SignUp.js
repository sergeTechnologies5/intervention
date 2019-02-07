
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ImageBackground,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import firebase from 'react-native-firebase';
//import Firebase from 'firebase';
import {storage, storageLoad} from './Storage';
import DefaultPreference from 'react-native-default-preference';

var config = {
    databaseURL: "https://intervention-93186.firebaseio.com/",
    projectId: "intervention-93186",
};

//Firebase.initializeApp(config);

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email   : '',
      password: '',
      isLoading:false
    }
  }
  
  handleSignUp (e){
     e.preventDefault();
     //alert("Sending");
     if (this.state.fullName===null || this.state.fullName==='') 
     {
      ToastAndroid.showWithGravity(
      'Please enter Your name',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
    );
    
    this.setState({
               isLoading: false
            });
}
    else if (this.state.email===null || this.state.email==='') 
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
        else if (this.state.password.length<8) {
          ToastAndroid.showWithGravity(
              'Password has 8 characters minimum',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            
            this.setState({
                       isLoading: false
                    });
        }
        else{
    this.setState({isLoading:true});

    fetch('http://10.0.3.155:3000/adduser/?name='+this.state.fullName,{
      method:'GET',
      headers: {
        Accept: 'application/json',
    }
  });
    
      firebase
     .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) =>  {
        
        if(user.user){
         user.user.updateProfile({
            displayName: this.state.fullName
          }).then((s)=> {
            DefaultPreference.set('displayName', this.state.fullName).then(function() {//console.warn('done')
          });
            DefaultPreference.set('userId', user.user.uid).then(function() {//console.warn('done')
    });
             DefaultPreference.set('email', user.user.email).then(function() {//console.warn('done')
    });
            storage.save({
              key: 'loginState',
              data: {
                displayName: this.state.fullName
              },
              expires: null
          });
            this.props.navigation.replace('Home');
          })
        }
    
    
    })
      .catch(error => {
        console.warn(error);
        this.setState({ errorMessage: error.message , isLoading:false})
      })
    }
  }
 
  render() {
    if(this.state.isLoading){
      var signupbutton=<ActivityIndicator size="large" color="#2296f3"/>
    }
    else{
      signupbutton=<TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.handleSignUp.bind(this)}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
    }
    return (
      <ImageBackground style={{width:'100%' ,height:'100%'}} source={require("./media/login_background_mobile.png")}>
    
      <View style={styles.container}>
      <Text style={[styles.btnText, {fontSize: 20, fontWeight:'bold', marginBottom:10, textDecorationLine:'underline'}]}>SignUp</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./media/user.png")}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./media/message.png")}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./media/key.png")}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        {signupbutton}
        <TouchableHighlight style={styles.buttonContainer} onPress={()=>this.props.navigation.replace('Login')}>
          <Text style={styles.signUpText}>or Log In</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
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
      alignItems:'center'
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
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  lginButton: {
    backgroundColor: "#FF9DFF",
  },
  signUpText: {
    color: 'white',
  }
});