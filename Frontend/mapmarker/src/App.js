
import './App.css';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Map from './components/Mappage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextLinkExample from './components/Navbar';
import Navmap from './components/Navmap';

function App() {
  return (
    <Router>
      <TextLinkExample/>
      <Routes>
  <Route path="/" element={<Homepage />} />  {/* Default Route */}
  <Route path="/home" element={<Homepage />} />
  <Route path="/mapview" element={<Navmap />} />
</Routes>


    </Router>
  );
}

export default App;
