import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Toaster from './Components/Toaster/Toaster';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Dashboard/Order';
import Profile from './Pages/Dashboard/Profile';
import Reviews from './Pages/Dashboard/Reviews';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Homepage/Home';
import Purchase from './Pages/Purchase';
import RequireAdmin from './Utilities/RequireAdmin';
import RequireAuth from "./Utilities/RequireAuth";
function App() {
  return (
    <>
      <Navbar>
      <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/purchase/:id' element={ <RequireAuth><Purchase /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
              <Route path="review" element={<Reviews/>}></Route>
              <Route path="orders" element={<Order/>}></Route>
              <Route path="profile" element={<Profile/>}></Route>
              <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
              <Route path="product/add" element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
          </Route>
        </Routes>
      <Footer/>
      </Navbar>
    </>
  );
}

export default App;
