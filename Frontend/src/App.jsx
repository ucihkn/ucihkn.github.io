import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Nbar as Navbar } from './pages/Nbar.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Officers from './pages/Officers.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import Initiate from './pages/Initiate.jsx';
import FAQ from './pages/FAQ.jsx';

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
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;