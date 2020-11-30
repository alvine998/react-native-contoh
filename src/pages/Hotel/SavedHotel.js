import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../../components/Sidebar';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import HotelModal from '../../components/ModalHotel';
import Slider from '@react-native-community/slider';


import loggo from '../../images/Putih_Full_Horizontal.png';
import cordoba from '../../images/img-hotel/cordoba.webp';


class SimpanHotel extends Component {
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
                <Content>
                    <View style={{flex:1, flexDirection:"column"}}>
                        <View style={{backgroundColor:"steelblue", height:50}}>
                            <Text style={{margin:10, fontSize:20, color:"#FFF"}}>Saved Hotel</Text>
                        </View>
                        <ScrollView>
                            {/* <View style={{borderWidth:1, height:200, width:400, margin:10}}>
                                
                            </View> */}

                            <Card>
                            <View style={{flex:1, flexDirection:"row"}}>
                                <Image source={cordoba} style={{height:200, width:200, alignItems:'center'}} />
                                <Text style={{fontSize:18, marginLeft:10}}>Hotel Cordoba{"\n"}Price :{"\n"}Rp.450.000,-</Text>
                                <Right>
                                    <Icon type={"FontAwesome5"} name="bookmark" style={{color:"#229BD7"}} />
                                </Right>
                            </View>    
                            </Card>
                        </ScrollView>
                    </View>
                </Content>
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewModal: {
        width: 300,
        height: 400,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      image: {
        width: 150,
        height: 150,
      },
    
    textModal: {
        marginVertical: 20,
        },
    slider: {
        width: 300,
        opacity: 1,
        height: 50,
        marginTop: 50,
        },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
        },

})
 
export default SimpanHotel;