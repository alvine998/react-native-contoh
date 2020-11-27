import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import HomeScreen from './src/components/Index';
import Splasher from './src/pages/Splash';
import Loginlagi from './src/pages/Login';
import Halaman1 from './src/pages/Introduce1';
import Halaman23 from './src/pages/Introduce2';
import Registrasi from './src/pages/SignUp';
import Screens from './src/pages/Home';
import Profil from './src/pages/ProfileUser';
import UbahProfil from './src/pages/ChangeProfileUser';
import CariHotel from './src/pages/Hotel/FindHotel';

import Routes from './Routes';
import Filterhotel from './src/pages/Hotel/FilterHotel';
import Schedulehotel from './src/pages/Hotel/Choose/ScheduleHotel';
import IndexChooseHotel from './src/pages/Hotel/Choose';
import HotelLocation from './src/pages/Hotel/Choose/LocationHotel';
import Datepicker from './src/components/DatePicker';
import HotelDuration from './src/pages/Hotel/Choose/DurationHotel';
import HotelPerson from './src/pages/Hotel/Choose/PersonHotel'
import Detailhotel from './src/pages/Hotel/DetailHotel';
import HotelRoomDetail from './src/pages/Hotel/DetailRoomHotel';

function App(){
  return (
      <HotelRoomDetail/>
  );
}


export default App;
