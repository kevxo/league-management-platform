import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login")
    }

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="font-semibold text-lg">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">Coach User</span>
      </div>

      <button
        onClick={handleLogout}
        className="text-sm bg-red-500 text-white px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;