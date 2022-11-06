import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import home from './pages/home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home';
import SignUp from './pages/signup';
import Footer from './footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" default element={<Home/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
