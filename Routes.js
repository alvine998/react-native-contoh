import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Screens from './src/pages/Home';
import Profil from './src/pages/ProfileUser';
import UbahProfil from './src/pages/ChangeProfileUser';
import CariHotel from './src/pages/Hotel/FindHotel';

const Routes = () => {
    return ( 
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Stack key="home" component={Screens} initial={true} hideNavBar={true}/>
                <Stack key="profil" component={Profil} hideNavBar={true}/>
                <Stack key="ubahprofil" component={UbahProfil} hideNavBar={true}/>
                <Stack key="carihotel" component={CariHotel} hideNavBar={true}/>
            </Stack>
        </Router>
     );
}
 
export default Routes;
