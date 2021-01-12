import React, {Component} from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Text,
  Image,
  
  StyleSheet,
  TextInput,
  Linking,
} from 'react-native';
// import bgimage from '../images/bg.jpg';
import {Item, Label, Input, Button} from 'native-base';
import Headerin from '../components/Header';
import imgg from '../images/G.png';
import fb from '../images/fb.webp';
import {Actions} from 'react-native-router-flux';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import axios from 'axios';
import {connect} from 'react-redux';
import ActionType from '../redux/reducer/globalActionType';



class Loginlagi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      //Jadi ini gue bikin array buat nampung hasil fetch api nya
      user: [],
    };
  }

  componentDidMount = async () => {
    // ini api mock buat ngetest aja
    const url = 'localhost';
    // untuk integrate api nya menggunakan axios nanti bisa di bikin modular function nya, ini sebagai contoh saja
    axios.get(url).then((res) => {
      const user = res.data;
      //ketika response nya sudah dapet, nanti kita set state ke user buat nampung datanya
      this.setState({user});
      if (user) {
        // karena array user sudah ada value nya, state email dan password gue fill pake hasil fetch api td
        this.setState({email: user.name, password: user.name});
      }
    });
  };

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    const goToHome = () => {
      Actions.home();
    };
    const goToSignup = () => {
      Actions.regis();
    };
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 70,
          backgroundColor: '#FFFFFF',
        }}>
        <Headerin />

        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily:'BalooBhai-Regular',
            fontSize:responsiveFontSize(5),
            color:'#229BD7'
          }}>
          LOGIN
        </Text>
        <Item floatingLabel style={{width: responsiveWidth(50)}}>
          <Label style={{textAlign: 'left'}}>Email atau No Ponsel</Label>
          <Input
            value={this.state.email}
            editable={true}
            maxLength={40}
            multiline={false}
          />
        </Item>
        <Item floatingLabel style={{width: responsiveWidth(50)}}>
          <Label style={{textAlign: 'left'}}>Password</Label>
          <Input
            value={this.state.password}
            secureTextEntry={true}
            editable={true}
            maxLength={40}
            multiline={false}
          />
        </Item>
        <Text style={{marginLeft:100, marginTop:10, color:'#229BD7', fontFamily:'BalooBhai-Regular'}}>Lupa Password?</Text>

       <View style={{paddingBottom:20, marginTop:20}}>
       <Button full rounded style={{backgroundColor:'#229BD7', width:responsiveWidth(50)}} onPress={goToHome}>
          <Text style={{fontFamily:'BalooBhai-Regular', fontSize:responsiveFontSize(2), color:'white'}}>Masuk</Text>
        </Button>
       </View>
        <Text style={{textAlign: 'center', justifyContent: 'center'}}>ATAU</Text>
        <View style={{flex:1, flexDirection:'row',padding:10, marginTop:10}}>
          <TouchableOpacity style={{paddingRight:30}}>
            <Image source={imgg} style={{width: responsiveWidth(9.4), height: responsiveHeight(5)}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={fb} style={{width: responsiveWidth(9.3), height: responsiveHeight(5)}} />
          </TouchableOpacity>
        </View>
        <Text style={{fontFamily:'BalooBhai-Regular', fontSize:responsiveFontSize(2)}}>{"\n \n Belum punya akun ?"}</Text>
        <TouchableOpacity  onPress={goToSignup}>
          <Text style={{color: '#229BD7',fontFamily:'BalooBhai-Regular', fontSize:responsiveFontSize(2)}}>
            Daftar Disini
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainerStart: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 200,
    height: 35,
    padding: 10,
    margin: 20,
  },
  textInputContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 35,
  },
  buttonContainer: {
    padding: 20,
    marginTop: 5,
    width: responsiveWidth(60),
    borderRadius:20,
  },
  buttonContainerAlt: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

// const mapStateToProps = (state) => {
//   return{
//       email: state.userEmail,
//       password: state.userPassword
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//       handleLogin: () => dispatch({type: ActionType.LOGIN})
//   }
// }

export default Loginlagi;
