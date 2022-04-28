import react from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Graduates from './Graduates';
import EachGraduate from './EachGraduate';
import Error from './Error';
import Home from './Home';


function App() {
  return (
    <>
    <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/graduates' element={<Graduates/>}/>
   <Route path='/graduate/:value' element={<EachGraduate/>}/>
   <Route path='/*' element={<Error/>}/>

   </Routes>
    </>
  );
}

export default App;
