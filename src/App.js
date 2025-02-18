import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/landingpage/landingpage'
import Vehicle from '../src/components/vehicles/vehicles'


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={< LandingPage/>} />
        <Route path="/vehicles"  element={< Vehicle />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
