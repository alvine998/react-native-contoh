import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/Sidebar';
import Searchbar from '../components/SearchBar';
import img from '../images/htl.png';
import bag from '../images/kpr.png';
import newf from '../images/logo.png';
import loggo from '../images/Putih_Full_Horizontal.png';
import store from '../images/store.png';
import car from '../images/cart.png';
import ggg from '../images/fl.png';
import { Actions } from 'react-native-router-flux';

class Profil extends Component {
    closeDrawer(){
        this._drawer._root.close()     
    };
    openDrawer(){
        this._drawer._root.open()
    };

    render() { 
        const goToChange = () => {
            Actions.ubahprofil()
        }

        const goToHome = () => {
            Actions.home()
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
                            <Icon type={"FontAwesome"} name="chevron-left" style={{color:'white'}}/>                        
                    </Left>
                    <Body>
                        <Title style={{fontFamily:'BalooBhai-Regular', fontSize:25}}>Akun Saya</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'stretch'}}>
                        <View style={{height:700, backgroundColor:'#FFF'}}>
                            <View style={[styles.profileImgContainer, {borderWidth:1, borderColor:'blue', marginLeft:130, marginTop:30}]}>
                                <Image source={ggg} style={[styles.profileImg, {height:150, width:150}]} />
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginLeft:20, fontSize:20, marginTop:50, fontFamily:'BalooBhai-Regular'}}>ID : </Text>
                                <Text style={{marginLeft:50, fontSize:20, marginTop:50, fontFamily:'BalooBhai-Regular'}}>131002569</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginLeft:20, fontSize:20, marginTop:20,fontFamily:'BalooBhai-Regular'}}>Name : </Text>
                                <Text style={{marginLeft:20, fontSize:20, marginTop:20, fontFamily:'BalooBhai-Regular'}}>Annisa</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginLeft:20, fontSize:20, marginTop:20, fontFamily:'BalooBhai-Regular'}}>Email : </Text>
                                <Text style={{marginLeft:25, fontSize:20, marginTop:20, fontFamily:'BalooBhai-Regular'}}>annisasamara@gmail.com</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginLeft:20, fontSize:20, marginTop:20, fontFamily:'BalooBhai-Regular'}}>No HP : </Text>
                                <Text style={{marginLeft:20, fontSize:20, marginTop:20, fontFamily:'BalooBhai-Regular'}}>085699556165</Text>
                            </View>
                            <Button primary full rounded style={{margin:50, backgroundColor:'#229BD7'}}>
                                <Text style={{fontSize:20, color:'#FFF', fontFamily:'BalooBhai-Regular'}} onPress={goToChange}>Change</Text>
                            </Button>
                        </View>
                        
                    </View>
                    
                </Content>
                <Footer >
                    <FooterTab style={{backgroundColor:"#229BD7"}}>
                        <Button full>
                            <Text style={{color:"#FFF", fontFamily:'BalooBhai-Regular'}}>CariKamar.id</Text>
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
 
export default Profil;