const Home = () => {
  return (
     <div className="space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Hello, Munal 👋</h1>
        <p className="text-gray-500">Here is your daily activity summary.</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <p className="text-blue-100 text-sm">Attendance</p>
          <h3 className="text-3xl font-bold mt-1">95%</h3>
          <p className="text-xs mt-2 text-blue-200">Excellent track record</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
          <p className="text-gray-500 text-sm">Working Hours (Week)</p>
          <h3 className="text-3xl font-bold mt-1 text-gray-800">32.5 <span className="text-sm font-normal text-gray-400">hrs</span></h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
          <p className="text-gray-500 text-sm">Pending Tasks</p>
          <h3 className="text-3xl font-bold mt-1 text-orange-500">3</h3>
        </div>
      </div>

      {/* Recent Notice or Update */}
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
        <h3 className="font-bold text-indigo-900 mb-2">📢 Admin Notice</h3>
        <p className="text-indigo-800 text-sm">
          Office will remain closed this Friday due to public holiday. Please update your work logs accordingly.
        </p>
      </div>
    </div>
  );
};

export default Home;
