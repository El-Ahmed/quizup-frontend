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
import HostWait from './components/HostWait/HostWait';
import Join from './components/Join/Join';
import AnswerState from './components/AnswerState/AnswerState';
import Score from './components/Score/Score';
import PlayerWait from './components/PlayerWait/PlayerWait';

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
          <Route path='/host' element={<HostWait/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/score' element={<Score/>} />
          <Route path='/state' element={<AnswerState/>} />
          <Route path='/playwait' element={<PlayerWait/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
