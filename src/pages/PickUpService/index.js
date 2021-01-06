import React, { Component } from 'react';
import { View, Text, TextInput , Dimensions, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../../components/Sidebar';
import {Actions} from 'react-native-router-flux';

import car from '../../images/cart.png';
import img from '../../images/htl.png';
import bag from '../../images/kpr.png';
import newf from '../../images/logo.png';
import loggo from '../../images/Putih_Full_Horizontal.png';
import store from '../../images/store.png';

class Pickup extends Component {
    state = {  }
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
                        <Right>
                            <Icon type={"FontAwesome5"} name="bell" style={{color:"#FFF"}} />
                        </Right>
                    </Header>
                    <View style={{alignItems:"center", justifyContent:"center", marginTop:50}}>
                        <Image source={car} />
                        <Text style={{fontSize:30}}>Pick Up Service</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"column", marginTop:20, alignItems:"center"}}>
                        <View style={{backgroundColor:"#d9d9d9", height:100, borderRadius:20, width:350}}>
                            <Icon type={"FontAwesome5"} name="info-circle" style={{color:"#229BD7", fontSize:30}}/>
                            <Text style={{fontSize:16, textAlign:"center"}}>We serve what you want from start untill now {"\n"} So let's go</Text>
                        </View>
                        
                            <TextInput 
                                placeholder="Enter Code Booking"
                                style={{
                                    borderWidth:1,
                                    borderRadius:20,
                                    fontSize:18,
                                    marginTop:20,
                                    width:280,
                                    textAlign:"center"
                                }}
                            />
                            <TextInput 
                                placeholder="Enter Your Number Phone"
                                style={{
                                    borderWidth:1,
                                    borderRadius:20,
                                    fontSize:18,
                                    marginTop:20,
                                    width:280,
                                    textAlign:"center"
                                }}
                            />
                            <View style={{alignItems:"center", justifyContent:"center"}}>
                                <Button success style={{width:150, borderRadius:20, marginTop:20, backgroundColor:"#229BD7", alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{fontSize:20, color:"#FFF"}}>Submit</Text>
                                </Button>
                            </View>
                            
                        
                    </View>
                </Container>
            </Drawer>
            
         );
    }
}
 
export default Pickup;