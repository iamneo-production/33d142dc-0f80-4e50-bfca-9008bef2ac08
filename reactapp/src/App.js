import logo from './logo.svg';
import 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/FOH_Dashboard/Dashboard';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage /> }/>
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/FOHdash' element={<Dashboard/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;