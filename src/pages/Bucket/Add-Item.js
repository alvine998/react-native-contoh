import { Body, Card, Container, Content, Form, Header, Icon, Left, Picker, Right, Title } from 'native-base';
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

// img Oleh oleh
import odablie from '../../images/souvenir/odabli.jpeg';
import krisna from '../../images/souvenir/krisna.jpg';
import osing from '../../images/souvenir/osingde.jpg';

// img wisata
import gwk from '../../images/wisata/gwk.png';
import gnd from '../../images/wisata/gandrung.jpg';
import kly from '../../images/wisata/klayar.jpg';

class ItemAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "key0"
        };
    }

    onValueChange(value: string){
        this.setState({
            selected: value
        });
    }
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
                        {/* Ini Hotel */}
                        <Text style={[styles.font, {fontSize:responsiveFontSize(2.5), marginLeft:20}]}>Hotel</Text>
                        <Carousel>
                            
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={kpt} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        {/* <Form style={{marginLeft:80}}>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon type={'FontAwesome5'} name="arrow-down" style={{color:'white'}} />}
                                                style={{width:responsiveWidth(30)}}
                                                selectedValue={this.state.selected}
                                                onValueChange={this.onValueChange.bind(this)}
                                            >
                                                <Picker.Item label="simpan" value="key0"/>
                                                <Picker.Item label="bagikan" value="key1"/>                                                
                                                <Picker.Item label="lihat" value="key2"/>                                                                                                
                                            </Picker>
                                        </Form> */}
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

                        {/* Ini Carousel Souvenir */}
                        <Text style={[styles.font, {fontSize:responsiveFontSize(2.5), marginLeft:20}]}>Souvenir</Text>
                        <Carousel>
                            
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={osing} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Osing Deles</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Banyuwangi</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={krisna} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Krisna Oleh-Oleh</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={odablie} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>O-Odabli</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Blitar</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={krisna} blurRadius={10} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Lihat Souvenir Lainnya</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Tap Disini</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            
                                
                        </Carousel>

                        {/* Ini Carousel Wisata */}
                        <Text style={[styles.font, {fontSize:responsiveFontSize(2.5), marginLeft:20}]}>Wisata</Text>
                        <Carousel>
                            
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={gwk} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Garuda Wisnu Kencana</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Bali</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={gnd} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Taman Terakota Gandrung</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Banyuwangi</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20}}>
                                    <ImageBackground source={kly} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Pantai Klayar</Text>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, fontSize:responsiveFontSize(1.5)}]}>Pacitan</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:responsiveWidth(80), borderRadius:20, marginLeft:10}}>
                                    <ImageBackground source={gnd} blurRadius={10} style={{width:responsiveWidth(80), height:responsiveHeight(20), overflow:'hidden', borderRadius:20}}>
                                        <Text style={[styles.font, {color:'white', marginLeft:10, marginTop:100, fontSize:responsiveFontSize(2.2)}]}>Lihat Wisata Lainnya</Text>
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