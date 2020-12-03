import { Button } from 'native-base';
import React, { Component } from 'react';
import {Image, View, StyleSheet, Text, Dimensions, Platform, ToastAndroid} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SliderBox} from 'react-native-image-slider-box';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

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

class BoxSlider2 extends Component {

    constructor (props) {
        super(props);
        this.state ={
            slides : [
                  require('../images/souvenir/baju.jpg'),
                require('../images/souvenir/batik.jpg'),
            ]
        }
    }

    render() { 
        const text = [
          {
            text1:'Baju Osing Deles',
          },
          {
            text1:'Batik Osing Deles',
          },
        ];
        return ( 
            <View>
                <View>
                    <SliderBox 
                        images={this.state.slides}
                        resizeMode={'cover'}
                        circleLoop
                        dotColor='#012855'
                        inactiveDotColor='#90A4AE'
                        autoPlay
                        onCurrentImagePressed={index => this.onPressImage(index, images[index])}
                        sliderBoxHeight={Platform.OS == 'android' ? 350:210}
                        paginationBoxVerticalPadding={20}
                        resizeMethod={'resize'}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: 0,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 10
                          }}
                          dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                          }}
                          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
                          imageLoadingColor="#2196F3"
                    />
                    
                </View>
                
            </View>
         );
    }
}
 
export default BoxSlider2;