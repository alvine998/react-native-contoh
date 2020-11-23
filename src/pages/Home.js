import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/Sidebar';
import Searchbar from '../components/SearchBar';
import img from '../images/htl.png';
import bag from '../images/kpr.png';
import newf from '../images/htl-13.png';
import loggo from '../images/Putih_Full_Horizontal.png';
import store from '../images/store.png';
import car from '../images/cart.png';

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
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Icon type={"FontAwesome"} name="bars"/>
                        </Button>
                    </Left>
                    <Body>
                        <Image source={loggo} style={{width:200, height:40, marginLeft:30}} />
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
                        <Text style={{textAlign:'center', fontSize:20}}>Main Menu</Text>
                        <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Button primary transparent style={[styles.buttonContainer]}>
                                <View>
                                    <Image source={img} style={{width:50, height:50, marginLeft:60}} />
                                    <Text style={{marginLeft:70}}>Hotel</Text>
                                </View> 
                            </Button>
                            <Button primary transparent style={[styles.buttonContainer]}>
                            <View>
                                <Image source={bag} style={{width:40, height:40, marginLeft:35}} />
                                <Text style={{marginLeft:15}}>Travelling Kit</Text>
                            </View>
                            </Button>
                        </View>
                        <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Button primary transparent style={[styles.buttonContainer]}>
                                <View>
                                    <Image source={store} style={{width:50, height:50, marginLeft:60}} />
                                    <Text style={{marginLeft:60}}>Souvenir</Text>
                                </View>    
                            </Button>
                            <Button primary transparent style={[styles.buttonContainer]}>
                                <View>
                                    <Image source={car} style={{width:70, height:50, marginLeft:30}} />
                                    <Text style={{marginLeft:15}}>Pick Up Service</Text>
                                </View> 
                            </Button>
                        </View>
                    </Card>
                </Content>
                <Footer >
                    <FooterTab style={{backgroundColor:"#229BD7"}}>
                        <Button full>
                            <Text style={{color:"#FFF"}}>CariKamar.id</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

            </Drawer>
         );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        height:60,
        margin:8,
        width:150
    }
})
 
export default Screens;