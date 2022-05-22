import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Toaster from './Components/Toaster/Toaster';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Home from './Pages/Homepage/Home';
import Purchase from './Pages/Purchase';

function App() {
  return (
    <>
      <Navbar>
      <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/purchase/:id' element={<Purchase />} />
        </Routes>
      <Footer/>
      </Navbar>
    </>
  );
}

export default App;
