const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Welcome to League Manager ⚽
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Leagues</h3>
          <p className="text-2xl">3</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Teams</h3>
          <p className="text-2xl">12</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Matches</h3>
          <p className="text-2xl">8</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;