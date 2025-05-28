import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import { Nbar as Navbar } from './pages/Nbar.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Officers from './pages/Officers.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="officers" element={<Officers />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;