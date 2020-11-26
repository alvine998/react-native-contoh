import React, { Component } from 'react';
import{Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Button,Drawer, Label, Left, Body, Right, Container, Icon, Header, Title, Content, View} from 'native-base';

class HotelDuration extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" />
                    </Left>
                    <Body>
                        <Title>Stay Duration</Title>
                    </Body>
                    <Right>
                    <Icon type={"FontAwesome5"} name="check" />
                    </Right>
                </Header>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{height:80, borderBottomWidth:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        
                            <Icon type={"FontAwesome5"} name="minus-circle" style={{marginRight:10}} />
                            <TextInput 
                                style={{borderBottomWidth:1, width:150, textAlign:'center'}}
                                placeholder="1 Night"
                            />
                            <Icon type={"FontAwesome5"} name="plus-circle" style={{marginRight:10}} />
                                                   
                    </View>
                </View>
            </Container>
         );
    }
}
 
export default HotelDuration;
