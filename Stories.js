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
  Button
} from 'react-native';

export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "What is Depression",                  time:"2018-08-01 12:15 pm", image:"https://lorempixel.com/400/200/nature/6/", description:"epression is more than just feeling sad. Everyone feels upset or unmotivated from time to time, but depression is more serious. It is a mood disorder characterized by prolonged feelings of sadness and loss of interest in daily activities. If these symptoms persist for a period of at least two weeks, it is considered a depressive episode."},
        {id:2, title: "Patient Statistics",             time:"2018-08-12 12:00 pm", image:"https://lorempixel.com/400/200/nature/5/", description:"Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."} ,
        {id:3, title: "Dipiscing elit. Aenean ",            time:"2017-08-05 12:21 pm", image:"https://lorempixel.com/400/200/nature/4/", description:"ccording to the National Institute of Mental Health (NIMH), major depression is one of the most common mental disorders in the United States."}, 
        {id:4, title: "Causes of Depression",         time:"2015-08-12 12:00 pm", image:"https://lorempixel.com/400/200/nature/6/", description:"There is no one cause for depression, as it depends on a unique combination of an individual’s genetic makeup and environmental conditions.There are many factors to take into account"}, 
        {id:5, title: "Types of Depression",           time:"2013-06-12 12:11 pm", image:"https://lorempixel.com/400/200/sports/1/", description:"Major depression,Dysthymia, Seasonal Affective Disorder, Atypical Depression,Bipolar Disorder ,Postpartum Depression,Premenstrual Dysphoric Disorder"}, 
        {id:6, title: "Signs and Symptoms of Depression",        time:"2018-08-12 12:56 pm", image:"https://lorempixel.com/400/200/nature/8/", description:"Persistent feelings of sadness, hopelessness, worthlessness, or emptiness,Irritability, frustration, or restlessness"}, 
        {id:7, title: "Treatment",    time:"2018-08-12 12:33 pm", image:"https://lorempixel.com/400/200/nature/1/", description:"Any treatment for depression should coincide with a healthy diet and regular sleep schedule. It may sound simplistic, but the importance of taking care of your body cannot be overstated."}, 
       ]
    };
  }
static navigationOptions = {
        title: 'Shared Stories',
        
        headerStyle: {
            backgroundColor: '#e81ce8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id+"id";
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.timeContainer}>
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/material/96/2ecc71/visible.png'}}/>
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   