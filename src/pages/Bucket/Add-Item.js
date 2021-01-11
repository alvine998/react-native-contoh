import { Body, Card, Container, Content, Header, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { ImageBackground } from 'react-native';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { View } from 'react-native';
import Carousel from 'react-native-carousel-control';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import img from '../../images/bg-5.jpg';
import kpt from '../../images/img-hotel/ktpg.jpg';
import bli from '../../images/img-hotel/hrc.jpg';
import bli2 from '../../images/img-hotel/hhtl.jpg';

class ItemAdd extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:'#229BD7'}}>
                    <Left/>
                    <Body/>
                    <Right>
                        <TouchableOpacity>
                            <Title style={[styles.font, {fontSize:responsiveFontSize(2.5)}]}>Batal</Title>
                        </TouchableOpacity>
                    </Right>
                </Header>
                
                    <View style={{ flexDirection:'row'}}>
                        <View style={{margin:20}}>
                            <Text style={[styles.font, {fontSize:responsiveFontSize(2)}]}>Pilih item yang akan disimpan</Text>
                            <Text style={[styles.font, {fontSize:responsiveFontSize(2)}]}>sebagai inspirasi liburanmu!</Text>
                        </View>
                        <Image source={img} style={{width:responsiveWidth(20), height:responsiveHeight(10), marginLeft:50, marginTop:10}} />
                    </View>
                    <Content>
                        <Text style={[styles.font, {fontSize:responsiveFontSize(2.5), marginLeft:20}]}>Hotel</Text>
                        <Carousel>
                            
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={kpt} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Ketapang Indah Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Ketapang, Banyuwangi</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={bli} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Hard Rock Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Kutai, Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={bli2} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Bali Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Sanur, Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={bli} blurRadius={10} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Lihat Hotel Lainnya</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Tap Disini</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            
                        </Carousel>

                        <Text style={[styles.font, {fontSize:responsiveFontSize(2.5), marginLeft:20}]}>Hotel</Text>
                        <Carousel>
                            
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={kpt} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Ketapang Indah Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Ketapang, Banyuwangi</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={bli} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Hard Rock Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Kutai, Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={bli2} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Bali Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Sanur, Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={bli} blurRadius={10} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Lihat Hotel Lainnya</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Tap Disini</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            
                                
                        </Carousel>

                        <Text style={[styles.font, {fontSize:responsiveFontSize(2.5), marginLeft:20}]}>Hotel</Text>
                        <Carousel>
                            
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={kpt} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Ketapang Indah Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Ketapang, Banyuwangi</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={bli} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Hard Rock Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Kutai, Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={bli2} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Bali Hotel</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Sanur, Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={bli} blurRadius={10} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Lihat Hotel Lainnya</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Tap Disini</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            
                        </Carousel>
                    </Content>
                
            </Container>
         );
    }
}

const styles = StyleSheet.create({
    font: {
      fontFamily: 'BalooBhai-Regular',
    },
  });
 
export default ItemAdd;