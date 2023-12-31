import './App.css';
import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import logo from  './pages/logo.jpg'
import Footer from './pages/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div style={{textAlign: 'center'}}>
      <img src={logo} alt='logo' width={150} height={150} />
        </div>
      <HashRouter>
      <Search />
      <Category />
      <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
