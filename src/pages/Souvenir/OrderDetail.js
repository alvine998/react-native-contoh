import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {Header, Container, Left, Right, Form, Body, Icon, Title, Content, Button, Picker} from 'native-base';
import { Actions } from 'react-native-router-flux';

import baju from '../../images/souvenir/baju.jpg';
import batik from '../../images/souvenir/batik.jpg';
import osing from '../../images/souvenir/osingdeles.png';
import BoxSlider2 from '../../components/SliderBoxSouvenir';


class DetailOrder extends Component {
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
                        <Title>Order Here</Title>
                    </Body>
                    <Right/>
                </Header>
                <BoxSlider2/>
                <View style={{margin:20}}>
                      <Text style={{fontSize:20}}>Baju Osing Deles</Text>
                      <Text style={{fontSize:16}}>Stok : 100</Text>
                      <Text style={{fontSize:16}}>Price : Rp.250.000,-</Text>
                    </View>

                    <View style={{marginLeft:20}}>
                          <Button primary style={{width:180, backgroundColor:"#229BD7", borderRadius:20}}>
                            <Image source={osing} style={{width:60, height:30, marginLeft:10}} />
                            <Text style={{color:"#FFF", fontSize:16, marginRight:20}}>View Profile</Text>
                          </Button>
                    </View>

                    <View style={{marginLeft:20, marginTop:20}}>
                      <Text style={{fontSize:18}}>Ukuran: </Text>
                      <Form style={{width:100, backgroundColor:"#229BD7"}}>
                          <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                            <Picker.Item label="S" value="key1" />
                            <Picker.Item label="M" value="key2" />
                            <Picker.Item label="L" value="key3" />
                            <Picker.Item label="XL" value="key4" />
                          </Picker>
                      </Form>
                    </View>

                    <View>
                      <Button full success style={{marginTop:70, backgroundColor:"#F96E46", height:70}}>
                        <Title>Beli</Title>
                      </Button>
                    </View>
                {/* <View style={{ flex:1 , flexDirection:"column", marginTop:20 }}>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:300, width:250, backgroundColor:"#229BD7"}}>
                            <Image source={} />
                        </View>
                    </View>
                </View> */}
            </Container>
         );
    }
}
 
export default DetailOrder;