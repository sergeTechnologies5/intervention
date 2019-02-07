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
import depressionImage from './media/anxiety.jpg';
import StarRating from 'react-native-star-rating';

export default class Anxiety extends Component {

static navigationOptions = {
        title: 'Stress & Anxiety Insights',
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
            <Text style={styles.name}>What are anxiety disorders?</Text>
            <Text style={styles.description}>
              It’s normal to feel anxious about moving to a new place, starting a new job, or taking a test. This type of anxiety is unpleasant, but it may motivate you to work harder and to do a better job. Ordinary anxiety is a feeling that comes and goes, but does not interfere with your everyday life.

In the case of an anxiety disorder, the feeling of fear may be with you all the time. It is intense and sometimes debilitating.

This type of anxiety may cause you to stop doing things you enjoy. In extreme cases, it may prevent you from entering an elevator, crossing the street, or even leaving your home. If left untreated, the anxiety will keep getting worse.

Anxiety disorders are the most common form of emotional disorder and can affect anyone at any age. According to the American Psychiatric Association, women are more likely than men to be diagnosed with an anxiety disorder. 
              </Text>
            <Text style={styles.name}>What are the types of anxiety disorders?</Text>
            <Text style={styles.description}>
            Anxiety is a key part of several different disorders. These include:

    panic disorder: experiencing recurring panic attacks at unexpected times. A person with panic disorder may live in fear of the next panic attack.
    phobia: excessive fear of a specific object, situation, or activity
    social anxiety disorder: extreme fear of being judged by others in social situations
    obsessive-compulsive disorder: recurring irrational thoughts that lead you to perform specific, repeated behaviors
    separation anxiety disorder: fear of being away from home or loved ones
    illness anxiety disorder: anxiety about your health (formerly called hypochondria)
    post-traumatic stress disorder (PTSD): anxiety following a traumatic event
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
    backgroundColor:'#fff'
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:20,
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