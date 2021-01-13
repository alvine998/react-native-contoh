import React, { Component } from 'react';
import{Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Button,Drawer, Label, Left, Body, Right, Container,ListItem, Icon, Header, Title, Content, View} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native';
import Carrousel from '../../../components/Carousel-slider';

class HotelLocation extends Component {
    state = {  }
    render() { 
        const goToBack = () => {
            Actions.choose()
        }
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left/>
                    <Body/>
                    <Right>
                        <Title style={styles.title}>Batal</Title>
                    </Right>
                </Header>
                <ScrollView>
                    <View style={{alignItems:'center', flex:1, flexDirection:'column', height:responsiveHeight(7), backgroundColor:'#229BD7'}}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            height: responsiveHeight(5),
                            width: responsiveWidth(80),
                            padding: 0,
                            marginLeft: 2,
                            marginRight: 2,
                            marginBottom: 5,
                            marginTop: 5,
                            borderWidth: 1,
                            borderColor: '#161924',
                            borderRadius: 60,
                            borderTopColor:'#dfdfdf',
                            borderBottomColor:'#dfdfdf',
                            borderRightColor:'#dfdfdf',
                            borderLeftColor:'#dfdfdf',
                            backgroundColor:'white'
                            }}>
                                <Icon type={"FontAwesome5"} name="map-marker-alt" fontSize={25} style={{marginLeft:20, color:'#229BD7'}} />
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
                    </View>
                
                 <TouchableOpacity style={{flexDirection:'row', margin:10, marginTop:20}}>
                    <Icon type={"FontAwesome5"} name="location-arrow" style={{color:'#229BD7'}} />
                    <Text style={[styles.text, {marginLeft:10}]}>Sekitar Saya</Text>
                 </TouchableOpacity>
                 <View>
                    <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Pencarian Lokasi Terakhir</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <TouchableOpacity>
                                    <Text style={[styles.text, {color:'#229BD7'}]}>Hapus Semua</Text>
                                </TouchableOpacity>
                            </Right>
                        </ListItem>
                 </View>
                 <View>
                     <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <Icon type={"FontAwesome5"} name="map-marker-alt" style={{color:'#229BD7'}} />
                            </Left>
                            <Body>
                                <Text style={[styles.text, {marginTop:5}]}>Ketapang Indah Hotel</Text>
                            </Body>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>Ketapang, Banyuwangi</Text>
                            </Right>
                        </ListItem>
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <Icon type={"FontAwesome5"} name="map-marker-alt" style={{color:'#229BD7'}} />
                            </Left>
                            <Body>
                                <Text style={[styles.text, {marginTop:5}]}>Hard Rock Hotel Bali</Text>
                            </Body>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>Kuta, Bali</Text>
                            </Right>
                        </ListItem>
                     </TouchableOpacity>  
                 </View>

                 <View style={{marginTop:20}}>
                    <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Destinasi Populer di Jawa Timur</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>Region</Text>
                            </Right>
                        </ListItem>
                 </View>
                 <View>
                    <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <View>
                                    <Text style={styles.text}>Banyuwangi</Text>
                                    <Text style={[styles.item, {color:'#808080'}]}>Jawa Timur, Indonesia</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>70 Akomodasi</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <View>
                                    <Text style={styles.text}>Kediri</Text>
                                    <Text style={[styles.item, {color:'#808080'}]}>Jawa Timur, Indonesia</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>35 Akomodasi</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <View>
                                    <Text style={styles.text}>Blitar</Text>
                                    <Text style={[styles.item, {color:'#808080'}]}>Jawa Timur, Indonesia</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>25 Akomodasi</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <View>
                                    <Text style={styles.text}>Trenggalek</Text>
                                    <Text style={[styles.item, {color:'#808080'}]}>Jawa Timur, Indonesia</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>20 Akomodasi</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <View>
                                    <Text style={styles.text}>Pacitan</Text>
                                    <Text style={[styles.item, {color:'#808080'}]}>Jawa Timur, Indonesia</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>20 Akomodasi</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <View>
                                    <Text style={styles.text}>Madiun</Text>
                                    <Text style={[styles.item, {color:'#808080'}]}>Jawa Timur, Indonesia</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>25 Akomodasi</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ListItem icon>
                            <Left>
                                <View>
                                    <Text style={styles.text}>Ngawi</Text>
                                    <Text style={[styles.item, {color:'#808080'}]}>Jawa Timur, Indonesia</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>25 Akomodasi</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>  
                 </View>

                 <View style={{marginTop:20}}>
                    <ListItem icon>
                            <Left>
                                <Text style={styles.text}>Rekomendasi Wisata Buat Kamu</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Text style={[styles.item, {marginTop:5, color:'#808080'}]}>Populer</Text>
                            </Right>
                        </ListItem>
                        <View style={{paddingBottom:20}}>
                            <Carrousel/>
                        </View>
                 </View>
                 </ScrollView>
            </Container>
         );
    }
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2.5)
    },
    text:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2)
    },
    item:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(1.3)
    }
})
 
export default HotelLocation;
