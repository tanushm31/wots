
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
import LoginSignupPage from './pages/LoginSignupPage.js';
function App() {
  return (
    
    <div className="App">
      <Router>


        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/dashboard' element={< DashboardPage />}></Route>
          <Route exact path='/login-signup' element={< LoginSignupPage />}></Route>
        </Routes>
      
      </Router> 

      {/* <Database/>
      <ReadData /> */}
    </div>
  );
}

export default App;
