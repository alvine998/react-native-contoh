import React, { Component } from 'react';
import{Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground} from 'react-native';
import {Button,Drawer, Label, Left, Body, Right, Container, Icon, Header,Title, View, Card, Footer, FooterTab} from 'native-base';

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

import { Actions } from 'react-native-router-flux';
import SideBar from '../../components/Sidebar';




class Detailhotel extends Component {
    closeDrawer(){
        this._drawer._root.close()     
    };
    openDrawer(){
        this._drawer._root.open()
    };

    render() { 
        const goToBack = () => {
            Actions.carihotel()
        }
        const goToDetailRoom = () => {
            Actions.detailroom()
        }

        return (
            <Drawer
                ref={(ref) => {this._drawer = ref;}}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}
                side="right"
                panOpenMask={.25}
            >
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} onPress={goToBack}/>
                    </Left>
                    <Body>
                        <Title>Detail Hotel</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Icon type={"FontAwesome"} name="bars"/>
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <View style={{flex:1, flexDirection:"column"}}>
                        <View style={{height:450, borderBottomWidth:1, borderBottomColor:"#d9d9d9"}}>
                            <Image source={hotel1} style={{height:200, width:450}} />
                            <View style={{flexDirection:"row"}}>
                                <Image source={hotel2} style={{width:100, height:100}} />
                                <Image source={hotel3} style={{width:100, height:100}} />
                                <Image source={hotel4} style={{width:100, height:100}} />
                                <ImageBackground  source={hotel5} style={{width:150, height:100, overflow:"hidden"}}>
                                    <View style={{backgroundColor:"grey", width:150, height:100, opacity:0.6, alignItems:"center", justifyContent:"center"}}>
                                        <Text style={{color:"#FFF"}}>See All Photos {'>>'}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:20, margin:10}}>Hotel Cordoba</Text>
                                <Text style={{borderWidth:1, width:50, height:20,marginTop:10, borderColor:"steelblue", textAlign:"center", borderRadius:20, alignItems:"center", justifyContent:"center"}}>Hotel</Text>
                                <Icon type={"FontAwesome5"} name="share-alt" style={{marginTop:13, marginLeft:140, color:"#229BD7"}} />
                                <Right>
                                    <Icon type={"FontAwesome5"} name="bookmark" style={{marginTop:13,marginRight:5,height:40, color:"#229BD7"}} />
                                </Right>
                            </View>
                            <Text style={{marginLeft:10}}>&#11088;&#11088;&#11088;&#11088;&#11088;</Text>
                            <Text style={{marginLeft:10}}>Banyuwangi, East Java</Text>
                        </View>
                        <Card style={{height:50, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{color:"steelblue", fontSize:16}}>See All Reviews</Text>
                        </Card>
                        <Card style={{height:130}}>
                            <Text style={{fontSize:16, margin:10}}>Facilities</Text>
                            <View style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                                <View>
                                    <Image source={ac} style={{width:40, height:40}}/>
                                    <Text style={{marginLeft:10}}>AC</Text>
                                </View>
                                <View>
                                    <Image source={parkir} style={{width:40, height:40, marginLeft:10}}/>
                                    <Text style={{marginLeft:12}}>Parkir</Text>
                                </View>
                                <View>
                                    <Image source={wifi} style={{width:40, height:40, marginLeft:10}}/>
                                    <Text style={{marginLeft:18}}>Wifi</Text>
                                </View>
                            </View>
                        </Card>
                        <Card style={{height:200}}>
                            <Text style={{fontSize:16, margin:10}}>Near Places</Text>
                            <View style={{flexDirection:"row"}}>
                                <Image source={eat} style={{width:30, height:30, marginLeft:10}} />
                                <View>
                                    <Text style={{marginLeft:10, fontSize:16}}>Ikan Bakar Pesona</Text>
                                    <Text style={{marginLeft:10}}>Casual Dining</Text>
                                </View>
                                <Right><Text>240m</Text></Right>
                            </View>
                            <View style={{flexDirection:"row", marginTop:10}}>
                                <Image source={beach} style={{width:30, height:30, marginLeft:10}} />
                                <View>
                                    <Text style={{marginLeft:10, fontSize:16}}>Solong Beach</Text>
                                    <Text style={{marginLeft:10}}>Nature</Text>
                                </View>
                                <Right><Text>460m</Text></Right>
                            </View>
                            <View style={{flexDirection:"row", marginTop:10}}>
                                <Image source={bus} style={{width:30, height:30, marginLeft:10}} />
                                <View>
                                    <Text style={{marginLeft:10, fontSize:16}}>Karangente Terminal</Text>
                                    <Text style={{marginLeft:10}}>Trasnportation Hub</Text>
                                </View>
                                <Right><Text>890m</Text></Right>
                            </View>
                        </Card>
                        <Card style={{height:250}}>
                            <Text style={{fontSize:16, margin:10}}>About This Room</Text>
                            <View style={{marginTop:15, marginLeft:10}}>
                                <Text style={{fontSize:14}}>1. Double Bed</Text>
                                <Text style={{fontSize:14}}>2. Food {'&'} Drink WiFi</Text>
                                <Text style={{fontSize:14}}>3. Room Service</Text>
                                <Text style={{fontSize:14}}>4. Smoking Room</Text>
                            </View>
                            <View style={{marginTop:15, marginLeft:10}}>
                                <Text style={{fontSize:14}}>Located at Banyuwangi, Light Room Full View 
                                to the beach. You can had some Party Time cause the PUB is available 
                                for everyone who stay at this Hotel's Room</Text>
                            </View>
                        </Card>
                    </View>
                </ScrollView>
                <Footer style={{backgroundColor:"#d9d9d9",borderTopColor:"grey", borderTopWidth:1, height:70}}>
                    <Left style={{marginLeft:10}}>
                        <Text style={{fontSize:16}}>Price/room/night</Text>
                    </Left>
                    <Body style={{marginLeft:10}}>
                        <Text style={{fontSize:24, color:"#F96E46"}}>Rp. 280.000</Text>
                    </Body>
                    <Right style={{marginRight:10}}>
                        <Button style={{backgroundColor:"#F96E46", borderRadius:10, width:100, alignItems:"center", justifyContent:"center"}} onPress={goToDetailRoom}>
                            <Text style={{color:"#FFF"}}>Select Room</Text>
                        </Button>
                    </Right>
                </Footer>
            </Container>
            </Drawer>
         );
    }
}
 
export default Detailhotel;