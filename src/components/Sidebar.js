import React, { Component } from 'react';
import {Text, TouchableHighlight, StyleSheet, Image, ToastAndroid} from 'react-native';
import { Container, Header, Body, Title, Right, Content, Footer, FooterTab, Button, Left } from 'native-base';
import ggg from '../images/fl.png';
import fff from '../images/user.png';
import save from '../images/saved-item.png';
import bag from '../images/travelkit.png';
import exit from '../images/exit.png';
import home from '../images/home.png';
import hotel from '../images/hotel.png';
import cog from '../images/setting2.png';
import storee from '../images/store2.png';
import pikk from '../images/pikup.png';
import cust from '../images/customer.png';
import draft from '../images/daftarkan.png';

import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';

export default class SideBar extends Component{
    
    render() {
        const goToProfil = () => {
            Actions.profil()
        }
        const goToHome = () => {
            Actions.home()
        }

        const goToHotel = () => {
            Actions.choose()
        }
        const goToLogin = () => {
            Actions.login()
        }
        const goToBooking = () => {
            Actions.savedbooking()
        }
        const goToSetting = () => {
            Actions.setting()
        }

        return(
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                    <Image source={require('../images/Putih_Full_Horizontal.png')} style={{width:200, height:40, marginLeft:60}} />
                    </Left>
                    <Body/>
                    
                    <Right/>
                </Header>
                <Content padder>
                    <TouchableHighlight style={[styles.profileImgContainer, {borderColor:'black', borderWidth:1, marginLeft:120, marginTop:30}]}>
                    <Image source={ggg} style={[styles.profileImg, {height:80, width:80}]} />
                    </TouchableHighlight>
                    <Text style={{textAlign:'center', fontSize:20, marginTop:10}}>Halo, Annisa</Text>
                    <Button full transparent style={{marginTop: 30, justifyContent:'flex-start'}} onPress={goToHome} >
                        <Image source={home} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25, color:'black', fontFamily:'BalooBhai-Regular'}}>Beranda</Text>
                    </Button>
                    <Button transparent full style={{marginTop: 10, justifyContent:'flex-start'}} onPress={goToProfil}>
                        <Image source={fff} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25, color:'black', fontFamily:'BalooBhai-Regular'}}>Akun Saya</Text>
                    </Button>

                    <View style={{borderTopWidth:1, marginTop:10}}>
                        <Text style={{marginTop:10, marginLeft:10, fontFamily:'BalooBhai-Regular'}}>Hotel</Text>
                    </View>

                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={goToBooking}>
                        <Image source={save} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25, color:'black', fontFamily:'BalooBhai-Regular'}}>Pesanan Saya</Text>
                    </Button>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={goToHotel} >
                        <Image source={hotel} style={{width:40, height:50, marginLeft:8}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:20, color:'black', fontFamily:'BalooBhai-Regular'}}>Cari Hotel</Text>
                    </Button>
                    <View style={{borderTopWidth:1, marginTop:10}}>
                        <Text style={{marginTop:10, marginLeft:10, fontFamily:'BalooBhai-Regular'}}>Fitur</Text>
                    </View>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={() => ToastAndroid.show("This Features is not available now!", ToastAndroid.SHORT) }>
                        <Image source={bag} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25,  color:'black', fontFamily:'BalooBhai-Regular'}}>Travelling Kit</Text>
                    </Button>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={() => ToastAndroid.show("This Features is not available now!", ToastAndroid.SHORT) }>
                        <Image source={pikk} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25,  color:'black', fontFamily:'BalooBhai-Regular'}}>Pickup Service</Text>
                    </Button>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={() => ToastAndroid.show("This Features is not available now!", ToastAndroid.SHORT) }>
                        <Image source={storee} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25,  color:'black', fontFamily:'BalooBhai-Regular'}}>Souvenir Store</Text>
                    </Button>

                    <View style={{borderTopWidth:1, marginTop:10}}>
                        <Text style={{marginTop:0, marginLeft:10, fontFamily:'BalooBhai-Regular'}}></Text>
                    </View>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={goToSetting}>
                        <Image source={draft} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25,  color:'black', fontFamily:'BalooBhai-Regular'}}>Daftarkan Hotel Anda</Text>
                    </Button>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={goToSetting}>
                        <Image source={cust} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25,  color:'black', fontFamily:'BalooBhai-Regular'}}>Hubungi Kami</Text>
                    </Button>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start'}} onPress={goToSetting}>
                        <Image source={cog} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25,  color:'black', fontFamily:'BalooBhai-Regular'}}>Pengaturan</Text>
                    </Button>

                    <View style={{borderTopWidth:1, marginTop:10}}>
                        <Text style={{marginTop:0, marginLeft:10, fontFamily:'BalooBhai-Regular'}}></Text>
                    </View>
                    <Button transparent full style={{marginTop:10, justifyContent:'flex-start', alignItems:'flex-start'}} onPress={goToLogin} >
                        <Image source={exit} style={{width:30, height:30, marginLeft:10}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25,  color:'black', fontFamily:'BalooBhai-Regular'}}>Keluar</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:"#229BD7"}}>
                        <Button full>
                            <Text>Version 1.0</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    profileImgContainer:{
        height:80,
        width:80,
        borderRadius:40,
        overflow: 'hidden',
    },
    profileImage:{
        
        height:80,
        width:80,
        borderRadius:40,
    }
})