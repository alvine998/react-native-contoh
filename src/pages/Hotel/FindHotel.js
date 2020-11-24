import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../../components/Sidebar';

import loggo from '../../images/Putih_Full_Horizontal.png';
import cordoba from '../../images/img-hotel/cordoba.webp';


class CariHotel extends Component {
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
                    <Right/>
                </Header>
                <Content>
                    <View style={{flex:1, flexDirection:"column"}}>
                        <View style={{backgroundColor:"steelblue", height:50}}>
                            <View style={{flexDirection:"row"}}>
                                <Button primary transparent style={{borderWidth:1, width:100, marginLeft:10, height:40, marginTop:5}} >
                                    <Text style={{marginLeft:27, fontSize:20, color:'#FFF'}}>Filter</Text>
                                </Button>
                                <Button primary transparent style={{borderWidth:1, width:100, marginLeft:10, height:40, marginTop:5}} >
                                    <Text style={{marginLeft:20, fontSize:20, color:'#FFF'}}>Promo</Text>
                                </Button>
                                <Button primary transparent style={{borderWidth:1, width:90, marginLeft:10, height:40, marginTop:5}} >
                                    <Text style={{marginLeft:20, fontSize:20, color:'#FFF'}}>Hotel</Text>
                                </Button>
                                <Button primary transparent style={{borderWidth:1, width:90, marginLeft:10, height:40, marginTop:5}} >
                                    <Text style={{marginLeft:25, fontSize:20, color:'#FFF'}}>Villa</Text>
                                </Button>
                            </View>
                        </View>
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
                                    fontSize:14,
                                    width: "90%",
                                    padding:2,
                                }}
                            />
                        </View>
                        <ScrollView>
                            {/* <View style={{borderWidth:1, height:200, width:400, margin:10}}>
                                
                            </View> */}

                            <Card>
                            <View style={{flex:1, flexDirection:"row"}}>
                            <Image source={cordoba} style={{height:200, width:200, alignItems:'center'}} />
                                    <Text style={{fontSize:18, marginLeft:10}}>Hotel Cordoba{"\n"}Price :{"\n"}Rp.450.000,-</Text>
                            </View>
                                       
                            </Card>
                            <Card>
                                <View style={{flex:1, flexDirection:"row"}}>
                                    <Image source={cordoba} style={{height:200, width:200, alignItems:'center'}} />
                                    <Text style={{fontSize:20, marginLeft:10}}>Hotel Cordoba</Text>
                                </View>
                            </Card>
                            <Card>
                                <View style={{flex:1, flexDirection:"row"}}>
                                    <Image source={cordoba} style={{height:200, width:200, alignItems:'center'}} />
                                    <Text style={{fontSize:20, marginLeft:10}}>Hotel Cordoba</Text>
                                </View>
                            </Card>
                            <Card>
                                <View style={{flex:1, flexDirection:"row"}}>
                                    <Image source={cordoba} style={{height:200, width:200, alignItems:'center'}} />
                                    <Text style={{fontSize:20, marginLeft:10}}>Hotel Cordoba</Text>
                                </View>
                            </Card>
                        </ScrollView>
                    </View>
                </Content>
                
                    
            
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
        height:60,
        margin:8,
        width:150
    }
})
 
export default CariHotel;