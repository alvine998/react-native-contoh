import React, { Component } from 'react';
import { View, Text, TextInput , Dimensions, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from '../components/Sidebar';
import Searchbar from '../components/SearchBar';
import Preview from './Preview';

import img from '../images/htl.png';
import bag from '../images/kpr.png';
import newf from '../images/logo.png';
import loggo from '../images/Putih_Full_Horizontal.png';
import store from '../images/store.png';
import car from '../images/cart.png';
import FlatListSlider from '../components/FlatlistSlider/FlatlistSlider';


class Screens extends Component {
    closeDrawer(){
        this._drawer._root.close()     
    };
    openDrawer(){
        this._drawer._root.open()
    };

    constructor (props){
        super(props);
        this.state = {
            data:[
                {
                    image :
                        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                    desc: 
                        'Silent Waters in the mountains in midst of Himilayas',
                },
                {
                    image:
                      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
                    desc:
                      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
                  },
                  {
                    image:
                      'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    desc:
                      'Sample Description below the image for representation purpose only',
                  },
                  {
                    image:
                      'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    desc:
                      'Sample Description below the image for representation purpose only',
                  },
                  {
                    image:
                      'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
                    desc:
                      'Sample Description below the image for representation purpose only',
                  },
            ],
        };
    }


    render() { 

        const screenWidth = Math.round(Dimensions.get('window').width);

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
                    <Right>
                        <Icon type={"FontAwesome5"} name="bell" style={{color:"#FFF"}} />
                    </Right>
                </Header>
                <ScrollView>
                <FlatListSlider
                    data={this.state.data}
                    imageKey={'image'}
                    timer = {2000}
                    local = {false}
                        width = {screenWidth}
                        separator = {0}
                        loop = {true}
                        autoscroll = {true}
                        currentIndexCallback = {index => console.log('index', index)}
                        onPress = {item => alert(JSON.stringify(item))}
                        indicator
                        animation
                />
                <Content padder>
                    <Card>
                    </Card>

                    <Card>
                        <Text style={{textAlign:'center', fontSize:20}}></Text>
                        <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Button primary transparent style={[styles.buttonContainer]}>
                                <View>
                                    <Image source={img} style={{width:50, height:50, marginLeft:60}} />
                                    <Text style={{marginLeft:70}}>Hotel</Text>
                                </View> 
                            </Button>
                            <Button primary transparent style={[styles.buttonContainer]}>
                            <View>
                                <Image source={bag} style={{width:40, height:40, marginLeft:35}} />
                                <Text style={{marginLeft:15}}>Travelling Kit</Text>
                            </View>
                            </Button>
                        </View>
                        <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Button primary transparent style={[styles.buttonContainer]}>
                                <View>
                                    <Image source={store} style={{width:50, height:50, marginLeft:60}} />
                                    <Text style={{marginLeft:60}}>Souvenir</Text>
                                </View>    
                            </Button>
                            <Button primary transparent style={[styles.buttonContainer]}>
                                <View>
                                    <Image source={car} style={{width:70, height:50, marginLeft:30}} />
                                    <Text style={{marginLeft:15}}>Pick Up Service</Text>
                                </View> 
                            </Button>
                        </View>
                    </Card>

                    <Card>
                        <Text style={{fontSize:20, textAlign:'center'}}>News</Text>
                    </Card>
                </Content>
                </ScrollView>
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
 
export default Screens;