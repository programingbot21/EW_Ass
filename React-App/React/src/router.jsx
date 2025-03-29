import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Regiter/Register';
import Home from './components/Home/Home';
const Router = () => {
    return (
        <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/regiter" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default Router;
