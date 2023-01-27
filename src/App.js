import { Route, Routes } from 'react-router-dom';

// Import all pages
import Home from './pages/home/Home';
import Members from './pages/members/Members';
import Council from './pages/council/Council';
import Events from './pages/events/Events';
import Gallery from './pages/gallery/Gallery';
import Login from './pages/login/Login';
import Developed from './pages/developed/Developed';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/members" element={<Members />} />
        <Route exact path="/council" element={<Council />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/developed" element={<Developed />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
