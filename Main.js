
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
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
import depressionImage from './media/depression.png';
import traumaImage from './media/trauma.png';
import addictionImage from './media/drugs.png';
import anxietyImage from './media/anxiety.jpg';
import aboutImage from './media/about.png';
import communityImage from './media/community.png';
import profileImage from './media/profile.png';
import professionalImage from './media/professional.png';

export default class Home extends Component {

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
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Depression",      color:"#FF4500", members:8,  image:depressionImage},
        {id:1, title: "Trauma",     color:"#87CEEB", members:6,  image:traumaImage},
        {id:2, title: "Anxiety",     color:"#4682B4", members:12, image:anxietyImage} ,
        {id:3, title: "Addiction",   color:"#6A5ACD", members:5,  image:addictionImage}
      ],
      social:[
        {id:4, title: "Community",  color:"#FF69B4", members:6,  image:communityImage} ,
        {id:5, title: "professionals",   color:"#00BFFF", members:7,  image:professionalImage} 
      ],
      more:[
        {id:6, title: "Profile",   color:"#00FFFF", members:8,  image:profileImage} ,
        {id:8, title: "About",    color:"#20B2AA", members:23, image:aboutImage} 
      ]
    };
  }
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
DefaultPreference.get('userId').then(function(value) {
  //console.warn("userId: "+value)
})

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
  clickEventListener(item) {
    Alert.Alert(item)
  }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
  <View style={{alignItems:'center', justifyContent:'center',  height:20}} >
    <Text style={{color:'#2296f3',fontWeight:'bold', fontSize:16, textDecorationLine:'underline'}}>Knowledge Base</Text>
    </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => this.props.navigation.navigate(item.title)}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}></Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
          <View style={{alignItems:'center', justifyContent:'center',  height:20}} >
    <Text style={{color:'#2296f3',fontWeight:'bold', fontSize:16, textDecorationLine:'underline'}}>Social</Text>
    </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.social}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => this.props.navigation.navigate(item.title)}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}></Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
          <View style={{alignItems:'center', justifyContent:'center',  height:20}} >
    <Text style={{color:'#2296f3',fontWeight:'bold', fontSize:16, textDecorationLine:'underline'}}>More</Text>
    </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.more}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => this.props.navigation.navigate(item.title)}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}></Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
          </ScrollView>
          <ActionButton buttonColor='rgba(255, 95, 198, 0.75)'>
                <ActionButton.Item buttonColor='#337AB7'  textStyle={{ color:"#82BA00", fontSize:14, fontWeight:'bold'}} title="ChatBot" onPress={()=>this.props.navigation.navigate('ChatBot')}>
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
    flex:1,
    marginTop:5,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
    marginBottom:10
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     



/**import React, { Component } from 'react';
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
          <Image style={styles.icon} source={require("./media/trauma.png")}/>
          <Text style={styles.info}>Trauma</Text>
        </View>
        </View>

        <View style={{flexDirection:'row'}}>
      <Card style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/stress.png")}/>
          <Text style={styles.info}>Stress & Axiety</Text>
        </Card>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={require("./media/drugs.png")}/>
          <Text style={styles.info}>Addiction</Text>
        </View>
        </View>


<View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:10}} >
    <Text style={{color:'#00f',fontWeight:'bold', fontSize:16, textDecorationLine:'underline'}}>Support</Text>
    </View>
    <View style={{borderBottomWidth:1, borderBottomColor:'#808080', marginLeft:15,marginRight:15}}>
</View>
        <View style={{flexDirection:'row'}}>
        <Card style={styles.menuBox}>
<TouchableOpacity  onPress={()=>this.props.navigation.navigate('Communities')}>
        
          <Image style={styles.icon} source={require("./media/community.png")}/>
          <Text style={styles.info}>Community</Text>
        
        
        </TouchableOpacity>
        </Card>
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
        <Card style={styles.menuBox}  >
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
        
          <Image style={styles.icon} source={require("./media/profile.png")}/>
          <Text style={styles.info}>Profile</Text>
       
        </TouchableOpacity>
         </Card>
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


 */