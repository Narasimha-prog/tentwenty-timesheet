

import { Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';

export function App() {
  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path="/login" element={<Login setUser={() => {}} />} />
        <Route path="/" element={<div>Home Page - Protected Content</div>} />
      </Routes>
    </div>
  );
}

export default App;
