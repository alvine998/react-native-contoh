import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Screens from './src/pages/Home';
import Profil from './src/pages/ProfileUser';
import UbahProfil from './src/pages/ChangeProfileUser';
import CariHotel from './src/pages/Hotel/FindHotel';
import Loginlagi from './src/pages/Login';

const Routes = () => {
    return ( 
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Stack key="home" component={Screens} hideNavBar={true}/>
                <Stack key="profil" component={Profil} hideNavBar={true}/>
                <Stack key="ubahprofil" component={UbahProfil} hideNavBar={true}/>
                <Stack key="carihotel" component={CariHotel} hideNavBar={true}/>
                <Stack key="login" component={Loginlagi} hideNavBar={true} initial={true}/>
            </Stack>
        </Router>
     );
}
 
export default Routes;
