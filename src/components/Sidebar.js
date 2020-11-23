import React, { Component } from 'react';
import {Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import { Container, Header, Body, Title, Right, Content, Footer, FooterTab, Button } from 'native-base';

export default class SideBar extends Component{
    render() {
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Welcome</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <TouchableHighlight style={[styles.profileImgContainer, {borderColor:'blue', borderWidth:1, marginLeft:105, marginTop:30}]}>
                    <Image source={{ uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
                    </TouchableHighlight>
                    <Text style={{textAlign:'center'}}>Halo, Annisa</Text>
                    <Button primary full style={{marginTop: 50}}>
                        <Text style={{color:'white'}}>Profile</Text>
                    </Button>
                    <Button primary full style={{marginTop:10}}>
                        <Text style={{color:'white'}}>Saved Booking</Text>
                    </Button>
                    <Button primary full style={{marginTop:10}}>
                        <Text style={{color:'white'}}>Travelling Kit</Text>
                    </Button>
                    <Button primary full style={{marginTop:10}}>
                        <Text style={{color:'white'}}>Logout</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab>
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