import React, { Component } from 'react';
import {View, ImageBackground, Text, Image, Button, StyleSheet, TextInput} from 'react-native';
// import bgimage from '../images/bg.jpg';
import Headerin from '../components/Header';

    
class Loginlagi extends Component {
    render() { 
        
        return ( 
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Headerin/>
                <Text style={{textAlign: 'center', justifyContent: 'center'}}>LOGIN</Text>
                <TextInput
                    placeholder={'Username'}
                    style={{borderColor: 'gray', borderWidth: 1,
                    alignItems: 'center', justifyContent:'center',
                    width: 200, height: 35}}
                />
            </View>
            
            
         );
    }
}

 
export default Loginlagi;