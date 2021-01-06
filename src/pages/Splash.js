import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  MaskedViewIOS,
  StyleSheet,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

class Splasher extends Component {
    state = {
        loadingProgress : new Animated.Value(0),
        animationDone : false
    }

    componentDidMount(){
        Animated.timing(this.state.loadingProgress, {
            toValue: 100,
            duration:1000,
            useNativeDriver: true,
            delay:400
        }).start(() => {
            this.setState({ animationDone: true })
        })
    }
  render() {
    const colorLayer = (
      <View style={[StyleSheet.absoluteFill, {backgroundColor: '#229BD7'}]} />
    );
    const whiteLayer = (
      <View style={[StyleSheet.absoluteFill, {backgroundColor: 'white'}]} />
    );
    const imageScale = {
        transform: [
            {
                scale:this.state.loadingProgress.interpolate({
                    inputRange: [0, 15, 100],
                    outputRange:[0.1, 0.06, 16]
                })
            }
        ]
    };
    const opacity = {
        opacity: this.state.loadingProgress.interpolate({
            inputRange:[0, 25, 50],
            outputRange:[0, 0, 1],
            extrapolate:"clamp"
        })
    }
    return (
      <View>
        {colorLayer}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Animated.Image
            style={[{width: responsiveWidth(150), height: responsiveHeight(150)}, imageScale]}
            source={require('../images/logo.png')}
            resizeMode="contain"
          />
          <Animated.View
            style={[{alignItems: 'center', justifyContent: 'center'}], opacity}>
            <Text style={{textAlign:'center'}}>Welcome to Carikamar</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Splasher;
