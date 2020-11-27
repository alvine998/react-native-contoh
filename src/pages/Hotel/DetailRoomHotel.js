import React, { Component } from 'react';
import{Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground} from 'react-native';
import {Button, Label, Left, Body, Right, Container, Icon, Header,Title, View, Card, Footer, FooterTab, Content} from 'native-base';

import hotel1 from '../../images/img-hotel/cordoba.webp';
import hotel2 from '../../images/img-hotel/125011825.jpg';
import hotel3 from '../../images/img-hotel/isi-2.jpg';
import hotel4 from '../../images/img-hotel/isi-3.webp';
import hotel5 from '../../images/img-hotel/isi-4.jpg';
import save from '../../images/saved-item.png';
import ac from '../../images/air-conditioner.png';
import parkir from '../../images/parking-sign.png';
import wifi from '../../images/wifi.png';
import eat from '../../images/cutlery.png';
import beach from '../../images/beach-chair.png';
import bus from '../../images/bus.png';
import notes from '../../images/notebook.png';



class HotelRoomDetail extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} />
                    </Left>
                    <Body>
                        <Title>Detail Room</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <View style={{flex:1, flexDirection:"column"}}>
                        <View style={{backgroundColor:"#d9d9d9", height:50}}>
                            
                            <View style={{flexDirection:"row", marginTop:5, marginLeft:5}}>
                                <View style={{flexDirection:"row", borderRightWidth:1}}>
                                    <Icon type={"FontAwesome5"} name="calendar-alt" />
                                    <Text style={{fontSize:16, marginTop:5}}> 12, Des 2020 </Text>
                                </View>
                                <View style={{flexDirection:"row", borderRightWidth:1, marginLeft:5}}>
                                    <Icon type={"FontAwesome5"} name="moon" />
                                    <Text style={{fontSize:16, marginTop:5}}> 1 Night(s) </Text>
                                </View>
                                <View style={{flexDirection:"row", borderRightWidth:1, marginLeft:5}}>
                                    <Icon type={"FontAwesome5"} name="user-friends" />
                                    <Text style={{fontSize:16, marginTop:5}}> 1 Person </Text>
                                </View>
                                <View style={{flexDirection:"row", borderRightWidth:1, marginLeft:5}}>
                                    <Icon type={"FontAwesome5"} name="door-open" />
                                    <Text style={{fontSize:16, marginTop:5}}> 1 </Text>
                                </View>
                            </View>
                        </View>
                        <Content padder>
                            <View style={{flex:1}}>
                                <Image source={hotel2} style={{margin:10, width:400}} />
                            </View>
                            <View style={{margin:10}}>
                                <Text style={{fontSize:20}}>Regular</Text>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Icon type={"FontAwesome5"} name="user-friends" style={{color:"grey"}} />
                                    <Text style={{color:"grey", fontSize:20}}> 2 guest(s)/room</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Icon type={"FontAwesome5"} name="bed" style={{color:"grey"}} />
                                    <Text style={{color:"grey", fontSize:20}}> 1 double bed</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Icon type={"FontAwesome5"} name="utensils" style={{color:"grey"}} />
                                    <Text style={{color:"grey", fontSize:20, marginLeft:20,  color:"green"}}>Free Breakfast</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Image source={notes} style={{width:30, height:30}} />
                                    <Text style={{color:"grey", fontSize:20, marginLeft:15,  color:"green"}}>No-refundable</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Image source={wifi} style={{width:30, height:30}} />
                                    <Text style={{color:"grey", fontSize:20, marginLeft:15, color:"green"}}>Free WiFi /room</Text>
                                </View>
                                <View style={{marginLeft:20, marginTop:10, flexDirection:"row"}}>
                                    <Text style={{color:"red"}}>2 rooms(s) left!</Text>
                                    <Text style={{color:"#F96E46", marginLeft:150, fontSize:20}}>Rp. 280.000,-</Text>
                                </View>
                                <Right>
                                    <Button warning style={{width:100, borderRadius:10, alignItems:"center", marginLeft:250,                
                                    justifyContent:"center", backgroundColor:"#F96E46", marginTop:20}}>
                                        <Text style={{fontSize:18, color:"#FFF"}}>Select</Text>
                                    </Button>
                                </Right>
                            </View>
                            <View style={{borderBottomWidth:1}}></View>
                            <View style={{flex:1}}>
                                <Image source={hotel5} style={{margin:10, width:400, height:300}} />
                            </View>
                            <View style={{margin:10}}>
                                <Text style={{fontSize:20}}>Deluxe</Text>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Icon type={"FontAwesome5"} name="user-friends" style={{color:"grey"}} />
                                    <Text style={{color:"grey", fontSize:20}}> 2 guest(s)/room</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Icon type={"FontAwesome5"} name="bed" style={{color:"grey"}} />
                                    <Text style={{color:"grey", fontSize:20}}> 1 double bed</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Icon type={"FontAwesome5"} name="utensils" style={{color:"grey"}} />
                                    <Text style={{color:"grey", fontSize:20, marginLeft:20, color:"green"}}>Free Breakfast</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Image source={notes} style={{width:30, height:30}} />
                                    <Text style={{color:"grey", fontSize:20, marginLeft:15,  color:"green"}}>Refundable</Text>
                                </View>
                                <View style={{flexDirection:"row", margin:10}}>
                                    <Image source={wifi} style={{width:30, height:30}} />
                                    <Text style={{color:"grey", fontSize:20, marginLeft:15,  color:"green"}}>Free WiFi /room</Text>
                                </View>
                                <View style={{marginLeft:20, marginTop:10, flexDirection:"row"}}>
                                    <Text style={{color:"red"}}>5 rooms(s) left!</Text>
                                    <Text style={{color:"#F96E46", marginLeft:150, fontSize:20}}>Rp. 350.000,-</Text>
                                </View>
                                <Right>
                                    <Button warning style={{width:100, borderRadius:10, alignItems:"center", marginLeft:250,                
                                    justifyContent:"center", backgroundColor:"#F96E46", marginTop:20}}>
                                        <Text style={{fontSize:18, color:"#FFF"}}>Select</Text>
                                    </Button>
                                </Right>
                            </View>
                        </Content>
                    </View>
                </ScrollView>
            </Container>
         );
    }
}
 
export default HotelRoomDetail;