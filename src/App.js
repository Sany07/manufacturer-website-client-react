import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Homepage/Home';
import Purchase from './Pages/Purchase';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/purchase/:id' element={<Purchase />} />
        </Routes>
      <Footer/>
      </Navbar>
    </div>
  );
}

export default App;
