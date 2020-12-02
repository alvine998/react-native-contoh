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
import osing from '../../images/souvenir/osingdeles.png';
import isun from '../../images/souvenir/isun.png';
import sun from '../../images/souvenir/sunosing.jpg';
import pelangi from '../../images/souvenir/pelangi.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';


class ScreenSouvenir extends Component {
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
                            <Icon type={"FontAwesome5"} name="search" style={{color:"#FFF"}} />
                        </Right>
                    </Header>
                    <ScrollView>
                    <View style={{flex:1, flexDirection:"column",  marginTop:20}}>
                        <View style={{alignItems:"center"}}>
                            <Image source={store} style={{width:100, height:100}} />
                            <Text style={{fontSize:16}}>Cari-Souvenir</Text>
                        </View>
                        
                            <View style={{flexDirection:"row", marginTop:20, marginLeft:10}}>
                                <TouchableOpacity>
                                    <Card>
                                        <Image source={osing} style={{width:200, height:100, marginTop:10}} />
                                        <Text style={{fontSize:20, textAlign:"center"}}>Osing Deles</Text>
                                        <Text style={{fontSize:16, textAlign:"center"}}>Original Merchandise{"\n"} of Banyuwangi Culture</Text>
                                        <Text style={{fontSize:20, textAlign:"center"}}></Text>
                                    </Card>
                                </TouchableOpacity>
                                
                                <TouchableOpacity>
                                    <Card>
                                        <Image source={isun} style={{width:200, height:100, marginTop:10}} />
                                        <Text style={{fontSize:20, textAlign:"center"}}>Osing Deles</Text>
                                        <Text style={{fontSize:16, textAlign:"center"}}>Original Merchandise{"\n"} of Banyuwangi Culture</Text>
                                        <Text style={{fontSize:20, textAlign:"center"}}></Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:"row", marginTop:20, marginLeft:10}}>
                                <TouchableOpacity>
                                    <Card>
                                        <Image source={pelangi} style={{width:200, height:100, marginTop:10}} />
                                        <Text style={{fontSize:20, textAlign:"center"}}>Osing Deles</Text>
                                        <Text style={{fontSize:16, textAlign:"center"}}>Original Merchandise{"\n"} of Banyuwangi Culture</Text>
                                        <Text style={{fontSize:20, textAlign:"center"}}></Text>
                                    </Card>
                                </TouchableOpacity>
                                
                                <TouchableOpacity>
                                    <Card>
                                        <Image source={sun} style={{width:200, height:100, marginTop:10}} />
                                        <Text style={{fontSize:20, textAlign:"center"}}>Osing Deles</Text>
                                        <Text style={{fontSize:16, textAlign:"center"}}>Original Merchandise{"\n"} of Banyuwangi Culture</Text>
                                        <Text style={{fontSize:20, textAlign:"center"}}></Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:"row", marginTop:20, marginLeft:10}}>
                                <TouchableOpacity>
                                    <Card>
                                        <Image source={isun} style={{width:200, height:100, marginTop:10}} />
                                        <Text style={{fontSize:20, textAlign:"center"}}>Osing Deles</Text>
                                        <Text style={{fontSize:16, textAlign:"center"}}>Original Merchandise{"\n"} of Banyuwangi Culture</Text>
                                        <Text style={{fontSize:20, textAlign:"center"}}></Text>
                                    </Card>
                                </TouchableOpacity>
                                
                                <TouchableOpacity>
                                    <Card>
                                        <Image source={osing} style={{width:200, height:100, marginTop:10}} />
                                        <Text style={{fontSize:20, textAlign:"center"}}>Osing Deles</Text>
                                        <Text style={{fontSize:16, textAlign:"center"}}>Original Merchandise{"\n"} of Banyuwangi Culture</Text>
                                        <Text style={{fontSize:20, textAlign:"center"}}></Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        
                    </View>          
                    </ScrollView>
                                  
                </Container>
            </Drawer>
            
         );
    }
}
 
export default ScreenSouvenir;