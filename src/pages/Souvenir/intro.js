import React, { Component } from 'react';
import { View, Text, TextInput , Dimensions, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../../components/Sidebar';
import {Actions} from 'react-native-router-flux';

import car from '../../images/cart.png';
import img from '../../images/htl.png';
import bag from '../../images/kpr.png';
import newf from '../../images/logo.png';
import loggo from '../../images/Putih_Full_Horizontal.png';
import store from '../../images/store.png';

class IntroSouvenir extends Component {
    state = {  }
    
    render() { 
        return ( 
            <Container>
                <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Image source={store} style={{marginTop:50}}/>
                    <View style={{backgroundColor:"#229BD7", width:320, height:50, alignItems:"center", justifyContent:"center"}}>
                        <Title style={{fontSize:20}}>Welcome To Cari-Souvenir</Title>
                    </View>
                    <View style={{backgroundColor:"steelblue", width:250, height:50, alignItems:"center", justifyContent:"center"}}>
                        <Title style={{fontSize:20}}>by CariKamar</Title>
                    </View>
                </View>
            </Container>
         );
    }
}
 
export default IntroSouvenir;