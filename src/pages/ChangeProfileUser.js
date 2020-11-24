import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title,Item, Label, Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/Sidebar';
import Searchbar from '../components/SearchBar';
import img from '../images/htl.png';
import bag from '../images/kpr.png';
import newf from '../images/logo.png';
import loggo from '../images/Putih_Full_Horizontal.png';
import store from '../images/store.png';
import car from '../images/cart.png';
import ggg from '../images/fl.png';

class UbahProfil extends Component {


    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left"/>
                    </Left>
                    <Body>
                        <Title>Edit Your Profile</Title>
                    </Body>
                    <Right>
                        <Icon type={"FontAwesome5"} name="check" />
                    </Right>
                </Header>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{backgroundColor:"steelblue", height:250, borderBottomRightRadius:40, borderBottomLeftRadius:40}}>
                        <View style={[styles.profileImgContainer, {borderWidth:1, borderColor:'blue', marginLeft:150, marginTop:30}]}>
                            <Image source={ggg} style={[styles.profileImg, {height:150, width:150}]} />
                            
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{marginLeft:150, marginTop:20, fontSize:20}}>Change Photos</Text>
                            <Icon type={"FontAwesome5"} name="pen-square" />
                        </View>
                        
                    </View>
                    <View style={{backgroundColor:"#FFF", height: 500}}>
                        <View style={{flexDirection:"column", marginTop:50}}>
                            <Text style={{marginLeft:20, marginTop:20, fontSize:20}}>Name :</Text>
                            <TextInput
                                style={{
                                    height:35, 
                                    width:400,
                                    marginTop:20,
                                    marginLeft:20,
                                    borderBottomWidth:1,
                                    borderBottomColor:"#161924"
                                }}
                                placeholder="Annisa"
                            />
                        </View>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{marginLeft:20, marginTop:20, fontSize:20}}>Email :</Text>
                            <TextInput
                                style={{borderBottomWidth:1, 
                                    height:35, 
                                    width:400,
                                    marginTop:20,
                                    marginLeft:20
                                }}
                                placeholder="annisasamara@gmail.com"
                            />
                        </View>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{marginLeft:20, marginTop:20, fontSize:20}}>No HP :</Text>
                            <TextInput
                                style={{borderBottomWidth:1, 
                                    height:35, 
                                    width:400,
                                    marginTop:20,
                                    marginLeft:20,
                                    borderBottomColor:"black"
                                }}
                                placeholder="085699556561"
                            />
                        </View>
                    </View>
                </View>
            </Container>
         );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        height:60,
        margin:8,
        width:150
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    profileImgContainer:{
        height:150,
        width:150,
        borderRadius:80,
        overflow: 'hidden',
    },
    profileImage:{
        
        height:30,
        width:30,
        borderRadius:40,
    }
})
 
export default UbahProfil;