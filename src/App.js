import React from 'react'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import Header from './components/Header';
import Overview from './components/Overview';
import Discussion from './components/Discussion';
import References from './components/References';
import Terms from './components/Terms';

import NavBar from './components/NavBar';
import Card from './components/Card';
const App = () => {
  
  return (
    <div className="wrapper">
      <NavBar/>
      <Header />
      
     
        <BrowserRouter>
        <Card/>
            <Routes>
                <Route path='/' element={<Navigate to={'/overview'}/>}/>
                <Route path='/overview' element={<Overview />}/>
                <Route path='/discussion' element={<Discussion />}/>
                <Route path='/references' element={<References />}/>
                <Route path='/terms' element={<Terms />}/>
                
            </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App