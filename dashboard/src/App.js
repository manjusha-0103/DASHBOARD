import React from 'react';
import { BrowserRouter,Route,Routes, useParams } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Forgetpassword from './pages/forgetpassword';
import BuyButton from './components/buyButton';
import './App.css'
import UserProtectRout from './routes/userProteRoutes';
import UserPublicRout from './routes/userPublicRoutes';
import Profile from './pages/Profile';
import Settings from './pages/settings';
import Faqs from './pages/faqs';
import Aboutus from './pages/aboutus'

function App() {
  return (
    <>
    
      <BrowserRouter>
      
        <Routes>
          <Route path ="/" element={
                  <UserPublicRout>
                    <Login/>
                  </UserPublicRout>
              }/>
          <Route path ="/register" element={
                  <UserPublicRout>
                    <Register/>
                  </UserPublicRout>
          }/>
          <Route path ="/dashboard" element={
                  <UserProtectRout>
                    <Dashboard/>
                  </UserProtectRout>

                }>
            
            
            
          </Route>
          <Route path = "about" element={<Aboutus/>}/>
            <Route path = "profile" element={<Profile/>}/>
            <Route path = "settings" element={<Settings/>}/>
            <Route path = "faqs" element={<Faqs/>}/>
          <Route path ="/forget-pass" element={<Forgetpassword/>}/>
          <Route path ="/policy" element={<></>}/>
        </Routes>
        <BuyButton/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
