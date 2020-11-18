import React, { Component } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import logo from '../images/logo.png';

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
    },
    headerStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.2,
    },
})

const Headerin = (props) => {
    
        return (
            <View style={{ justifyContent: 'center', alignItems:'center'}}>
                <Image source={logo} style={{width:140, height: 140}}/>
            </View>
         );
    
}
 
export default Headerin;