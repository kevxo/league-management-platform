const Navbar = () => {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="font-semibold text-lg">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">Coach User</span>
      </div>
    </div>
  );
};

export default Navbar;