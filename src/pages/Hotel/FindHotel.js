import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../../components/Sidebar';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import HotelModal from '../../components/ModalHotel';
import Slider from '@react-native-community/slider';


import loggo from '../../images/Putih_Full_Horizontal.png';
import cordoba from '../../images/img-hotel/cordoba.webp';

// Import hotel
import joglo from '../../images/img-hotel/joglo.jpg';
import ijen from '../../images/img-hotel/ijen-resort.jpg';
import micasa from '../../images/img-hotel/micasa.jpg';
import kokoon from '../../images/img-hotel/kokoon-2.jpg';
import solong from '../../images/img-hotel/solong.jpg';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



class CariHotel extends Component {
    // closeDrawer(){
    //     this._drawer._root.close()     
    // };
    // openDrawer(){
    //     this._drawer._root.open()
    // };

    render() { 
        const goToDetailHotel = () => {
            Actions.detailhotel()
        }
        return ( 
            // <Drawer
            //     ref={(ref) => {this._drawer = ref;}}
            //     content={<SideBar navigator={this.navigator} />}
            //     onClose={() => this.closeDrawer()}
            // >
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <TouchableOpacity>
                            <Icon type={"FontAwesome5"} name="chevron-left" style={{color:'white'}}/>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={styles.title}>Sekitar Saya</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Icon type={"FontAwesome5"} name="sliders-h" style={{color:'#fff'}} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={{flex:1, flexDirection:"column"}}>
                        <View style={{backgroundColor:"#229BD7", height:50}}>
                            <View style={{alignItems:'center'}}>
                                <View style={{
                                    borderWidth:1,
                                    width:responsiveWidth(90),
                                    height:responsiveHeight(5),
                                    borderColor:'white',
                                    borderRadius:20,
                                    
                                }}>
                                    <View style={{flexDirection:'row', marginTop:8, marginLeft:8}}>
                                        <Text style={styles.textcontainer}>14 Feb 2021, </Text>
                                        <Text style={styles.textcontainer}>1 Malam | </Text>
                                        <Text style={styles.textcontainer}>1 Kamar, </Text>
                                        <Text style={styles.textcontainer}>1 Dewasa</Text>
                                        <TouchableOpacity style={{marginLeft:50}}>
                                            <Text style={styles.textcontainer}>Ubah</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ScrollView horizontal={true} style={{marginTop:10, marginLeft:10, flexDirection:'row'}}>
                            <TouchableOpacity style={{
                                borderWidth:1,
                                borderRadius:30,
                                width:responsiveWidth(30),
                                height:responsiveHeight(5),
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:'#229BD7',
                                borderColor:'steelblue'
                            }}>
                                <Text style={styles.title}>Semua</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                borderWidth:1,
                                borderRadius:30,
                                width:responsiveWidth(30),
                                height:responsiveHeight(5),
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:'#fff',
                                borderColor:'steelblue',
                                marginLeft:5
                            }}>
                                <Text style={styles.titleTab}>Hotel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                borderWidth:1,
                                borderRadius:30,
                                width:responsiveWidth(30),
                                height:responsiveHeight(5),
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:'#fff',
                                borderColor:'steelblue',
                                marginLeft:5
                            }}>
                                <Text style={styles.titleTab}>Villa</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                borderWidth:1,
                                borderRadius:30,
                                width:responsiveWidth(30),
                                height:responsiveHeight(5),
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:'#fff',
                                borderColor:'steelblue',
                                marginLeft:5
                            }}>
                                <Text style={styles.titleTab}>Homestay</Text>
                            </TouchableOpacity>
                        </ScrollView>
                        <View style={{flexDirection:'row', margin:10}}>
                            <Icon type={'FontAwesome5'} name="map-marker-alt" style={{color:'#229BD7'}} />
                            <Text style={[styles.fontContainer, {marginLeft:10, marginTop:10}]}>Banyuwangi, Jawa Timur</Text>
                        </View>
                        <ScrollView>
                            {/* <View style={{borderWidth:1, height:200, width:400, margin:10}}>
                                
                            </View> */}

                            <TouchableOpacity onPress={goToDetailHotel}>
                            <Card>
                                <View style={{flexDirection:"row", alignItems:'center'}}>
                                    <Image source={ijen} style={{height:responsiveHeight(20), width:responsiveWidth(40)}} />
                                    <View>
                                        <Text style={[styles.textFont, {textAlign:'left'}]}>Jiwa Jawa Ijen Resort</Text>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Bintang 5 </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| 200m dari lokasiku</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.font, {textAlign:'center', color:'#00af87'}]}>TripAdvisor </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Luar Biasa, 20 Ulasan</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Gratis Sarapan </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Maks. 2 Orang</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontMoney, {textAlign:'center'}]}>Rp 727,000</Text>
                                        </View>
                                    </View>
                                </View>                                      
                            </Card>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={goToDetailHotel}>
                            <Card>
                                <View style={{flexDirection:"row", alignItems:'center'}}>
                                    <Image source={joglo} style={{height:responsiveHeight(20), width:responsiveWidth(40)}} />
                                    <View>
                                        <Text style={[styles.textFont, {textAlign:'left'}]}>Kampoeng Joglo Ijen</Text>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Bintang 5 </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| 200m dari lokasiku</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.font, {textAlign:'center', color:'#00af87'}]}>TripAdvisor </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Luar Biasa, 20 Ulasan</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Gratis Sarapan </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Maks. 2 Orang</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontMoney, {textAlign:'center'}]}>Rp 422,000</Text>
                                        </View>
                                    </View>
                                </View>                                      
                            </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={goToDetailHotel}>
                            <Card>
                                <View style={{flexDirection:"row", alignItems:'center'}}>
                                    <Image source={micasa} style={{height:responsiveHeight(20), width:responsiveWidth(40)}} />
                                    <View>
                                        <Text style={[styles.textFont, {textAlign:'left'}]}>Micasa Guest House</Text>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Bintang 5 </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| 200m dari lokasiku</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.font, {textAlign:'center', color:'#00af87'}]}>TripAdvisor </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Luar Biasa, 20 Ulasan</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Gratis Sarapan </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Maks. 2 Orang</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontMoney, {textAlign:'center'}]}>Rp 525,000</Text>
                                        </View>
                                    </View>
                                </View>                                      
                            </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={goToDetailHotel}>
                            <Card>
                                <View style={{flexDirection:"row", alignItems:'center'}}>
                                    <Image source={solong} style={{height:responsiveHeight(20), width:responsiveWidth(40)}} />
                                    <View>
                                        <Text style={[styles.textFont, {textAlign:'left'}]}>Villa Solong</Text>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Bintang 5 </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| 200m dari lokasiku</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.font, {textAlign:'center', color:'#00af87'}]}>TripAdvisor </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Luar Biasa, 20 Ulasan</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Gratis Sarapan </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Maks. 2 Orang</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontMoney, {textAlign:'center'}]}>Rp 576,000</Text>
                                        </View>
                                    </View>
                                </View>                                      
                            </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={goToDetailHotel}>
                            <Card>
                                <View style={{flexDirection:"row", alignItems:'center'}}>
                                    <Image source={kokoon} style={{height:responsiveHeight(20), width:responsiveWidth(40)}} />
                                    <View>
                                        <Text style={[styles.textFont, {textAlign:'left'}]}>Hotel Kokoon Banyuwangi</Text>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Bintang 5 </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| 200m dari lokasiku</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.font, {textAlign:'center', color:'#00af87'}]}>TripAdvisor </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Luar Biasa, 20 Ulasan</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>Gratis Sarapan </Text>
                                            <Text style={[styles.fontContainer, {textAlign:'center'}]}>| Maks. 2 Orang</Text>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10}}>
                                            <Text style={[styles.fontMoney, {textAlign:'center'}]}>Rp 845,000</Text>
                                        </View>
                                    </View>
                                </View>                                      
                            </Card>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </Content>
            </Container>
            // </Drawer>
         );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        height:60,
        margin:8,
        width:150
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewModal: {
        width: 300,
        height: 400,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      image: {
        width: 150,
        height: 150,
      },

      font:{
          fontFamily:'BalooBhai-Regular'
      },
      textFont:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2),
        marginLeft:10
        },
        fontContainer:{
            fontFamily:'BalooBhai-Regular',
            fontSize:responsiveFontSize(1.5),
            color:'#808080',
            },
        fontMoney:{
            fontFamily:'BalooBhai-Regular',
            fontSize:responsiveFontSize(2),
            color:'red',
        },
      textcontainer:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(1.7),
        color:'white'
      },
      titleTab:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2.5),
        color:'#229BD7'
      },
      title:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2.5),
        color:'white'
      },
    
    textModal: {
        marginVertical: 20,
        },
    slider: {
        width: 300,
        opacity: 1,
        height: 50,
        marginTop: 50,
        },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
        },

})
 
export default CariHotel;