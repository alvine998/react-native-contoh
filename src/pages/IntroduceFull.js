import React, { Component } from 'react';
import {Image, View, StyleSheet, Text, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import App from '../../App';
import { Actions, Stack } from 'react-native-router-flux';
import Loginlagi from './Login';
import Routes from '../../Routes';


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
      marginTop: responsiveHeight(-2),
      fontSize:20,
      marginTop:10,
  
    },
    title: {
      fontSize: 26,
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
        title:'Welcome To CariKamar',
        text:'',
        image: require('../images/logo.png'),
        backgroundColor:'#27ae60',
    },
    {
        key:'key2',
        title:'Bukan Platform Biasa',
        text:'Cari Penginapan Terbaik Kapanpun Dimanapun',
        image: require('../images/tl1.jpg'),
        backgroundColor:'#27ae60',
    },
    {
        key:'key3',
        title:'Pick Up Service',
        text:'Dimanapun Kamu Berada Kami Akan Siap Jemput Kamu Menuju Hotel',
        image: require('../images/cart.png'),
        backgroundColor:'#27ae60',
    },
];

class Testss extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      showRealApp: false
    }
  }

  _onDone = () => {
    alert('Selamat Bersenang-senang :)');
    this.setState({ showRealApp: true });
  }

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
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text} >{item.text} </Text>
                </View>
                
                
            </View>
        );
    }

    render() { 
      const goToLogin = () => {
        Actions.login()
    }
    // if (this.state.showRealApp){
    //   return <Routes/>;
    // } else {
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
            onDone={() => {Actions.login()}}
            />
     );
    
        
    }
}
 
export default Testss;