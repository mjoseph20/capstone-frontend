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
import TeamTable from './components/TeamTable'
import AuthUserProfile from './components/AuthUserProfile'
import ConfirmDeleteUser from './components/ConfirmDeleteUser'
import ConfirmSwapMember from './components/ConfirmSwapMember'
import ConfirmDeleteMember from './components/ConfirmDeleteMember'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './components/AuthContext';
import { useEffect, useState } from 'react';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setLoggedInUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div className='container'>
          <NavBar />
          <main className='container mt-5 pt-5'>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm isEditMode={false} />} />
              <Route path="/signup/:id" element={<SignupForm isEditMode={true} />} />
              <Route path="/delete/:id" element={<ConfirmDeleteUser />} />
              <Route path="/profile/:id" element={<AuthUserProfile />} />
              <Route path="/shows" element={<ShowsList />} />
              <Route path="/shows/:showId" element={<ShowDetail />} />
              <Route path="/episodes" element={<EpisodesList />} />
              <Route path="/episodes/:episodeId" element={<EpisodeDetail />} />
              <Route path="/cast-members" element={<CastList isEditMode={false} />} />
              <Route path="/cast-members/swap/:castMemberId" element={<CastList isEditMode={true} />} />
              <Route path="/cast-members/swap/:existingCastMemberId/:castMemberId" element={<ConfirmSwapMember />} />
              <Route path="/cast-members/delete/:castMemberId" element={<ConfirmDeleteMember />} />
              <Route path="/cast-members/:castMemberId" element={<CastDetail />} />
              <Route path="/team" element={<TeamTable />} />
              <Route path="/all" element={<AllItems />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App
