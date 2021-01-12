import React, { Component } from 'react';
import{Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Modal} from 'react-native';
import {Button,Drawer, Label, Left, Body, Right, Container, Icon, Header, Card, Title, Content, View, DatePicker} from 'native-base';
import { Actions } from 'react-native-router-flux';

import SideBar from '../../../components/Sidebar';

import loggo from '../../../images/Putih_Full_Horizontal.png';
import plane from '../../../images/1500x500.jpg';

import {connect} from 'react-redux';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Carousel from 'react-native-carousel-control';
import { Alert } from 'react-native';



class IndexChooseHotel extends Component {
    // closeDrawer(){
    //     this._drawer._root.close()     
    // };
    // openDrawer(){
    //     this._drawer._root.open()
    // };
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

    render() { 
        const goToLocation = () => {
            Actions.location()
        }
        const goToDuration = () => {
            Actions.duration()
        }
        const goToSchedule = () => {
            Actions.schedule()
        }
        const goToPerson = () => {
            Actions.person()
        }
        const goToRoom = () => {
            Actions.room()
        }
        const goToFindHotel = () => {
            Actions.carihotel()
        } 

        const {modalVisible} = this.state;

        return ( 
            // <Drawer
            //     ref={(ref) => {this._drawer = ref;}}
            //     content={<SideBar navigator={this.navigator} />}
            //     onClose={() => this.closeDrawer()}
            // >
                <Container>
                    <Header style={{backgroundColor:"#229BD7"}}>
                        <Left>           
                                <Icon type={"FontAwesome"} name="chevron-left" style={{color:"#FFF"}} />
                        </Left>
                        <Body>
                            <Image source={loggo} style={{width:200, height:40, marginLeft:30}} />
                        </Body>
                        <Right/>
                    </Header>
                    <ScrollView style={{flex:1, flexDirection:'column'}}>
                        <View style={{height:150,backgroundColor:'steelblue', alignItems:'center', justifyContent:'center'}}>
                            <Image source={plane} style={{width:450, height:150}} />
                        </View>
                        <View style={{flexDirection:'row', marginTop:10, marginLeft:50}}>
                        <Text style={styles.font}>Hai</Text>
                        <Text style={styles.font}> nama </Text>
                        <Text style={styles.font}>Mau carikamar hotel dimana ?</Text>
                        </View>
                        <TouchableOpacity onPress={goToLocation}>
                        <View style={{flexDirection:'row', marginLeft:50, marginTop:10}}>                 
                                <Icon type={"FontAwesome5"} name="map-marker-alt" style={{color:'#229BD7'}}/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:290,
                                        marginLeft:10,
                                        fontSize:20,
                                    }}
                                    editable={false}
                                    placeholder="Cari Lokasi"
                                />
                        </View>
                        </TouchableOpacity>
                        

                        <TouchableOpacity onPress={goToSchedule}>
                            <View style={{flexDirection:'row', marginLeft:60, marginTop:20}}>                 
                                    <Icon type={"FontAwesome5"} name="calendar-alt" style={{color:'#229BD7'}}/>
                                    <Text style={[styles.font, {margin:8}]}>Check-In : </Text>
                                    <DatePicker 
                                        defaultDate={new Date()}
                                        minimumDate={new Date().getTime(20)}
                                        maximumDate={new Date(2021, 4, 4)}
                                        locale={"en"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"slide"}
                                        androidMode={"default"}
                                        placeHolderText="Pilih Tanggal Checkin"
                                        textStyle={{ color: "black" }}
                                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                                        onDateChange={this.setDate}
                                        disabled={false}
                                    />
                            </View>
                            <View style={{alignItems:'center', justifyContent:'center'}}>
                                <View style={{borderTopWidth:1, width:responsiveWidth(67), marginLeft:15}}/>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={goToDuration}>
                            <View style={{flexDirection:'row', marginLeft:50, marginTop:20}}>                 
                                    <Icon type={"FontAwesome5"} name="bed" style={{color:'#229BD7'}}/>
                                    <TextInput
                                        style={{
                                            borderBottomWidth:1,
                                            width:280,
                                            marginLeft:10,
                                            fontSize:20,
                                            color:'black'
                                        }}
                                        editable={false}
                                        value={String(this.props.Duration) + ' Malam'}
                                        
                                    />
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={goToPerson}>
                        <View style={{flexDirection:'row', marginLeft:50, marginTop:20}}>                 
                                <Icon type={"FontAwesome5"} name="user-friends" style={{color:'#229BD7'}}/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:280,
                                        marginLeft:10,
                                        fontSize:20,
                                        
                                    }}
                                    editable={false}
                                    placeholder="Total Tamu"
                                />
                        </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={goToRoom}>
                        <View style={{flexDirection:'row', marginLeft:50, marginTop:20}}>                 
                                <Icon type={"FontAwesome5"} name="door-open" style={{color:'#229BD7'}}/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:280,
                                        marginLeft:10,
                                        fontSize:20,
                                        
                                    }}
                                    editable={false}
                                    placeholder="Ruangan"
                                />
                        </View>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={{flexDirection:'row',marginLeft:50, marginTop:20}}>
                            <Icon type={"FontAwesome5"} name="sliders-h" style={{color:'#229BD7'}} />
                            <Text style={[styles.font, {marginLeft:20}]}>Filter</Text>
                        </TouchableOpacity> */}

                        <View style={{marginLeft:50, marginTop:20}}>                 
                                        <Modal
                                            animationType="slide"
                                            transparent={true}
                                            visible={modalVisible}
                                            onRequestClose={() => {
                                                Alert.alert("Modal has been closed");
                                            }}
                                        >
                                            <View style={styles.centeredView}>
                                                <View style={styles.modalView}>
                                                    <TouchableOpacity onPress={() => {this.setModalVisible(!modalVisible);}}>
                                                    <Text style={styles.font}>Filter</Text>
                                                    <Icon type={"FontAwesome5"}  name="sort-down" style={{color:'#229BD7'}} />
                                                    </TouchableOpacity>
                                                    
                                                </View>
                                            </View>
                                        </Modal>
                                        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => {this.setModalVisible(true);}}>
                                            <Icon type={"FontAwesome5"} name="sliders-h" style={{color:'#229BD7'}} />
                                            <Text style={[styles.font, {marginLeft:20}]}>Filter</Text>
                                        </TouchableOpacity>

                        </View>
                        
                        <Button full rounded style={{width:responsiveWidth(40), marginLeft:200, marginTop:30, backgroundColor:'#229BD7' }} onPress={goToFindHotel}>
                            <Text style={[styles.font, {fontSize:20, color:'#FFF'}]}>Cari Hotel</Text>
                        </Button>

                        <Carousel >
                            <Card style={{marginTop:10, height:responsiveHeight(15)}}>

                            </Card>
                            <Card style={{marginTop:10, height:responsiveHeight(15)}}>
                                
                            </Card>
                            <Card style={{marginTop:10, height:responsiveHeight(15)}}>
                                
                            </Card>
                        </Carousel>
                    </ScrollView>
                    
                </Container>
            // </Drawer>
            
         );
    }
}

const styles = StyleSheet.create({
    font:{
        fontFamily:'BalooBhai-Regular',
        fontSize:responsiveFontSize(2)
    },
    centeredView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

const mapStateToProps = state => {
    return{
        Duration: state.totalDuration
    }
}
 
export default connect(mapStateToProps)(IndexChooseHotel);