import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import {storage, storageLoad} from './Storage';
import DefaultPreference from 'react-native-default-preference';

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
    if(user){
      var displayName=user.displayName;
      var uid=user.uid;
      DefaultPreference.set('displayName', displayName).then(function() {//console.warn('done')
    });
        DefaultPreference.set('userId', uid).then(function() {//console.warn('done')
    });
         DefaultPreference.set('email', user.email).then(function() {//console.warn('done')
    });
      storage.save({
        key: 'loginState',
        data: {
          displayName: displayName
        },
        expires: null
    });
    this.props.navigation.replace( 'Home')
    }
    else{
      this.props.navigation.replace( 'Login')
    }
      
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})