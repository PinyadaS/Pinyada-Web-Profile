import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <ResponsiveAppBar />
      <Routes>
        <Route path='/'element={<Profile/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
