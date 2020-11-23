import React, { Component } from 'react';
import {Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import { Container, Header, Body, Title, Right, Content, Footer, FooterTab, Button } from 'native-base';
import ggg from '../images/fl.png';
import fff from '../images/user.png';

export default class SideBar extends Component{
    render() {
        return(
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Body>
                        <Title style={{color:"#FFF"}}>Welcome</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <TouchableHighlight style={[styles.profileImgContainer, {borderColor:'blue', borderWidth:1, marginLeft:105, marginTop:30}]}>
                    <Image source={ggg} style={styles.profileImg} />
                    </TouchableHighlight>
                    <Text style={{textAlign:'center', fontSize:20, marginTop:10}}>Halo, Annisa</Text>
                    <Button primary full style={{marginTop: 30, backgroundColor:"#229BD7"}}>
                        <Image source={fff} style={{width:30, height:30}} />
                        <Text style={{color:'white'}}>Profile</Text>
                    </Button>
                    <Button primary full style={{marginTop:10, backgroundColor:"#229BD7"}}>
                        <Text style={{color:'white'}}>Saved Booking</Text>
                    </Button>
                    <Button primary full style={{marginTop:10, backgroundColor:"#229BD7"}}>
                        <Text style={{color:'white'}}>Travelling Kit</Text>
                    </Button>
                    <Button primary full style={{marginTop:10, backgroundColor:"#229BD7"}}>
                        <Text style={{color:'white'}}>Logout</Text>
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
        
        height:30,
        width:30,
        borderRadius:40,
    }
})