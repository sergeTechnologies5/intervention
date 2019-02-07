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
import depressionImage from './media/drugs.png';
import StarRating from 'react-native-star-rating';

export default class Addiction extends Component {

static navigationOptions = {
        title: 'Addiction Insights',
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
            <Text style={styles.name}>What is addiction?</Text>
            <Text style={styles.description}>
             The term addiction does not only refer to dependence on substances such as heroin or cocaine. A person who cannot stop taking a particular drug or chemical has a substance dependence.

Some addictions also involve an inability to stop partaking in activities, such as gambling, eating, or working. In these circumstances, a person has a behavioral addiction.

Addiction is a chronic disease that can also result from taking medications. The overuse of prescribed opioid painkillers, for example, causes 115 deaths every day in the United States.

When a person experiences addiction, they cannot control how they use a substance or partake in an activity, and they become dependent on it to cope with daily life.

Every year, addiction to alcohol, tobacco, illicit drugs, and prescription opioids costs the U.S. economy upward of $740 billion in treatment costs, lost work, and the effects of crime.

Most people start using a drug or first engage in an activity voluntarily. However, addiction can take over and reduce self-control.
              </Text>
            <Text style={styles.name}>Addiction vs. misuse</Text>
            <Text style={styles.description}>
            Drug addiction and drug misuse are different.

Misuse refers to the incorrect, excessive, or non-therapeutic use of body- and mind-altering substances.

However, not everybody that misuses a substance has an addiction. Addiction is the long-term inability to moderate or cease intake.

For example, a person who drinks alcohol heavily on a night out may experience both the euphoric and harmful effects of the substance.

However, this does not qualify as an addiction until the person feels the need to consume this amount of alcohol regularly, alone, or at times of day when the alcohol will likely impair regular activities, such as in the morning.

A person who has not yet developed an addiction may be put off further use by the harmful side effects of substance abuse. For example, vomiting or waking up with a hangover after drinking too much alcohol may deter some people from drinking that amount anytime soon.

Someone with an addiction will continue to misuse the substance in spite of the harmful effects.

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