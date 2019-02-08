import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import depressionImage from './media/depression.png';
import StarRating from 'react-native-star-rating';

export default class Depression extends Component {

static navigationOptions = {
        title: 'Depression Insights',
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
            <Text style={styles.name}>What is Depression?</Text>
            <Text style={styles.description}>
              Being depressed often feels like carrying a very heavy burden,
               but you are not alone in this struggle. Millions of Americans 
               suffer from some form of depression every year, making it one 
               of the most common mental disorders in the country.

              Gaining a deeper understanding of depression can help begin the
               journey to recovery. Taking some time to learn more about the 
               causes and symptoms of depression will assist you greatly when 
               it comes time to consider methods of treatment.

              Depression is more than just feeling sad. Everyone feels upset or unmotivated 
              from time to time, but depression is more serious. 
              It is a mood disorder characterized by prolonged feelings of sadness and loss of interest in daily activities. If these symptoms persist for a period of at least two weeks, it is considered a depressive episode.
            </Text>
            <Text style={styles.name}>Patient Statistics</Text>
            <Text style={styles.description}>
            According to the National Institute of Mental Health (NIMH), major depression 
            is one of the most common mental disorders in the United States.

Data from the Substance Abuse and Mental Health Services Administration (SAMHSA) shows 
that in 2014, an estimated 15.7 million adults in the United States reported having at 
least one major depressive episode in the previous 12 months. That is 6.7% of all U.S. 
adults ages 18 and older. SAMHSA records from 2014 also note that an estimated 2.8 million 
adolescents reported having at 
least one major depressive episode in the previous 12 months. That number is 11.4% of all U.S. 
adolescents ages 12 to 17.
</Text>
<Text style={styles.name}>Causes of Depression</Text>
            <Text style={styles.description}>
            There is no one cause for depression, as it depends on a unique combination of an individual’s genetic makeup and environmental conditions. 
            There are many factors to take into account:

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
            <TouchableHighlight style={styles.shareButton} onPress={()=> this.props.navigation.navigate("Stories")}>
              <Text style={styles.shareButtonText}>More Articles</Text>  
            </TouchableHighlight>
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