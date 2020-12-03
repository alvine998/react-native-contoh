import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';
import {Header, Container, Left, Right, Form, Body, Icon, Title, Content, Button, Picker, Card} from 'native-base';
import { Actions } from 'react-native-router-flux';

import baju from '../../images/souvenir/baju.jpg';
import batik from '../../images/souvenir/batik.jpg';
import osing from '../../images/souvenir/osingdeles.png';
import { SafeAreaView } from 'react-navigation';

class ProdukS extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}}/>
                    </Left>
                    <Body>
                        <Title>Produk Osing Deles</Title>
                    </Body>
                    <Right>
                        <Image source={osing} style={{width:60, height:30}} />
                    </Right>
                </Header>
                
                    <ScrollView>
                        <View style={{flex:1, flexDirection:"column"}}>
                        <View style={{backgroundColor:"steelblue", height:50, flexDirection:"row",alignItems:"center", justifyContent:"center"}}>
                            <Button transparent>
                                <Title>Terpopuler | </Title>
                            </Button>
                            <Button transparent>
                                <Title>Terbaru | </Title>
                            </Button>
                            <Button transparent>
                                <Title>Harga</Title>
                            </Button>
                        </View>
                        <View style={{flexDirection:"row", margin:10}}>
                            <TouchableOpacity>
                                <Card>
                                    <Image source={baju} style={{width:200, height:250}}/>
                                    <View style={{marginTop:10, marginBottom:10}}>
                                        <Text style={{textAlign:"center", fontSize:18}}>Baju Osing Deles</Text>
                                        <Text style={{textAlign:"center", fontSize:18, color:"#F96E46"}}>Rp.150.000,-</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card>
                                    <Image source={batik} style={{width:200, height:250}}/>
                                    <View style={{marginTop:10, marginBottom:10}}>
                                        <Text style={{textAlign:"center", fontSize:18}}>Batik Osing Deles</Text>
                                        <Text style={{textAlign:"center", fontSize:18, color:"#F96E46"}}>Rp.150.000,-</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row", margin:10}}>
                            <TouchableOpacity>
                                <Card>
                                    <Image source={batik} style={{width:200, height:250}}/>
                                    <View style={{marginTop:10, marginBottom:10}}>
                                        <Text style={{textAlign:"center", fontSize:18}}>Baju Osing Deles</Text>
                                        <Text style={{textAlign:"center", fontSize:18, color:"#F96E46"}}>Rp.150.000,-</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card>
                                    <Image source={baju} style={{width:200, height:250}}/>
                                    <View style={{marginTop:10, marginBottom:10}}>
                                        <Text style={{textAlign:"center", fontSize:18}}>Baju Osing Deles</Text>
                                        <Text style={{textAlign:"center", fontSize:18, color:"#F96E46"}}>Rp.150.000,-</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row", margin:10}}>
                            <TouchableOpacity>
                                <Card>
                                    <Image source={baju} style={{width:200, height:250}}/>
                                    <View style={{marginTop:10, marginBottom:10}}>
                                        <Text style={{textAlign:"center", fontSize:18}}>Baju Osing Deles</Text>
                                        <Text style={{textAlign:"center", fontSize:18, color:"#F96E46"}}>Rp.150.000,-</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card>
                                    <Image source={batik} style={{width:200, height:250}}/>
                                    <View style={{marginTop:10, marginBottom:10}}>
                                        <Text style={{textAlign:"center", fontSize:18}}>Baju Osing Deles</Text>
                                        <Text style={{textAlign:"center", fontSize:18, color:"#F96E46"}}>Rp.150.000,-</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </ScrollView>
                
                
            </Container>
         );
    }
}
 
export default ProdukS;