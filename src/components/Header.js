import React, { Component } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import logo from '../images/logo.png';

const styles = StyleSheet.create({
 
})

const Headerin = (props) => {
    
        return (
            <View style={{ alignItems:'center'}}>
                <Image source={logo} style={{width:300, height: 300}}/>
            </View>
         );
    
}
 
export default Headerin;