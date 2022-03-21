import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AllDoctors from './Pages/Doctors/AllDoctors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alldoctors" element={<AllDoctors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
