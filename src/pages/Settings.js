import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {Header, Container, Left, Right, Body, Icon, Title, Content, Button} from 'native-base';

class Pengaturan extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} />
                    </Left>
                    <Body>
                        <Title>Setting</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={{backgroundColor:"#DFDFDF"}}>
                    <View style={{flexDirection:"column", flex:1}}>
                        <Text style={{fontSize:20, margin:20}}>Preferention</Text>
                        <View style={{backgroundColor:"#FFF", flexDirection:"row", height:50}}>
                            <TouchableHighlight>
                                <Button full transparent>
                                    <Text style={{fontSize:16, marginLeft:20}}>Country</Text>
                                    <Text style={{fontSize:16, marginLeft:250}}>Indonesia</Text>
                                    <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7", marginTop:0}} />
                                </Button>
                            </TouchableHighlight>
                        </View>
                        <View style={{backgroundColor:"#FFF", flexDirection:"row", height:50, marginTop:5}}>
                            <TouchableHighlight>
                                <Button full transparent>
                                    <Text style={{fontSize:16, marginLeft:18}}>Currency</Text>
                                    <Text style={{fontSize:16, marginLeft:265}}>Rupiah</Text>
                                    <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7"}} />
                                </Button>
                            </TouchableHighlight>
                        </View>
                        <View style={{backgroundColor:"#FFF", flexDirection:"row", height:50, marginTop:5}}>
                            <TouchableHighlight>
                                <Button full transparent>
                                    <Text style={{fontSize:16, marginLeft:18}}>Language</Text>
                                    <Text style={{fontSize:16, marginLeft:255}}>English</Text>
                                    <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7"}} />
                                </Button>
                            </TouchableHighlight>
                        </View>

                        <View style={{backgroundColor:"#FFF", flexDirection:"row", height:50, marginTop:20}}>
                            <TouchableHighlight>
                                <Button full transparent>
                                    <Text style={{fontSize:16, marginLeft:17}}>App Version</Text>
                                    <Text style={{fontSize:16, marginLeft:250}}>1.0.0</Text>
                                </Button>
                            </TouchableHighlight>
                        </View>
                        <View style={{backgroundColor:"#FFF", flexDirection:"row", height:50, marginTop:5}}>
                            <TouchableHighlight>
                                <Button full transparent>
                                    <Text style={{fontSize:16, marginLeft:17}}>Terms & Conditions</Text>
                                    <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7", marginLeft:253}} />
                                </Button>
                            </TouchableHighlight>
                        </View>
                        <View style={{backgroundColor:"#FFF", flexDirection:"row", height:50, marginTop:5}}>
                            <TouchableHighlight>
                                <Button full transparent>
                                    <Text style={{fontSize:16, marginLeft:18}}>Policy Privacy</Text>
                                    <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#229BD7", marginLeft:292}} />
                                </Button>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Content>
                
            </Container>
         );
    }
}
 
export default Pengaturan;