const Dashboard = () => {
  // mock data for now (replace with API later)
  const leagues = ["Premier League", "La Liga", "MLS"];

  const teams = ["Arsenal", "Barcelona", "Inter Miami", "Chelsea"];

  const matches = [
    { home: "Arsenal", away: "Chelsea", date: "2026-04-14" },
    { home: "Barcelona", away: "Real Madrid", date: "2026-04-15" },
    { home: "Inter Miami", away: "LA Galaxy", date: "2026-04-16" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">
        Welcome to League Manager ⚽
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Leagues</h3>
          <p className="text-2xl">{leagues.length}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Teams</h3>
          <p className="text-2xl">{teams.length}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Matches</h3>
          <p className="text-2xl">{matches.length}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-6">

        {/* Leagues */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Leagues</h3>
          <ul className="space-y-2">
            {leagues.map((league, index) => (
              <li key={index} className="p-2 bg-gray-50 rounded">
                {league}
              </li>
            ))}
          </ul>
        </div>

        {/* Teams */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Teams</h3>
          <ul className="space-y-2">
            {teams.map((team, index) => (
              <li key={index} className="p-2 bg-gray-50 rounded">
                {team}
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Matches */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Upcoming Matches</h3>
          <ul className="space-y-3">
            {matches.map((match, index) => (
              <li key={index} className="p-2 bg-gray-50 rounded">
                <p className="font-medium">
                  {match.home} vs {match.away}
                </p>
                <p className="text-sm text-gray-500">
                  {match.date}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;