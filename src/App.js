import logo from './logo.svg';
import './App.css';
import Homepage from './Component/Homepage';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Menu from './Component/Menubar';
import Offers from './Component/Offers';
import Payment from './Component/Payment';
import { Route, Routes } from 'react-router-dom';
import Order from './Component/Order';
import Orderplaced from './Component/Order';
import RestaurantDashboard from './Component/RestaurantDashboard';
import Admin from './Component/Admin';
import Feedback from './Component/Feedback';
import Home from './Component/Home';
// import AdminPanel from './Component/AdminPanel';
// import RestaurantAdminPanel from './Component/AdminPanel';

function App() {
  return (
    <div className="App">
     
       
         {/* <Homepage/>  */}


       

      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/Menubar' element={<Menu/>}/>
        <Route path='/Order' element={<Orderplaced/>}/>
        <Route path='/Offers' element={<Offers/>}/>
        {/* <Route path='/Admin' element={<AdminPanel/>}/> */}
        <Route path='/AdminPanel' element={<Admin/>}/>
        <Route path='Feedback' element={<><Navbar/><Feedback/></>}/>
        <Route path='Payment' element={<Payment/>}/>
        <Route path='Home' element={<Home/>}/>
        





      </Routes> 
  
     
      {/* <Menubar/> */}

      {/* <Order/> */}
      
      {/* <RestaurantDashboard/> */}
      {/* // <AdminPanell/> */}
          </div>
  );
}

export default App;