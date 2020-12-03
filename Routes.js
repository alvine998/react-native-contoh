import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Screens from './src/pages/Home';
import Profil from './src/pages/ProfileUser';
import UbahProfil from './src/pages/ChangeProfileUser';
import CariHotel from './src/pages/Hotel/FindHotel';
import Loginlagi from './src/pages/Login';
import SimpanHotel from './src/pages/Hotel/SavedHotel';
import Pengaturan from './src/pages/Settings';
import Detailhotel from './src/pages/Hotel/DetailHotel';
import HotelRoomDetail from './src/pages/Hotel/DetailRoomHotel';
import HotelBooking from './src/pages/Hotel/Booking/BookingHotel';
import RequestMenu from './src/pages/Hotel/Booking/AddRequest';
import DetailContact from './src/pages/Hotel/Booking/ContactDetails';
import IndexChooseHotel from './src/pages/Hotel/Choose';
import Schedulehotel from './src/pages/Hotel/Choose/ScheduleHotel';
import HotelDuration from './src/pages/Hotel/Choose/DurationHotel';
import HotelLocation from './src/pages/Hotel/Choose/LocationHotel';
import HotelPerson from './src/pages/Hotel/Choose/PersonHotel';
import HotelRoom from './src/pages/Hotel/Choose/RoomHotel';
import HotelPaymentDetail from './src/pages/Hotel/PaymentDetailHotel';
import Testss from './src/pages/IntroduceFull';
import Splasher from './src/pages/Splash';
import Registrasi from './src/pages/SignUp';
import Pickup from './src/pages/PickUpService';
import IntroSouvenir from './src/pages/Souvenir/intro';
import ScreenSouvenir from './src/pages/Souvenir';
import DetailOrder from './src/pages/Souvenir/OrderDetail';

const Routes = () => {
    return ( 
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Stack key="home" component={Screens} hideNavBar={true}/>
                <Stack key="profil" component={Profil} hideNavBar={true}/>
                <Stack key="ubahprofil" component={UbahProfil} hideNavBar={true}/>
                <Stack key="carihotel" component={CariHotel} hideNavBar={true}/>
                <Stack key="savedbooking" component={SimpanHotel} hideNavBar={true}/>
                <Stack key="setting" component={Pengaturan} hideNavBar={true}/>
                <Stack key="detailhotel" component={Detailhotel} hideNavBar={true}/>
                <Stack key="detailroom" component={HotelRoomDetail} hideNavBar={true}/>
                <Stack key="bookinghotel" component={HotelBooking} hideNavBar={true}/>
                <Stack key="addrequest" component={RequestMenu} hideNavBar={true}/>
                <Stack key="contactdetail" component={DetailContact} hideNavBar={true}/>
                <Stack key="choose" component={IndexChooseHotel} hideNavBar={true}/>
                <Stack key="schedule" component={Schedulehotel} hideNavBar={true}/>
                <Stack key="duration" component={HotelDuration} hideNavBar={true}/>
                <Stack key="location" component={HotelLocation} hideNavBar={true}/>
                <Stack key="person" component={HotelPerson} hideNavBar={true}/>
                <Stack key="room" component={HotelRoom} hideNavBar={true}/>
                <Stack key="payment" component={HotelPaymentDetail} hideNavBar={true}/>
                <Stack key="intro" component={Testss} hideNavBar={true} initial={true} />
                <Stack key="login" component={Loginlagi} hideNavBar={true}  />
                <Stack key="splash" component={Splasher} hideNavBar={true}/>
                <Stack key="regis" component={Registrasi} hideNavBar={true}/>
                <Stack key="pickup" component={Pickup} hideNavBar={true}/>
                <Stack key="introsouvenir" component={IntroSouvenir} hideNavBar={true}/>
                <Stack key="souvenir" component={ScreenSouvenir} hideNavBar={true}/>
                <Stack key="orderdetail" component={DetailOrder} hideNavBar={true}/>

                
            </Stack>
        </Router>
     );
}
 
export default Routes;
