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
  Button,
} from 'react-native';
import depressionImage from './media/trauma.png';
import StarRating from 'react-native-star-rating';

export default class Trauma extends Component {

static navigationOptions = {
        title: 'Trauma Insights',
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
    this.state={
      starCount: 1
    }
  }

onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={depressionImage}/>
            <Text style={styles.name}>Trauma Definition</Text>
            <Text style={styles.description}>
              Trauma is defined by the American Psychological Association (APA) as the emotional response someone has to an extremely negative event. While trauma is a normal reaction to a horrible event, the effects can be so severe that they interfere with an individual’s ability to live a normal life. In a case such as this, help may be needed to treat the stress
               and dysfunction caused by the traumatic event and to restore the individual to a state of emotional well-being.
            </Text>
            <Text style={styles.name}>
What Are the Main Sources of Trauma?</Text>
            <Text style={styles.description}>
            Trauma can be caused by an overwhelmingly negative event that causes a lasting impact on the victim’s mental and emotional stability. While many sources of trauma are physically violent in nature, others are psychological. Some common sources of trauma include:
</Text>
          </View>
          <View style={styles.starContainer}>
          <Text>Rate Article</Text>
            <StarRating
            starStyle={{color:'#00f'}}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> alert("Coming soon..")}>
              <Text style={styles.shareButtonText}>More Articles</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:5,
    backgroundColor:'#fff',
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30,
    marginBottom:10
  }
});     