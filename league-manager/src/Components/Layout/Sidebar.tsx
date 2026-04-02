const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">League Manager</h2>

      <nav className="space-y-2">
        <button className="block w-full text-left p-2 rounded hover:bg-gray-100">
          Dashboard
        </button>
        <button className="block w-full text-left p-2 rounded hover:bg-gray-100">
          Leagues
        </button>
        <button className="block w-full text-left p-2 rounded hover:bg-gray-100">
          Teams
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;