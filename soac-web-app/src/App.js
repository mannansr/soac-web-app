/* eslint-disable import/no-extraneous-dependencies */
// import 'flowbite';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/auth0/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
