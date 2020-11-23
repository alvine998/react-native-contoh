import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/Sidebar';

class Screens extends Component {
    closeDrawer(){
        this._drawer._root.close()     
    };
    openDrawer(){
        this._drawer._root.open()
    };

    render() { 
        return ( 
            <Drawer
                ref={(ref) => {this._drawer = ref;}}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}
            >
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Icon type={"FontAwesome"} name="bars"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>CariKamar</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Text>Home</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>Ini adalah contoh drawer</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>CariKamar.id</Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Ini Footer Lho</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

            </Drawer>
         );
    }
}
 
export default Screens;