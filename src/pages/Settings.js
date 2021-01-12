import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {Header, Container, Left, Right, Body, Icon, Title, Content, Button, ListItem} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { StyleSheet } from 'react-native';

class Pengaturan extends Component {
    state = {  }
    render() { 
        const goToHome = () => {
            Actions.home()
        }

        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} onPress={goToHome}/>
                    </Left>
                    <Body>
                        <Title style={styles.title} >Setting</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={{backgroundColor:"#DFDFDF"}}>

                    {/* Ini codingan Akun & Keamanan */}
                    <ListItem icon style={{marginTop:0, justifyContent:'center', alignItems:'center'}}>
                        <Left>
                            <Icon type={'FontAwesome5'} name="lock" style={{color:'#229BD7'}}/>
                        </Left>
                        <Body/>
                        <Right>
                            <Text style={styles.head}>Akun & Keamanan</Text>
                        </Right>
                    </ListItem>
                    <Content style={{backgroundColor:'white'}}>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Informasi Akun</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Pengaturan Keamanan</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                    </Content>

                    {/* Ini Codingan Umum */}
                    <ListItem icon style={{marginTop:0, justifyContent:'center', alignItems:'center'}}>
                        <Left>
                            <Icon type={'FontAwesome5'} name="cog" style={{color:'#229BD7', width:responsiveWidth(10)}}/>
                        </Left>
                        <Body/>
                        <Right>
                            <Text style={styles.head}>Umum</Text>
                        </Right>
                    </ListItem>
                    <Content style={{backgroundColor:'white'}}>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Lokasi</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Bahasa</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Notifikasi</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                    </Content>

                    {/* Ini Codingan Tentang Kami */}
                    <ListItem icon style={{marginTop:0, justifyContent:'center', alignItems:'center'}}>
                        <Left>
                            <Icon type={'FontAwesome5'} name="question-circle" style={{color:'#229BD7', width:responsiveWidth(10)}}/>
                        </Left>
                        <Body/>
                        <Right>
                            <Text style={styles.head}>Tentang Kami</Text>
                        </Right>
                    </ListItem>
                    <Content style={{backgroundColor:'white'}}>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Tentang Carikamar</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Syarat & Ketentuan</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Kebijakan Privasi</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Versi App</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Icon type={'FontAwesome5'} name="chevron-right" style={{color:'#229BD7'}} />
                            </Right>
                        </ListItem>
                    </Content>
                    
                    {/* <View style={{flexDirection:"column", flex:1}}>
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
                    </View> */}
                </Content>
                
            </Container>
         );
    }
}
 
const styles = StyleSheet.create({
    text:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2)
    },
    title:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2.5)
    },
    head:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2),
        color:'#229BD7'
    }
})
export default Pengaturan;