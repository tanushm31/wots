
import './App.css';
import Navbar from './components/navbar.jsx'
import Dashboard from './components/dashboard';
import SearchBar from './components/searchbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <SearchBar />
    </div>
  );
}

export default App;
