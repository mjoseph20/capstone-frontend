import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import { useAuth } from './/components/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className='container'>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginForm handleLogin={handleLogin}/>} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
