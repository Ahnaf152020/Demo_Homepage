import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import LoginPage from './Components/LoginPage';
import SearchPage from './Components/SearchPage';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <MenuBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page For BookZone</h1>;
}

export default App;
