import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import LetPlanVisit from './screens/LetPlanVisit';
import './App.css';
import ExploreMore from './screens/ExploreMore';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component ={Home} exact />
        <Route path='/let-plan-visit' Component ={LetPlanVisit} exact />
        <Route path='/experience-center' Component={ExploreMore}  exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;