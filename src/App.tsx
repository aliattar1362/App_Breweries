import React from 'react';


import './App.css';
import Companies from './components/pages/Companies';
import { Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import NavBar from './components/navbar/NavBar';
import CompaniesDetail from './components/pages/CompaniesDetail';
function App() {
  return (
    <div className="App">
      <NavBar />

     <Routes>
      <Route path='/' element={<Home />}></Route>
          
          <Route path='/home'
            element={<Home />}>
          </Route>
          
    
        <Route path='companies' element={<Companies/>}>
          </Route>
          <Route path='/brewery/:companyId'
            element={<CompaniesDetail />}>
          </Route>

      </Routes>
    </div>
  );
}

export default App;
