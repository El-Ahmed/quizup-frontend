import React from 'react';
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/SignUp-In/login.component';
import Details from './components/Details/Details';
import Search from './components/Search/Search';
import TopBar from './components/TopBar/TopBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Question from './components/Question/Question';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="AppSidebar">
      <SideBar/>
      <div className="App">
      <TopBar/>
      <Routes>
          <Route path='/' element={<Search/>}></Route>
          <Route path='/quiz/:id' element={<Details/>}></Route>
          <Route path='/play' element={<Question/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
