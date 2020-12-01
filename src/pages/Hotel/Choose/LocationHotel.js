import React, { Component } from 'react';
import{Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Button,Drawer, Label, Left, Body, Right, Container, Icon, Header, Title, Content, View} from 'native-base';
import { Actions } from 'react-native-router-flux';

class HotelLocation extends Component {
    state = {  }
    render() { 
        const goToBack = () => {
            Actions.choose()
        }
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} onPress={goToBack}/>
                    </Left>
                    <Body>
                        <Title>Select Location</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        height: 40,
                        padding: 0,
                        marginLeft: 2,
                        marginRight: 2,
                        marginBottom: 5,
                        marginTop: 5,
                        borderWidth: 1,
                        borderColor: '#161924',
                        borderRadius: 60,
                        }}>
                            <Icon type={"FontAwesome"} name="search" fontSize={25} style={{marginLeft:8}} />
                            <TextInput
                                placeholder="Type here ..."
                                placeholderTextColor={'#161924'}
                                style={{
                                    fontSize:20,
                                    width: "90%",
                                    padding:2,
                                    marginLeft:10
                                }}
                            />
                 </View>
                 <Button transparent>
                    <Text style={{fontSize:20, marginLeft:130}}>Nearby your location</Text>
                 </Button>
                 <View style={{flexDirection:'column'}}>
                    <View style={{backgroundColor:'grey', height:40, justifyContent:'center'}}>
                        <Button transparent>
                        <Text style={{fontSize:20, marginLeft:20}}>Popular Destination</Text>
                        </Button>
                    </View>
                    <View style={{height:50, borderBottomWidth:1}}>
                        <Button transparent>
                            <Text style={{fontSize:20, marginLeft:20}}>Banyuwangi</Text>
                            <Right><Text>1000 Hotels</Text></Right>
                        </Button>
                    </View>
                    <View style={{height:50, borderBottomWidth:1}}>
                        <Button transparent>
                            <Text style={{fontSize:20, marginLeft:20}}>Kediri</Text>
                            <Right><Text>1000 Hotels</Text></Right>
                        </Button>
                    </View>
                    <View style={{height:50, borderBottomWidth:1}}>
                        <Button transparent>
                            <Text style={{fontSize:20, marginLeft:20}}>Pacitan</Text>
                            <Right><Text>1000 Hotels</Text></Right>
                        </Button>
                    </View>
                    <View style={{height:50, borderBottomWidth:1}}>
                        <Button transparent>
                            <Text style={{fontSize:20, marginLeft:20}}>Blitar</Text>
                            <Right><Text>1000 Hotels</Text></Right>
                        </Button>
                    </View>
                    <View style={{height:50, borderBottomWidth:1}}>
                    <Button transparent>
                            <Text style={{fontSize:20, marginLeft:20}}>Trenggalek</Text>
                            <Right><Text>1000 Hotels</Text></Right>
                        </Button>
                    </View>
                 </View>
            </Container>
         );
    }
}
 
export default HotelLocation;
