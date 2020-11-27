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



class HotelBooking extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} />
                    </Left>
                    <Body>
                        <Title>Booking Detail</Title>
                    </Body>
                    <Right/>
                </Header>
                
                <ScrollView>
                    <View style={{flex:1, flexDirection:"column"}}>
                        <View style={{height:50, backgroundColor:"steelblue"}}>
                            <Text style={{color:"#FFF", fontSize:18, margin:10}}>Your Booking</Text>
                        </View>
                        <View style={{margin:10, flexDirection:"row"}}>
                            <Text style={{fontSize:16}}>Hotel Cordoba</Text>
                            <Text style={{fontSize:16, marginLeft:250, color:"blue"}}>Details</Text>
                        </View>
                        <View style={{borderBottomWidth:1}}></View>
                        <View style={{margin:10, flexDirection:"row"}}>
                            <Text style={{fontSize:16, color:"grey"}}>Check in</Text>
                            <Text style={{fontSize:16, marginLeft:100}}>12, Des 2020</Text>
                            <Text style={{fontSize:16, marginLeft:100}}>(14.00)</Text>
                        </View>
                        <View style={{margin:10, flexDirection:"row"}}>
                            <Text style={{fontSize:16, color:"grey"}}>Check out</Text>
                            <Text style={{fontSize:16, marginLeft:90}}>13, Des 2020</Text>
                            <Text style={{fontSize:16, marginLeft:100}}>(12.00)</Text>
                        </View>
                        <View style={{margin:10, flexDirection:"row"}}>
                            <Text style={{fontSize:16, color:"grey"}}>Room</Text>
                            <Text style={{fontSize:16, marginLeft:120}}>Deluxe (Room)</Text>
                        </View>
                        <View style={{margin:10, flexDirection:"row"}}>
                            <Text style={{fontSize:16, color:"grey"}}>Bed type</Text>
                            <Text style={{fontSize:16, marginLeft:100}}>1 double bed</Text>
                        </View>
                        <View style={{margin:10, flexDirection:"row"}}>
                            <Text style={{fontSize:16, color:"grey"}}>Guests</Text>
                            <Text style={{fontSize:16, marginLeft:110}}>2 Guests/room</Text>
                        </View>
                        <View style={{height:50, backgroundColor:"#95CCFA"}}>
                            <View style={{margin:10, flexDirection:"row"}}>
                                <Icon type={"FontAwesome5"} name="info-circle" />
                                <Text style={{fontSize:16, marginLeft:5, marginTop:3}}>Refundable</Text>
                                <Text style={{fontSize:16, marginLeft:250, marginTop:3, color:"blue"}}>Info</Text>
                            </View>
                        </View>
                        <View style={{margin:10}}>
                            <Card style={{backgroundColor:"#d9d9d9", height:100}}>
                                <Text style={{marginLeft:10, marginTop:10, fontSize:16}}>Enjoy the benefit of filling your details quickly </Text>
                                <View style={{flexDirection:"row", marginTop:20, marginLeft:10}}>
                                    <Icon type={"FontAwesome5"} name="user" style={{color:"#229BD7"}} />
                                    <Text style={{marginLeft:15, marginTop:5, fontSize:16}}>You're not logged in</Text>
                                    <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7", marginLeft:180, width:30, height:30}} />
                                </View>
                            </Card>
                        </View>
                        <View style={{marginTop:20, marginLeft:10}}>
                            <Text style={{fontSize:16}}>Contact Details (for E-Ticket/Voucher</Text>
                        </View>
                        
                        <View style={{height:45, backgroundColor:"#d9d9d9", marginTop:10, flexDirection:"row"}}>
                            <Text style={{fontSize:16, margin:10, color:"#229BD7"}}>FILL IN CONTACT DETAILS</Text>
                            <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7", marginLeft:170, width:30, height:30, marginTop:7}} />
                        </View>
                        
                        <View style={{height:45, backgroundColor:"#d9d9d9", marginTop:20, flexDirection:"row"}}>
                            <Text style={{fontSize:16, margin:10, color:"#229BD7"}}>Add Special Request(s)</Text>
                            <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7", marginLeft:195, width:30, height:30, marginTop:7}} />
                        </View>

                        <View style={{height:50, backgroundColor:"#d9d9d9", marginTop:20}}>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:16, marginTop:15, marginLeft:10}}>Total Price</Text>
                                <Text style={{fontSize:16, marginTop:15, marginLeft:230}}>Rp. 280.000,-</Text>
                            </View>
                            {/* <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:16, marginTop:10, marginLeft:10, color:"#229BD7"}}>Log in or Register</Text>
                            <Text style={{fontSize:16, marginTop:10}}> now to earn Points!</Text>
                            </View>
                            <Text style={{fontSize:16, marginLeft:10}}>Your booking will be saved.</Text> */}
                        </View>
                        
                        <View style={{margin:10}}>
                            <Button warning style={{backgroundColor:"#F96E46", width:410, alignItems:"center", justifyContent:"center"}}>
                                <Text style={{fontSize:20, color:"#FFF"}}>Continue</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </Container>
         );
    }
}
 
export default HotelBooking;