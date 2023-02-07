import { Route, Routes } from 'react-router-dom';

// Import all pages
import Home from './pages/home/Home';
import Members from './pages/members/Members';
import Council from './pages/council/Council';
import Events from './pages/events/Events';
import Gallery from './pages/gallery/Gallery';
import LoginPage from './pages/login/LoginPage';
import Developed from './pages/developed/Developed';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import SignUpPage from './pages/signup/SignUpPage';
import { AuthProvider } from './contexts/AuthContext';
import Registeration from './pages/registeration/Registeration';
import EditProfile from './pages/edit-profile/EditProfile';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route eact path="/home" element={<Home />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/council" element={<Council />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/developed" element={<Developed />} />
          <Route exact path="/edit-profile" element={<EditProfile />} />
          <Route exact path="/registeration" element={<Registeration />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
