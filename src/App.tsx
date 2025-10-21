import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import ZProfile from './pages/zprofile.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zprofile" element={<ZProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;