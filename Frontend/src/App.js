
import './App.css';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Mappage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextLinkExample from './components/Navbar';
import Navmap from './components/Navmap';
import Login from './components/loginpage';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  function ProtectedRoutes({isAuthenticated,children}){
    return isAuthenticated ? children :<Navigate to="/"/>
  }
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    
    <Router>
      {/* <Login/> */}
      <Routes>
      <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />  
        {/* <Route path="/" element={<Homepage />} />  Default Route */}
        <Route path="/home" element={
          <ProtectedRoutes isAuthenticated={isAuthenticated}>
            <Homepage/>
          </ProtectedRoutes>
        } />
        <Route path="/mapview" element={          
          <ProtectedRoutes isAuthenticated={isAuthenticated}>
            <Navmap/>
          </ProtectedRoutes>} />
      </Routes>


    </Router>
  );
}

export default App;
