import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/Sidebar';
import Searchbar from '../components/SearchBar';

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
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        height: 40,
                        padding: 0,
                        marginLeft: 2,
                        marginRight: 2,
                        marginBottom: 5,
                        marginTop: 5,
                        borderWidth: 1,
                        borderColor: '#161924',
                        borderRadius: 60,
                    }}>
                        <Icon type={"FontAwesome"} name="search" fontSize={25} style={{marginLeft:8}} />
                        <TextInput
                            placeholder="Type here ..."
                            placeholderTextColor={'#161924'}
                            style={{
                                fontSize:14,
                                width: "90%",
                                padding:2,
                            }}
                        />
                    </View>
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