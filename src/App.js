import React from 'react';
import './App.css';
import Header from './components/header/Header';
import{BrowserRouter,route} from "react-router-dom"
import Categoreis from './components/header/links';


function App() {
  return ( 
  <div>
  <BrowserRouter>
    <Header /> 
  
    
    </BrowserRouter>

  </div>
  
  )}

export default App;
