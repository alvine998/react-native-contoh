import React, { Component } from 'react';
import {Text} from 'react-native';
import { Container, Header, Body, Title, Right, Content, Footer, FooterTab, Button } from 'native-base';

export default class SideBar extends Component{
    render() {
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Header Sidebar</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Text>This is sidebar menu</Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}