import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// * Component Imports
import { SideNav } from './components/SideNav';
import Video from './components/Video';

// * Page Imports
import HomePage from './pages/HomePage'

// * Planets
import Planets from './pages/Planets/Planets'
import Earth from './pages/Planets/Earth'

// * Moons
import Moons from './pages/Moons/Moons'

// * Stars
import Stars from './pages/Stars/Stars'

// * Galaxies
import Galaxies from './pages/Galaxies/Galaxies'

// * Astronomers
import Astronomers from './pages/Astronomers/Astronomers'

// * Astronomical Objects
import Objects from './pages/Objects/Objects'

// * Satellites
import Satellites from './pages/Satellites/Satellites'

// * Space Travel
import SpaceTravel from './pages/Travel/SpaceTravel'

// * Theories
import Theories from './pages/Theories/Theories'

function App() {
  return (
    <Router>
      <SideNav />
      {/* <Video /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/planets'>
          <Route index element={<Planets />} />
          <Route path='earth' element={<Earth />} />
        </Route>

        <Route path='/theories' element={<Theories />} />
        <Route path='/travel' element={<SpaceTravel />} />
        <Route path='/moons' element={<Moons />} />
        <Route path='/stars' element={<Stars />} />
        <Route path='/satellites' element={<Satellites />} />
        <Route path='/astronomers' element={<Astronomers />} />
        <Route path='/objects' element={<Objects />} />
        <Route path='/galaxies' element={<Galaxies />} />

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;