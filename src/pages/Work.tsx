import { useState } from 'react';
import { Play, Square, MapPin } from 'lucide-react';

export default function Work() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [startTime, setStartTime] = useState<string | null>(null);

  const handleToggleWork = () => {
    if (!isClockedIn) {
      setStartTime(new Date().toLocaleTimeString());
    }
    setIsClockedIn(!isClockedIn);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl text-center border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Daily Attendance</h2>
        <p className="text-gray-500 flex items-center justify-center gap-1 text-sm mb-8">
          <MapPin size={14} /> Kathmandu, Nepal
        </p>

        {/* The Big Button */}
        <button
          onClick={handleToggleWork}
          className={`w-40 h-40 rounded-full flex flex-col items-center justify-center mx-auto transition-all transform hover:scale-105 shadow-xl border-4 ${
            isClockedIn
              ? 'bg-red-50 border-red-100 text-red-500'
              : 'bg-green-50 border-green-100 text-green-600'
          }`}
        >
          {isClockedIn ? <Square size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" />}
          <span className="font-bold mt-2">{isClockedIn ? 'STOP' : 'START'}</span>
        </button>

        {/* Status Text */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Status</p>
          <p className={`text-lg font-bold ${isClockedIn ? 'text-green-600' : 'text-gray-400'}`}>
            {isClockedIn ? 'Currently Working' : 'Not Working'}
          </p>
          {startTime && isClockedIn && (
            <p className="text-xs text-gray-400 mt-1">Started at: {startTime}</p>
          )}
        </div>
      </div>
    </div>
  );
}