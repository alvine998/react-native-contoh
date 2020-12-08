import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView} from 'react-native';
import {Header, Container,ListItem,CheckBox, Left, Right, Form, Body, Icon, Title, Content, Button, Picker, Footer, FooterTab} from 'native-base';
import { Actions } from 'react-native-router-flux';

import baju from '../../images/souvenir/baju.jpg';
import batik from '../../images/souvenir/batik.jpg';
import osing from '../../images/souvenir/osingdeles.png';

class KeranjangS extends Component {
    state = {  }
    constructor(props) {
        super(props);
        this.state = {
          selected: "key1"
        };
      }
      onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}}/>
                    </Left>
                    <Body>
                        <View style={{flexDirection:"row"}}>
                            <Icon type={"FontAwesome5"} name="shopping-cart" style={{color:"white"}} />
                            <Title style={{marginLeft:10}}>My Cart</Title>
                        </View>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <Content>
                        <View style={{flex:1, flexDirection:"column"}}>
                            <View style={{backgroundColor:"steelblue", height:50}}>
                                <View style={{margin:10, flexDirection:"row"}}>
                                    <Image source={osing} style={{width:60, height:30}} />
                                    <Icon type={"FontAwesome5"} name="chevron-right" style={{marginLeft:10, color:"white"}}/>
                                    <Right>
                                        <Text style={{fontSize:16, color:"white"}}>Delete</Text>
                                    </Right>
                                </View>
                            </View>
                            <View style={{backgroundColor:"steelblue", height:180, marginTop:1}}>
                                <View style={{margin:10, flexDirection:"row"}}>
                                    <Image source={baju} style={{width:100, height:150}} />
                                    <View style={{marginLeft:10}}>
                                        <View style={{flexDirection:"row"}}>
                                            <Text style={{fontSize:18, color:"white"}}>Baju Osing Deles</Text>
                                            <Icon type={"FontAwesome5"} name="trash-alt" style={{color:"white", marginLeft:130}} />
                                        </View>
                                        <Text style={{fontSize:16, color:"white"}}>Ukuran: </Text>
                                        <Form style={{width:100, backgroundColor:"steelblue"}}>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                headerStyle={{ backgroundColor: "#b95dd3" }}
                                                headerBackButtonTextStyle={{ color: "#fff" }}
                                                headerTitleStyle={{ color: "#fff" }}
                                                labelStyle={{color:"white"}}
                                                selectedValue={this.state.selected}
                                                onValueChange={this.onValueChange.bind(this)}
                                                >
                                                <Picker.Item label="S" value="key1" />
                                                <Picker.Item label="M" value="key2" />
                                                <Picker.Item label="L" value="key3" />
                                                <Picker.Item label="XL" value="key4" />
                                            </Picker>
                                        </Form>
                                        <Text style={{fontSize:16, color:"white"}}>Jumlah: </Text>
                                        <View style={{flexDirection:"row"}}>
                                        <Text style={{fontSize:16, color:"white"}}>1</Text>
                                        </View>
                                       
                                        <Text style={{fontSize:16, color:"white"}}>Rp.150.000,-</Text>
                                        
                                    </View>
                                </View>
                            </View>
                            <View style={{marginTop:20, alignItems:"center"}}>
                                <Icon type={"FontAwesome5"} name="plus-circle" style={{color:"green"}} />
                            </View>
                            
                        </View>
                    </Content>
                    
                </ScrollView>
                <Footer style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Title style={{marginLeft:10}}>Sub Total : </Title>
                    </Left>
                    <Body>
                        <Title>Rp.150.000,-</Title>
                    </Body>
                    <Right>
                        <Button success style={{width:100, marginRight:10,alignItems:"center", justifyContent:"center", backgroundColor:"#F96E46"}}>
                            <Title style={{textAlign:"center"}}>Checkout</Title>
                        </Button>
                    </Right>      
                </Footer>
            </Container>
         );
    }
}
 
export default KeranjangS;