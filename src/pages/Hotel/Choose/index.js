import React, { Component } from 'react';
import{Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Button,Drawer, Label, Left, Body, Right, Container, Icon, Header, Title, Content, View} from 'native-base';

import SideBar from '../../../components/Sidebar';

import loggo from '../../../images/Putih_Full_Horizontal.png';
import plane from '../../../images/1500x500.jpg';


class IndexChooseHotel extends Component {
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
                        <Right>
                            <Icon type={"FontAwesome5"} name="ellipsis-v" style={{color:"#FFF"}} />
                        </Right>
                    </Header>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{height:150,backgroundColor:'steelblue', alignItems:'center', justifyContent:'center'}}>
                            <Image source={plane} style={{width:450, height:150}} />
                        </View>
                        <View style={{flexDirection:'row', marginLeft:50, marginTop:20}}>                 
                                <Icon type={"FontAwesome5"} name="search-location" color="#FFF"/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:290,
                                        marginLeft:10,
                                        fontSize:20,
                                        
                                    }}
                                    placeholder="Find your place"
                                />
                        </View>
                        <View style={{flexDirection:'row', marginLeft:60, marginTop:50}}>                 
                                <Icon type={"FontAwesome5"} name="calendar-alt" color="#FFF"/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:280,
                                        marginLeft:10,
                                        fontSize:20,
                                        
                                    }}
                                    placeholder="Check in "
                                />
                        </View>
                        <View style={{flexDirection:'row', marginLeft:50, marginTop:50}}>                 
                                <Icon type={"FontAwesome5"} name="bed" color="#FFF"/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:280,
                                        marginLeft:10,
                                        fontSize:20,
                                        
                                    }}
                                    placeholder="Stay Duration"
                                />
                        </View>
                        <View style={{flexDirection:'row', marginLeft:50, marginTop:50}}>                 
                                <Icon type={"FontAwesome5"} name="user-friends" color="#FFF"/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:280,
                                        marginLeft:10,
                                        fontSize:20,
                                        
                                    }}
                                    placeholder="Total Guest(s)"
                                />
                        </View>
                        <View style={{flexDirection:'row', marginLeft:50, marginTop:50}}>                 
                                <Icon type={"FontAwesome5"} name="door-open" color="#FFF"/>
                                <TextInput
                                    style={{
                                        borderBottomWidth:1,
                                        width:280,
                                        marginLeft:10,
                                        fontSize:20,
                                        
                                    }}
                                    placeholder="Room(s)"
                                />
                        </View>
                        <Button warning style={{width:100, marginLeft:280, marginTop:30 }}>
                            <Text style={{fontSize:20, marginLeft:20, color:'#FFF'}}>Search</Text>
                        </Button>
                    </View>
                    
                </Container>
            </Drawer>
            
         );
    }
}
 
export default IndexChooseHotel;