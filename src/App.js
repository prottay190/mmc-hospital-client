import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AllDoctors from './Pages/Doctors/AllDoctors';
import Dashboard from './Pages/Dashboard/Dashboard';
import Details from './Pages/Doctors/Details/Details';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alldoctors" element={<AllDoctors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
