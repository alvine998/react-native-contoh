import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title,Item, Label, Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

class Filterhotel extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left"/>
                    </Left>
                    <Body>
                        <Title>Filter Hotel Pilihan</Title>
                    </Body>
                    <Right>
                        <Icon type={"FontAwesome5"} name="check"/>
                    </Right>
                </Header>
                <Content padder>
                    <Label>Hello</Label>
                </Content>
            </Container>
         );
    }
}
 
export default Filterhotel;