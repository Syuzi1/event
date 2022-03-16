import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import{BrowserRouter,route} from "react-router-dom"
import {Slider} from "./components/slider"
import Calendar from 'react-calendar';
import {Event} from "./components/event"
import 'react-calendar/dist/Calendar.css';
import Categoreis from './components/header/links';


function App() {
  const [value, onChange] = useState(new Date());

  return ( 
  <div>
  <BrowserRouter>
    <Header /> 
  
    <Slider/>
    <Calendar onChange={onChange} value={value} />
    <Event/>
    
    </BrowserRouter>

  </div>
  
  )}

export default App;
