import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Nbar as Navbar } from './pages/Nbar.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Officers from './pages/Officers.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import Initiate from './pages/Initiate.jsx';
import FAQ from './pages/FAQ.jsx';
import PastEvents from './pages/PastEvents.jsx';
import Alumni from './pages/Alumni.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="officers" element={<Officers />} />
            <Route path="initiate" element={<Initiate />} />
            <Route path="events" element={<Events />} />
            <Route path="past-events" element={<PastEvents />} />
            <Route path="alumni" element={<Alumni />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;