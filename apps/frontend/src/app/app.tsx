

import { Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import TableView from './pages/TableView';

export function App() {
  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path="/" element={<Login setUser={() => {}} />} />
        <Route path="*" element={<div className='flex justify-center items-center h-screen'> go to  home page please....  <a href='/' className='text-green-600'>Home</a> </div>} />
        <Route path="/table-view" element={<TableView/>} />
      </Routes>
    </div>
  );
}

export default App;
