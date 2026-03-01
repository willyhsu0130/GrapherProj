import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 2. The Login Page */}
        <Route path="/login" element={<Login />} />

        {/* 3. The Signup Page */}
        <Route path="/signup" element={<Signup />} />
        
        {/* 4. Future: Add your Grapher dashboard here */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;