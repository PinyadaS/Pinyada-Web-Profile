import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import { Box } from '@mui/material';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ResponsiveAppBar/>
      <Box sx={{display:'flex', minHeight:'100vh', flexDirection:'column'}}>
        <Routes>
          <Route path='/'element={<Profile/>}/>
        </Routes>
      <Footer/>
      </Box>
    </div>
    </BrowserRouter>
  );
}

export default App;
