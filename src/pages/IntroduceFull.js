import React, { Component } from 'react';
import {Image, View, StyleSheet, Text, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import App from '../../App';

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image: {
      width: responsiveWidth(8),
      height: responsiveHeight(10),
    },
    text: {
      color: 'black',
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingHorizontal: 16,
      marginTop: responsiveHeight(-2)
  
    },
    title: {
      fontSize: 22,
      color: '#555',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
      marginTop: responsiveHeight(-25)
    },
  })

const slides = [
    {
        key:'key1',
        title:'Title1',
        text:'Slides 1',
        image: require('../images/tl1.jpg'),
        backgroundColor:'#27ae60',
    },
    {
        key:'key2',
        title:'Title2',
        text:'Slides 2',
        image: require('../images/tl1.jpg'),
        backgroundColor:'#27ae60',
    },
    {
        key:'key3',
        title:'Title3',
        text:'Slides 3',
        image: require('../images/tl1.jpg'),
        backgroundColor:'#27ae60',
    },
];

class Testss extends Component {
    
    _renderItem = ({ item }) => {
        return(
            <View
            style={[
                styles.mainContent,
                {
                  flex: 1,
                  paddingTop: item.topSpacer,
                  paddingBottom: item.bottomSpacer,
                  width: Dimensions.width,
                  backgroundColor:'white'
                },
              ]}
              colors={item.color}
            >
                <Image source={item.image} style={{width:360, height:360}} resizeMode='contain' />
                <View>
                    <Text style={styles.title}>Judul ke 1 {item.title}</Text>
                    <Text style={styles.text} >Text:{item.text} </Text>
                </View>
                
                
            </View>
        );
    }

    render() { 
        
        return ( 
            <AppIntroSlider 
                data={slides}
                renderItem={this._renderItem}
                showPrevButton
                showNextButton
                dotStyle={{backgroundColor:"#DDD"}}
                activeDotStyle={{backgroundColor:"green"}}
                renderNextButton={() => { return (<Text style={{ fontSize: responsiveFontSize(2.3), fontWeight: 'bold', color: 'green' }}>Next</Text>) }}
                renderPrevButton={() => { return (<Text style={{ fontSize: responsiveFontSize(2.3), fontWeight: 'bold', color: 'green' }}>Back</Text>) }}
                renderDoneButton={() => { return (<Text style={{ fontSize: responsiveFontSize(2.3), fontWeight: 'bold', color: 'black' }}>Done</Text>) }}
                onDone={() => alert('Done')}
                />
         );
    }
}
 
export default Testss;