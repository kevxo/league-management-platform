import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const linkStyle = (path: string) => `block p-2 rounded ${location.pathname === path ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`;

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">League Manager</h2>

      <nav className="space-y-2">
        <Link to="/" className={linkStyle("/")}>
          Dashboard
        </Link>
        <Link to="/leagues" className={linkStyle("/leagues")}>
          Leagues
        </Link>
        <Link to="/teams" className={linkStyle("/teams")}>
          Teams
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;