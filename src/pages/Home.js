import React, { Component } from 'react';
import { View, Text, TextInput , Dimensions, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/Sidebar';
import Searchbar from '../components/SearchBar';
import Preview from './Preview';

import img from '../images/htl.png';
import bag from '../images/kpr.png';
import newf from '../images/logo.png';
import loggo from '../images/Putih_Full_Horizontal.png';
import store from '../images/store.png';
import car from '../images/cart.png';
import trav from '../images/tl2.jpg';
import trav2 from '../images/tl3.jpg';
import trav3 from '../images/tl4.jpg';
import trav4 from '../images/tl5.jpg';



import FlatListSlider from '../components/FlatlistSlider/FlatlistSlider';
import BoxSlider from '../components/SliderBox';
import { Actions } from 'react-native-router-flux';



class Screens extends Component {
    closeDrawer(){
        this._drawer._root.close()     
    };
    openDrawer(){
        this._drawer._root.open()
    };

    render() { 
        const goToHotel = () => {
            Actions.choose()
        }
        const goToPickUp = () => {
            Actions.pickup()
        }
        const goToSouvenir = () => {
            Actions.introsouvenir()
        }
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
                <ScrollView>
                <BoxSlider/>
                <Content padder>
                    <Card>
                    </Card>

                    <Card>
                        <Text style={{textAlign:'center', fontSize:20, marginTop:10}}>Main Menu</Text>
                        <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Button primary style={[styles.buttonContainer, {borderRadius:20, alignItems:"center", justifyContent:"center", backgroundColor:"#229BD7"}]} onPress={goToHotel}>
                                <View style={{alignItems:"center", justifyContent:"center"}}>
                                    <Image source={img} style={{width:50, height:50}} />
                                    <Text style={{textAlign:"center", color:"#FFF", fontSize:16}}>Hotel</Text>
                                </View> 
                            </Button>
                            <Button primary transparent style={[styles.buttonContainer,  {borderRadius:20, alignItems:"center", justifyContent:"center", backgroundColor:"#229BD7"}]}>
                            <View style={{alignItems:"center", justifyContent:"center"}}>
                                <Image source={bag} style={{width:40, height:40}} />
                                <Text style={{textAlign:"center", color:"#FFF", fontSize:16}}>Travelling Kit</Text>
                            </View>
                            </Button>
                        </View>
                        <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center', marginBottom:20}}>
                            <Button primary transparent style={[styles.buttonContainer, {borderRadius:20, alignItems:"center", justifyContent:"center", backgroundColor:"#229BD7"}]} onPress={goToSouvenir}>
                                <View style={{alignItems:"center", justifyContent:"center"}} >
                                    <Image source={store} style={{width:50, height:50}} />
                                    <Text style={{textAlign:"center", color:"#FFF", fontSize:16}}>Souvenir</Text>
                                </View>    
                            </Button>
                            <Button primary transparent style={[styles.buttonContainer, {borderRadius:20, alignItems:"center", justifyContent:"center", backgroundColor:"#229BD7"}]} onPress={goToPickUp}>
                                <View style={{alignItems:"center", justifyContent:"center"}}>
                                    <Image source={car} style={{width:70, height:50 }} />
                                    <Text style={{textAlign:"center", color:"#FFF", fontSize:16}}>Pick Up Service</Text>
                                </View> 
                            </Button>
                        </View>
                    </Card>

                    <Card>
                        <Text style={{fontSize:20, textAlign:'center', marginBottom:10}}>Promo Paket Wisata</Text>
                        <CardItem cardBody>
                            <Image source={trav} style={{height:300, width:null, flex:1}} />
                        </CardItem>
                        <View style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                            <Icon type={"FontAwesome5"} name="thumbs-up" style={{color:"#229BD7"}}/>
                            <Text style={{fontSize:16}}>35</Text>
                        </View>
                        <CardItem cardBody style={{marginTop:20}}>
                            <Image source={trav2} style={{height:300, width:null, flex:1}} />
                        </CardItem>
                        <View style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                            <Icon type={"FontAwesome5"} name="thumbs-up" style={{color:"#229BD7"}}/>
                            <Text style={{fontSize:16}}>35</Text>
                        </View>
                        <CardItem cardBody style={{marginTop:20}}>
                            <Image source={trav3} style={{height:300, width:null, flex:1}} />
                        </CardItem>
                        <View style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                            <Icon type={"FontAwesome5"} name="thumbs-up" style={{color:"#229BD7"}}/>
                            <Text style={{fontSize:16}}>35</Text>
                        </View>
                        <CardItem cardBody style={{marginTop:20}}>
                            <Image source={trav4} style={{height:300, width:null, flex:1}} />
                        </CardItem>
                        <View style={{alignItems:"center", justifyContent:"center", flexDirection:"row", marginBottom:20}}>
                            <Icon type={"FontAwesome5"} name="thumbs-up" style={{color:"#229BD7"}}/>
                            <Text style={{fontSize:16}}>35</Text>
                        </View>
                    </Card>

                    <Card>

                    </Card>
                </Content>
                </ScrollView>
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
        height:100,
        margin:8,
        width:100
    }
})
 
export default Screens;