import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Nbar as Navbar } from './pages/Nbar.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Schedule from './pages/Schedule.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;