export default function History() {
  // Dummy Data - Later you will fetch this from your Admin API
  const history = [
    { id: 1, date: 'Jan 12, 2026', checkIn: '09:00 AM', checkOut: '05:00 PM', hours: '8h', status: 'Present' },
    { id: 2, date: 'Jan 11, 2026', checkIn: '09:15 AM', checkOut: '05:15 PM', hours: '8h', status: 'Late' },
    { id: 3, date: 'Jan 10, 2026', checkIn: '-', checkOut: '-', hours: '0h', status: 'Absent' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Attendance History</h2>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
            <tr>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">In / Out</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4 text-gray-800 font-medium">{item.date}</td>
                <td className="p-4 text-sm text-gray-600">
                  <div className="text-green-600">{item.checkIn}</div>
                  <div className="text-red-500">{item.checkOut}</div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    item.status === 'Present' ? 'bg-green-100 text-green-700' : 
                    item.status === 'Absent' ? 'bg-red-100 text-red-700' : 
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}