import Dashboard from './Pages/Dashboard';
import Navbar from "./Components/Layout/Navbar";
import Sidebar from "./Components/Layout/Sidebar";

function App() {
  return (
     <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
