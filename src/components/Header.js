import React, { Component } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import logo from '../images/logo.png';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
 
})

const Headerin = (props) => {
    
        return (
            <View style={{ alignItems:'center', marginTop:20, marginBottom:20}}>
                <Image source={logo} style={{width:responsiveWidth(50), height: responsiveHeight(25)}}/>
            </View>
         );
    
}
 
export default Headerin;