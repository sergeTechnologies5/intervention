import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import professionalImage from './media/profile.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';
import firebase from 'react-native-firebase';

export default class ProfileView extends Component {
static navigationOptions = ({ navigation }) => {
    const params=navigation.state.params || {};
    return {
        title: 'Professional Profiles',
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
    //console.log("here");
    //var id= Math.round(Math.random() * 1000000);
    /*firebase.database().ref("Professionals").push({
      "id":String(id),
  "Name":"Dr. Elijah  Mines.",
  "followers":"432",
  "ranking":"1",
  "description":"Dr. Elijah  Mines is a registered mental heath practitioner."
}).then((resp)=>{
  //console.warn(resp.response)
})*/
   
    super(props);
    this.state={
      followers:'100',
ranking:'1',
hasfollowed:false,
docs:[{
      "Name" : "Dr. Koros Kim",
      "description" : "Dr.Dr. Koros Kim is a registers psychiatrist who offers mental health services in various scopes.",
      "followers" : "200",
      "id" : "207042",
      "ranking" : "2",
      "associations": "12"
    },
    {
      "Name" : "Dr. Sarah K.",
      "description" : "Dr. Sarah K is a registers mental heath practitioner.",
      "followers" : "432",
      "id" : "385141",
      "ranking" : "1",
      "associations": "15"
    },
    {
      "Name" : "Dr. Elijah  Mines.",
      "description" : "Dr. Elijah  Mines is a registered mental heath practitioner.",
      "followers" : "187",
      "id" : "418477",
      "ranking" : "3",
    "associations": "10"
    }]
    }
  }
 
  onFollow=()=>{
   if(!this.state.hasfollowed)
     var cfollowers=Number(this.state.followers)+1;
    //console.warn(cfollowers)
    var follow=String(cfollowers);
    this.setState({followers: follow,hasfollowed:true});
  }
  render() {
     firebase.database().ref('Professionals').once('value', (snapshot) => {
      console.log(snapshot)
      //console.log(this.snapshotToArray(snapshot));
});
    return (
      <View style={{backgroundColor:'#CDCEC0'}}>
      <ScrollView>
      {this.state.docs.map((doc)=>{
        return(
          <View style={{margin:5, backgroundColor:'#fff'}} key={doc.id}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={professionalImage}/>
                <Text style={styles.name}>
                  {doc.Name}
                </Text>
            </View>
          </View>

          <View style={styles.profileDetail}>
            
            <View style={styles.detailContent}>
              <Text style={styles.title} onPress={this.onFollow.bind(this)}>Followers</Text>
              <Text style={styles.count}>{doc.followers}</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Ranking</Text>
              <Text style={styles.count}>{doc.ranking}</Text>
            </View>
            
          </View>

          <View style={styles.body}>

            <View style={styles.bodyContent}>
              <Text style={[styles.description],{textDecorationLine:'underline',fontWeight:'bold',fontSize:18 }}>
              Overview
              </Text>
              <Text style={styles.description}>
              
              {doc.description}
              </Text>
              <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=>alert("Please upgrade Account to access this Service")}>
            <View style={{flexDirection:'row'}}>
            <Icon name="message" size={20} color='#e81ce8' />
            <Text style={{marginRight:10}}>Contact {doc.Name}</Text>
            </View>
            
            </TouchableOpacity>
            </View>
            </View>
        </View>
          
      </View>
          )
      })}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00CED1",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  circle: {
   width: 44,
   height: 44,
   borderRadius: 44/2,
   borderColor:'#000'
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
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    
    color: "#000",
    marginTop:10,
    textAlign: 'center'
  },
});