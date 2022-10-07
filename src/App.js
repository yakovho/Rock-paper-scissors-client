import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Room from './components/room'
import Home from './components/home'
import './App.css';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="room/:roomid" element={<Room />} />
      </Routes>
    </div>

  )
}


export default App;
