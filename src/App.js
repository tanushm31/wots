
import './App.css';
// import Navbar from './components/Navbar.jsx'
// import SearchBar from './components/Searchbar';
// import Database from './Database';
// import Dashboard from './components/Dashboard';
// import ReadData from './ReadData'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


import HomePage from './pages/HomePage.js'
import DashboardPage from './pages/DashboardPage.js'
import Login from './pages/Login.js';
import Signup from './pages/Signup';
function App() {
  return (
    
    <div className="App">
      <Router>


        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/dashboard' element={< DashboardPage />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
        </Routes>
      
      </Router> 

      {/* <Database/>
      <ReadData /> */}
    </div>
  );
}

export default App;
