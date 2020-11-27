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
import one from '../../images/one-icon-29.jpg';
import clock from '../../images/clock-512.webp';
import two from '../../images/2-circle.png';
import mandiri from '../../images/bank/mandiri-logo.png';
import three from '../../images/3-circle.png';
import footlogo from '../../images/Putih_Full_Horizontal.png';




class HotelPaymentDetail extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} />
                    </Left>
                    <Body>
                        <Title>Payment Detail</Title>
                    </Body>
                    <Right/>
                </Header>
                
                
                    <View style={{flexDirection:"column", flex:1}}>
                        <View style={{height:50, backgroundColor:"steelblue"}}>
                            <Text style={{color:"#FFF", fontSize:18, margin:10}}>Make a Payment</Text>
                        </View>
                        <View style={{height:50, backgroundColor:"#d9d9d9"}}>
                            <View style={{flexDirection:"row"}}>
                                <Image source={one} style={{width:30, height:30, margin:10}} />
                                <Text style={{ fontSize:18, marginTop:12}}>Make a Payment Before</Text>
                            </View> 
                        </View>
                        <View style={{height:50, backgroundColor:"white"}}>
                            <View style={{flexDirection:"row"}}>
                                <Image source={clock} style={{width:30, height:30, margin:10}} />
                                <View>
                                <Text style={{ marginTop:8}}>16.17 PM</Text>
                                <Text >Complete your payment within 49 minutes</Text>
                                </View>
                            </View> 
                        </View>
                        <View style={{height:50, backgroundColor:"#d9d9d9"}}>
                            <View style={{flexDirection:"row"}}>
                                <Image source={two} style={{width:30, height:30, margin:10}} />
                                <Text style={{ fontSize:18, marginTop:12}}>Please Transfer To</Text>
                            </View> 
                        </View>
                        <View style={{height:150, backgroundColor:"white", borderBottomWidth:1}}>
                            <View style={{flexDirection:"row", backgroundColor:"#D8E7F3"}}>
                                <Icon type={"FontAwesome5"} name="exclamation-triangle" style={{margin:10, color:"#229BD7"}} />
                                <View>
                                    <Text style={{ marginTop:8}}>Please choose your online transfer as your</Text>
                                    <Text >transfer type</Text>
                                </View>
                                <Right>
                                <Icon type={"FontAwesome5"} name="info-circle" style={{marginTop:0, color:"#229BD7"}} />
                                </Right>
                            </View> 
                            <View style={{flexDirection:"row"}}>
                                <Icon type={"FontAwesome5"} name="user" style={{margin:10, color:"#229BD7"}} />
                                <View>
                                    <Text style={{ marginTop:8, color:"grey"}}>Account Name</Text>
                                    <Text >143-100-2247778-8</Text>
                                </View>
                                <Right>
                                    <Text style={{marginTop:0, color:"#229BD7", fontSize:24}}>COPY</Text>
                                </Right>
                            </View> 
                            <View style={{flexDirection:"row", backgroundColor:"#DFDFDF"}}>
                                <Icon type={"FontAwesome5"} name="credit-card" style={{margin:10, color:"#229BD7"}} />
                                <View>
                                    <Text style={{ marginTop:8, color:"grey"}}>Account Holder Name</Text>
                                    <Text >CV. INOVISI ARTHA LAND</Text>
                                </View>
                                <Right>
                                <Image source={mandiri} style={{width:70, height:40, marginTop:0}} />
                                </Right>
                            </View> 
                        </View>
                        <View style={{height:60, backgroundColor:"white", borderBottomWidth:1, borderBottomColor:"#DFDFDF"}}>
                            <View style={{flexDirection:"row"}}>
                            <Icon type={"FontAwesome5"} name="coins" style={{margin:10, color:"#229BD7"}} />
                                <View>
                                <Text style={{ marginTop:8, fontSize:16}}>Total Amount</Text>
                                <Text style={{color:"red"}}>Rp. 280.000</Text>
                                </View>
                                <Right>
                                    <Text style={{marginTop:0, color:"#229BD7", fontSize:24}}>COPY</Text>
                                </Right>
                            </View> 
                        </View>
                        <View style={{height:50, backgroundColor:"#d9d9d9"}}>
                            <View style={{flexDirection:"row"}}>
                                <Image source={three} style={{width:30, height:30, margin:10}} />
                                <Text style={{ fontSize:18, marginTop:12}}>Completed Your Payment?</Text>
                            </View> 
                        </View>
                        <View style={{height:100, backgroundColor:"white", marginTop:40}}>
                            <Text style={{textAlign:"center", fontSize:16, color:"grey"}}>Once your payment is confirmed, we will send your receipt</Text>
                            <Text style={{textAlign:"center", fontSize:16, color:"grey"}}>hotel voucher to your email address.</Text>
                            <Text style={{textAlign:"center", fontSize:20, color:"steelblue", marginTop:30}}>I Have Completed Payment</Text>
                        </View>
                    </View>
                    <Footer style={{height:50}}>
                        <FooterTab style={{backgroundColor:"#229BD7", alignItems:"center", justifyContent:"center"}}>
                            <Image source={footlogo} style={{height:25, width:100}} />
                        </FooterTab>
                    </Footer>
                
            </Container>
         );
    }
}
 
export default HotelPaymentDetail;