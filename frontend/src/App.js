import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// * Page Imports
import HomePage from './pages/HomePage'

// * Planets
import Planets from './pages/Planets/Planets'
import Earth from './pages/Planets/Earth'

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/planets'>
          <Route index element={<Planets />} />
          <Route path='earth' element={<Earth />} />
        </Route>

        <Route path='/stars' element={<Stars />} />
        <Route path='/satellites' element={<Satellites />} />
        <Route path='/Astronomers' element={<Astronomers />} />
        <Route path='/objects' element={<Objects />} />
        <Route path='/galaxies' element={<Galaxies />} />

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;