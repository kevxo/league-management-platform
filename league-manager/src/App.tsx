import Dashboard from './Pages/Dashboard';
import Navbar from "./Components/Layout/Navbar";
import Sidebar from "./Components/Layout/Sidebar";
import NotFound from './Pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { useLocation } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return <Login />
  }

  return (
     <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
              }/>
            <Route path='/login' element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }/>
            <Route path="*" element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
