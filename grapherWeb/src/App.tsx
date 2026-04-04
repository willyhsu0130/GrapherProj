import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.tsx';
import { ProtectedRoutes } from './components/auth/ProtectedRoutes.tsx';
import Graphs from "./pages/Graphs.tsx"
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Index from './pages/Index.tsx';
// import MainLayout from './layouts/MainLayout.tsx';
import User from './pages/User.tsx';
import Graph from './pages/Graph.tsx';
import { GraphProvider } from './context/graph/GraphProvider.tsx';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Index />} />
          <Route path="/graphs/:graphId" element={<ProtectedRoutes><GraphProvider><Graph /></GraphProvider></ProtectedRoutes>} />
          <Route path="/user" element={<ProtectedRoutes><User /></ProtectedRoutes>} />
          <Route path="/graphs" element={<ProtectedRoutes><Graphs /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;