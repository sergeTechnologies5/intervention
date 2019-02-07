import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import avatar from './media/profile.png';
import DefaultPreference from 'react-native-default-preference';

export default class ProfileView extends Component {
  static navigationOptions = {
    title: 'My Profile',
    headerStyle: {
        backgroundColor: '#e81ce8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

constructor(props) {
    super(props);
    this.state = {
      name:"Name",
      email:'email'
    }
  }
   componentDidMount() {
    DefaultPreference.get('displayName').then((value)=> {
  this.setState({name:value})
})
     DefaultPreference.get('email').then((value)=> {
  this.setState({email:value})
})
   }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={avatar}/>

                <Text style={styles.name}>
                  {this.state.name}
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.textInfo}>
               Email: {this.state.email}
              </Text>
          
              <Text style={styles.textInfo}>
                Communities: 
              </Text>
              <Text style={styles.textInfo}>
         
                1. Depression
                2.Anxiety
              </Text>
            
              <Text style={styles.textInfo}>
                
              </Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1E90FF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  }
});
 