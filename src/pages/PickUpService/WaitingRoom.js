import React, { Component } from 'react';
import { View, Text, TextInput , Dimensions, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import {responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions';

class WaitingDriver extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{backgroundColor:'#229BD7', height:responsiveHeight(50)}}>
                    <Text style={{color:'white', textAlign:'center',fontSize:responsiveFontSize(5), fontFamily:'Roboto', padding:50, marginTop:250}}>Searching Driver</Text>
                </View>
                <Text style={{fontFamily:'Roboto', textAlign:'center', fontSize:responsiveFontSize(10),marginBottom:50, color:"#229BD7"}}>...</Text>
            </View>
         );
    }
}
 
export default WaitingDriver;