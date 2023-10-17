
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './componants/home/HomePage';
import Login from './componants/login/Login';
import Register from './componants/register/Register';
function App() {
  return (
   <>
  
<BrowserRouter>
      <Routes>
        <Route  path="/"  element={<HomePage/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
