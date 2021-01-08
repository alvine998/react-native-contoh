import React, {Component, Fragment} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  ListItem,
  CheckBox,
  Left,
  Right,
  Title,
  Form,
  Label,
  Input,
  Item,
  Content,
} from 'native-base';
import Headerin from '../components/Header';
import RegisForm from '../components/FormSignUp';
import * as firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import Axios from 'axios';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native';

class Registrasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      password: '',
      error: '',
      loading: false,
      toggleCheckBox: false,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = () => {
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
    };
    Axios.post('localhost:3000/customer')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const goToLogin = () => {
      Actions.login();
    };
    return (
      <View>
        <ScrollView>
        <Headerin />
        <View style={{backgroundColor: '#FFFFFF', alignItems: 'center'}}>
          <Form style={{alignItems: 'center', justifyContent: 'center', marginBottom:20}}>
            <Text style={{fontSize: 25, fontFamily: 'Raleway-Black'}}>
              REGISTRASI
            </Text>
            <Item floatingLabel style={{width: responsiveWidth(60)}}>
              <Label style={{textAlign: 'left'}}>Nama</Label>
              <Input onChange={this.onChange} />
            </Item>
            <Item floatingLabel style={{width: responsiveWidth(60)}}>
              <Label style={{textAlign: 'left'}}>No Ponsel</Label>
              <Input onChange={this.onChange} />
            </Item>
            <Item floatingLabel style={{width: responsiveWidth(60)}}>
              <Label style={{textAlign: 'left'}}>Email</Label>
              <Input onChange={this.onChange} />
            </Item>

            <Item floatingLabel style={{width: responsiveWidth(60)}}>
              <Label style={{textAlign: 'left'}}>Password</Label>
              <Input secureTextEntry={true} onChange={this.onChange} />
            </Item>
            <Item floatingLabel style={{width: responsiveWidth(60)}}>
              <Label style={{textAlign: 'left'}}>Konfirmasi Password</Label>
              <Input secureTextEntry={true} onChange={this.onChange} />
            </Item>
          </Form>
          <Content style={{paddingRight:0}}>
              <ListItem>
                <CheckBox
                  disabled={false}
                  value={this.state.checked}
                  onValueChange={() =>
                    this.setState({checked: !this.state.checked})
                  }
                />
                <Text style={{fontSize:10}}> Saya setuju menerima informasi tentang Carikamar </Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  disabled={false}
                  value={this.state.toggleCheckBox}
                  onValueChange={() =>
                    this.setState({toggleCheckBox: !this.state.toggleCheckBox})
                  }
                />
                <Text style={{fontSize:10}}> Saya setuju dengan syarat & ketentuan yang berlaku</Text>
              </ListItem>
            </Content>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Button
              primary
              onPress={this.onSubmit}
              style={{
                marginTop: 0,
                width: responsiveWidth(60),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: '#229BD7',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>Daftar</Text>
            </Button>
          </View>

          <View style={{marginTop: 5}}>
            <Text style={{textAlign: 'center', fontSize: 16, fontFamily:'BalooBhai-Regular'}}>
              Sudah punya akun?
            </Text>
            <Text
              style={{color: '#229BD7', textAlign: 'center', fontSize: 16, fontFamily:'BalooBhai-Regular'}}
              onPress={goToLogin}>
              Login Disini
            </Text>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Registrasi;
