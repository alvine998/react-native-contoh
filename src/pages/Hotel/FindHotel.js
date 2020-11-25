import React, { Component } from 'react';
import { View, Text, TextInput , TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Form } from 'native-base';
import SideBar from '../../components/Sidebar';
import Modal from 'react-native-modal';
import HotelModal from '../../components/ModalHotel';
import Slider from '@react-native-community/slider';

import loggo from '../../images/Putih_Full_Horizontal.png';
import cordoba from '../../images/img-hotel/cordoba.webp';


class CariHotel extends Component {
    closeDrawer(){
        this._drawer._root.close()     
    };
    openDrawer(){
        this._drawer._root.open()
    };

    state = {
        isModalVisible: false,
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible});
    };

    static defaultProps = {
        value: 0,
      };
    
      state = {
        value: this.props.value,
      };

    renderModal() { 
        return ( 
            <View style={styles.viewModal}>
                <View style={{flexDirection:"row"}}>
                    <View style={{borderBottomWidth:1, marginRight:20}}>
                        <Text>
                            {this.state.value && +this.state.value.toFixed(3)}
                        </Text>
                    </View>
                    
                    <View style={{borderBottomWidth:1, marginLeft:20}}>
                        <Text style={{padding:10}}>
                            {this.state.value && +this.state.value.toFixed(3)}
                        </Text>
                    </View>
                </View>
                
                <Slider
                    step={500}
                    maximumValue={30000000}
                    style={styles.slider}
                    {...this.props}
                    onValueChange={value => this.setState({value: value})}
                />
                {/* <View style={{flex:1, flexDirection:"row"}}>
                    <Form>
                        
                    </Form>
                </View> */}
                <Text style={styles.textModal}>Done</Text>
                <Button onPress={this.toggleModal} color="#41A8CC" style={{width:100, marginLeft:100}}>
                    <Text style={{fontSize:20, color:'#FFF', marginLeft:25}}>Save</Text>
                </Button>
            </View>
         );
    }

    

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
                                <Button primary transparent style={{borderWidth:1, width:100, marginLeft:10, height:40, marginTop:5}} onPress={this.toggleModal} >
                                    <Text style={{marginLeft:27, fontSize:20, color:'#FFF'}}>Filter</Text>
                                </Button>
                                <Modal isVisible={this.state.isModalVisible}>
                                    {this.renderModal()}
                                </Modal>
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