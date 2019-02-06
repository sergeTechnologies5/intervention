import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'react-native-firebase';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import logoutImage from './media/logout.png';
import home from './media/home.png';
import {storage, storageLoad} from './Storage';
import DefaultPreference from 'react-native-default-preference';

export default class HomeMenuView extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'Test'
    }
  }
  
  static navigationOptions = ({ navigation }) => {
    const params=navigation.state.params || {};
    return {
        title: 'Home',
        headerRight: params.headerRight,
        headerLeft: params.headerLeft,
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
      this.props.navigation.setParams({
          headerRight: (<TouchableOpacity onPress={this.handleLogOut}>
      <Image
      source={logoutImage}
      style={{width: 30, height:30, marginRight: 10}}
      />
  
  </TouchableOpacity>
      ),
      headerLeft:(<Image
        source={home}
        style={{width: 30, height:30, marginLeft: 10}}
        />)
  });
  storageLoad('loginState', 'displayName').then((name)=>{
    //console.warn(name)
        this.setState({
            name: name,
        });
    
}, this);
//DefaultPreference.get('displayName').then(function(value) {//console.warn(value)})

  }

    handleLogOut=()=>{
      
      Alert.alert("Log Out", 'Are you sure you want to logout?',
        [
            {text: 'Cancel', style: 'cancel'},
            {text: 'OK', onPress: this.logout},
          ],
          { cancelable: false }
        )
      }
      
      logout=()=>{
        firebase.auth().signOut();
        //this.props.navigation.replace('Login');
        BackHandler.exitApp();
    }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:10}} >
    <Text style={{color:'#2296f3',fontWeight:'bold', fontSize:16, textDecorationLine:'underline'}}>Knowledge Base</Text>
    </View>
        <View style={{flexDirection:'row'}}>
        <Card style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/depression.png")}/>
          <Text style={styles.info}>Depression</Text>
        </Card>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/ocd.png")}/>
          <Text style={styles.info}>Trauma</Text>
        </View>
        </View>

        <View style={{flexDirection:'row'}}>
      <Card style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/stress.png")}/>
          <Text style={styles.info}>Stress & Axiety</Text>
        </Card>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/grief.png")}/>
          <Text style={styles.info}>Addiction</Text>
        </View>
        </View>


<View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:10}} >
    <Text style={{color:'#00f',fontWeight:'bold', fontSize:16, textDecorationLine:'underline'}}>Support</Text>
    </View>
    <View style={{borderBottomWidth:1, borderBottomColor:'#808080', marginLeft:15,marginRight:15}}>
</View>
        <View style={{flexDirection:'row'}}>
        
<TouchableOpacity style={styles.menuBox} onPress={()=>this.props.navigation.navigate('Communities')}>
        <Card>
          <Image style={styles.icon} source={require("./media/community.png")}/>
          <Text style={styles.info}>Community</Text>
        </Card>
        
        </TouchableOpacity>
        <View style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/professional.png")}/>
          <Text style={styles.info}>Professionals</Text>
        </View>
        </View>


<View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:10}} >
    <Text style={{color:'#00f',fontWeight:'bold', fontSize:16, textDecorationLine:'underline'}}>More</Text>
    </View>
        <View style={{borderBottomWidth:1, borderBottomColor:'#808080', marginLeft:20,marginRight:20}}>
</View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.menuBox} onPress={()=>this.props.navigation.navigate('Profile')}>
        <Card >
          <Image style={styles.icon} source={require("./media/profile.png")}/>
          <Text style={styles.info}>Profile</Text>
        </Card>
        </TouchableOpacity>
        <View style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/about.png")}/>
          <Text style={styles.info}>About Intervene</Text>
        </View>
        </View>
        </ScrollView>
<ActionButton buttonColor='rgba(255, 95, 198, 0.75)'>
                <ActionButton.Item buttonColor='#337AB7'  textStyle={{ color:"#82BA00", fontSize:14, fontWeight:'bold'}} title="ChatBot" onPress={()=>this.props.navigation.navigate('Chat')}>
                    <Icon name="message" size={20} color='#fff' />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#337AB7'  textStyle={{ color:"#82BA00", fontSize:14, fontWeight:'bold'}} title="Chat Room" onPress={()=>this.props.navigation.navigate('ChatClient')}>
                    <Icon name="message" size={20} color='#fff' />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#337AB7'  textStyle={{ color:"#82BA00", fontSize:14, fontWeight:'bold'}} title="My Chat" onPress={()=>this.props.navigation.navigate('MyChat')}>
                    <Icon name="message" size={20} color='#fff' />
                </ActionButton.Item>
            </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    
  },
  menuBox:{
    backgroundColor: "#fff",
    width:"45%",
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:22,
    color: "#696969",
  }
});