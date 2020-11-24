import React, { Component } from 'react';
import {Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import { Container, Header, Body, Title, Right, Content, Footer, FooterTab, Button } from 'native-base';
import ggg from '../images/fl.png';
import fff from '../images/user.png';
import save from '../images/saved-item.png';
import bag from '../images/travelkit.png';
import exit from '../images/exit.png';
import home from '../images/home.png';
import hotel from '../images/hotel.webp';
import { Actions } from 'react-native-router-flux';

export default class SideBar extends Component{
    render() {
        const goToProfil = () => {
            Actions.profil()
        }
        const goToHome = () => {
            Actions.home()
        }

        const goToHotel = () => {
            Actions.carihotel()
        }
        return(
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Body>
                        <Title style={{color:"#FFF"}}>Welcome</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <TouchableHighlight style={[styles.profileImgContainer, {borderColor:'black', borderWidth:1, marginLeft:120, marginTop:30}]}>
                    <Image source={ggg} style={[styles.profileImg, {height:80, width:80}]} />
                    </TouchableHighlight>
                    <Text style={{textAlign:'center', fontSize:20, marginTop:10}}>Halo, Annisa</Text>
                    <Button primary full style={{marginTop: 30, backgroundColor:"#229BD7", justifyContent:'flex-start'}} onPress={goToHome} >
                        <Image source={home} style={{width:30, height:30}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25}}>Home</Text>
                    </Button>
                    <Button primary full style={{marginTop: 10, backgroundColor:"#229BD7", justifyContent:'flex-start'}} onPress={goToProfil}>
                        <Image source={fff} style={{width:30, height:30}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25}}>Profile</Text>
                    </Button>
                    <Button primary full style={{marginTop:10, backgroundColor:"#229BD7", justifyContent:'flex-start'}}>
                        <Image source={save} style={{width:30, height:30}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25}}>Saved Booking</Text>
                    </Button>
                    <Button primary full style={{marginTop:10, backgroundColor:"#229BD7", justifyContent:'flex-start'}} onPress={goToHotel} >
                        <Image source={hotel} style={{width:40, height:50, marginLeft:8}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:10}}>Find Hotel</Text>
                    </Button>
                    <Button primary full style={{marginTop:10, backgroundColor:"#229BD7", justifyContent:'flex-start'}}>
                        <Image source={bag} style={{width:30, height:30}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25}}>Travelling Kit</Text>
                    </Button>
                    <Button primary full style={{marginTop:10, backgroundColor:"#229BD7", justifyContent:'flex-start', alignItems:'flex-start'}}>
                        <Image source={exit} style={{width:30, height:30}} />
                        <Text style={{color:'white', fontSize:20, marginLeft:25}}>Logout</Text>
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