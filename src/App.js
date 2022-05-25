import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Toaster from './Components/Toaster/Toaster';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Blogs from './Pages/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dash from './Pages/Dashboard/Dash';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrders';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Order from './Pages/Dashboard/Order';
import Payment from './Pages/Dashboard/Payment';
import Profile from './Pages/Dashboard/Profile';
import Reviews from './Pages/Dashboard/Reviews';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Homepage/Home';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio';
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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path='/purchase/:id' element={ <RequireAuth><Purchase /></RequireAuth>} />
          <Route path='/payment/:id' element={ <RequireAuth><Payment /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
              <Route path="index" element={<Dash/>}></Route>
              <Route path="review" element={<Reviews/>}></Route>
              <Route path="orders" element={<Order/>}></Route>
              <Route path="profile" element={<Profile/>}></Route>
              <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
              <Route path="product/add" element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
              <Route path="manage/products" element={<RequireAdmin><ManageProduct/></RequireAdmin>}></Route>
              <Route path="manage/allorders" element={<RequireAdmin><ManageAllOrder/></RequireAdmin>}></Route>
  
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      </Navbar>
    </>
  );
}

export default App;
