import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchTimesheets, Timesheet } from '../api/api';

function TableView() {
      const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;

      useEffect(() => {
    fetchTimesheets()
      .then((res) => {
        setTimesheets(res.data); // Axios response → .data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

  }, []);
  // Decide what action button/link to show
  const renderAction = (status: string, weekId: number) => {
    switch (status) {
      case "completed":
        return (
          <a
            href={`/timesheets/${weekId}/view`}
            className="text-blue-600 hover:underline"
          >
            View
          </a>
        );
      case "incomplete":
        return (
          <a
            href={`/timesheets/${weekId}/update`}
            className="text-yellow-600 hover:underline"
          >
            Update
          </a>
        );
      case "missing":
        return (
          <a
            href={`/timesheets/${weekId}/create`}
            className="text-green-600 hover:underline"
          >
            Create
          </a>
        );
      default:
        return <span className="text-gray-400">—</span>;
    }
  };
   // calculate pagination
  const totalPages = Math.ceil(timesheets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = timesheets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-slate-200 min-h-screen flex flex-col">
      <Navbar />

       <main className="flex-1 container mx-auto py-6  flex-col justify-center bg-white mt-6">
        <h1 className="text-2xl font-bold font-inter me-2 py-3">Timesheets</h1>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
            <div className="overflow-x-auto mx-4">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mx-4">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">WEEK</th>
                <th className="px-4 py-2">DATE</th>

                <th className="px-4 py-2">STATUS</th>
                <th className='px-4 py-2'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((t) => (
                <tr key={t.weekId} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{t.weekId}</td>
                  <td className="px-4 py-2">{t.startDate}</td>
                  <td className="px-4 py-2">{t.status}</td>
                      <td className="px-4 py-2">
                      {renderAction(t.status, t.weekId)}
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}

      
        
        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="pagination mt-6 flex justify-center items-center space-x-2">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>     
          )}
      </main>

      <Footer />
    </div>
  )
}

export default TableView