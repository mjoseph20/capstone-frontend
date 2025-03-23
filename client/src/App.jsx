import './App.css'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ShowsList from './components/ShowsList'
import ShowDetail from './components/ShowDetail'
import EpisodesList from './components/EpisodesList'
import EpisodeDetail from './components/EpisodeDetail'
import CastList from './components/CastList'
import CastDetail from './components/CastDetail'
import AllItems from './components/AllItems'
import { useAuth } from './components/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const { isLoggedIn, setIsLoggedIn } = useAuth(false);

  return (
    <Router>
      <div className='container'>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/shows" element={<ShowsList />} />
            <Route path="/shows/:showId" element={<ShowDetail />} />
            <Route path="/episodes" element={<EpisodesList />} />
            <Route path="/episodes/:episodeId" element={<EpisodeDetail />} />
            <Route path="/cast-members" element={<CastList />} />
            <Route path="/cast-members/:castMemberId" element={<CastDetail />} />
            <Route path="/all" element={<AllItems />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
