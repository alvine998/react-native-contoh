import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';

class Splasher extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{alignItems:'center', justifyContent: 'center', flex: 1}}>
                <Image style={{width: 400, height: 400}} source={require('../images/logo.png')}/>
            </View>
         );
    }
}
 
export default Splasher ;
