
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CSVLink } from 'react-csv';


export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [attendantName, setAttendantName] = useState('');

 
    
useEffect(() => {
    fetch("/api/googlesheets")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const filtered = bookings.filter((b) =>
    (b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search) ||
      b.plan.toLowerCase().includes(search.toLowerCase())) &&
    (filterStatus ? b.status === filterStatus : true)
  );

  const handleAssign = () => {
    if (attendantName && selectedBooking !== null) {
      const updated = bookings.map((b, i) =>
        i === selectedBooking
          ? { ...b, status: 'Assigned', attendant: attendantName }
          : b
      );
      setBookings(updated);
      setAttendantName('');
      setSelectedBooking(null);
    }
  };

  return (
    <main className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-blue-900'} min-h-screen px-4 py-10 md:px-10 transition-colors`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-xl bg-white shadow text-sm border hover:bg-blue-100 transition"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <input
            placeholder="🔍 Search by name, phone, or plan..."
            className="w-full max-w-md p-3 rounded-xl border border-blue-200 shadow-md focus:outline-none text-gray-800"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-2 rounded-md border"
          >
            <option value="">All Status</option>
            <option value="Assigned">Assigned</option>
            <option value="Pending">Pending</option>
          </select>
              </div>
              <CSVLink data={bookings} filename="bookings.csv">
        <button className="export-btn">Export to CSV</button>
      </CSVLink>

        <div className="overflow-x-auto rounded-xl shadow-xl">
          <table className="min-w-full bg-white border border-blue-100 rounded-xl overflow-hidden">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                {['Name', 'Phone', 'Patient', 'Plan', 'Status', 'Attendant', 'Action'].map((col) => (
                  <th key={col} className="px-4 py-3 text-left text-sm md:text-base font-semibold">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`${i % 2 === 0 ? 'bg-white' : 'bg-blue-50'} border-t hover:bg-blue-100 transition-colors`}
                >
                  <td className="px-4 py-3">{b.name}</td>
                  <td className="px-4 py-3">{b.phone}</td>
                  <td className="px-4 py-3">{b.patient}</td>
                  <td className="px-4 py-3">{b.plan}</td>
                  <td className={`px-4 py-3 font-medium ${b.status === 'Assigned' ? 'text-green-600' : 'text-yellow-600'}`}>{b.status}</td>
                  <td className="px-4 py-3">{b.attendant}</td>
                  <td className="px-4 py-3">
                    {b.status === 'Pending' && (
                      <button
                        className="text-blue-600 underline text-sm"
                        onClick={() => setSelectedBooking(i)}
                      >
                        Assign
                      </button>
                    )}
                  </td>
                </motion.tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">No bookings found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedBooking !== null && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-80"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-semibold mb-4">Assign Attendant</h2>
              <input
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter attendant's name"
                value={attendantName}
                onChange={(e) => setAttendantName(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setSelectedBooking(null);
                    setAttendantName('');
                  }}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAssign}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Assign
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}