import React, { Component } from 'react';
import {Text, ScrollView, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Body,  Container, Content, Header, Icon, Left, ListItem, Right, Title} from 'native-base';

class RequestMenu extends Component {
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
                        <Title>Special Request</Title>
                    </Body>
                    <Right>
                    <Icon type={"FontAwesome5"} name="check" style={{color:"#FFF"}} />
                    </Right>
                </Header>
                <View style={{flex:1, flexDirection:"column"}}>
                    <View style={{ flexDirection:"row",height:100, backgroundColor:"#D8E7F3"}}>
                        <Icon type={"FontAwesome5"} name="info-circle" style={{color:"#229BD7", margin:10}} />
                        
                        <Text style={{margin:10, fontSize:16}}>Any Special Request? Let me ask you for special {"\n"}
                        features that you want from us. </Text>
                    </View>
                    <Content>
                        <ListItem>
                            <CheckBox
                                disabled={false}
                                value={this.state.checked}
                                onValueChange={ () => this.setState({ checked: !this.state.checked})
                                }
                            />
                            <Text>Pick up Service</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox
                                disabled={false}
                                value={this.state.toggleCheckBox}
                                onValueChange={ () => this.setState({toggleCheckBox: !this.state.toggleCheckBox})
                                }
                            />
                            <Text>Travelling Kit</Text>
                        </ListItem>
                    </Content>
                </View>
            </Container>
         );
    }
}
 
export default RequestMenu;