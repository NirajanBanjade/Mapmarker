
import './App.css';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Map from './components/Mappage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextLinkExample from './components/Navbar';

function App() {
  return (
    // <div className="App">
    //  <Homepage/>
    //  <Map/>
    // </div>
    <Router>
      <TextLinkExample/>
      <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/mapview" element={<Map/>} />
      </Routes>
    </Router>
  );
}

export default App;
