import React, { Component } from 'react';
import {Text, ScrollView, View, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Body,  Container, Content, Header, Icon, Left, ListItem, Right, Title} from 'native-base';

class DetailContact extends Component {
    constructor (props){
        super(props);
        this.state = {
            toggleCheckBox:false,
        };
    }
    render() { 
        return ( 
            <Container>
                <Header style={{backgroundColor:"#229BD7"}}>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#FFF"}} />
                    </Left>
                    <Body>
                        <Title>Contact Details</Title>
                    </Body>
                    <Right>
                    <Icon type={"FontAwesome5"} name="check" style={{color:"#FFF"}} />
                    </Right>
                </Header>
                <Content>
                    <View style={{margin:10}}>
                        <Text style={{fontSize:18}}>Fill your data down below here for detail order</Text>
                    </View>
                    <View style={{marginLeft:10, marginTop:20, alignItems:"center", justifyContent:"center"}}>
                        <TextInput
                            style={{borderBottomWidth:0.6, width:280, fontSize:16}} 
                            placeholder="Your Name"
                        />
                        <TextInput
                            style={{borderBottomWidth:1, width:280, fontSize:16}} 
                            placeholder="Numb Phone"
                        />
                        <TextInput
                            style={{borderBottomWidth:1, width:280, fontSize:16}} 
                            placeholder="E-mail"
                        />
                    </View>
                </Content>
            </Container>
         );
    }
}
 
export default DetailContact;