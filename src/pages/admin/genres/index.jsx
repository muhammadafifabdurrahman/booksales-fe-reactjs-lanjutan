import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../_api";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    try {
      const res = await API.get("/genres");
      setGenres(res.data.data || []);
    } catch (err) {
      console.error("Gagal ambil data genre:", err);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="p-6 bg-[#0f172a] min-h-screen text-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Genres</h1>
        <Link
          to="/admin/genres/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Tambah Genre
        </Link>
      </div>

      <div className="bg-[#1e293b] border border-gray-700 rounded-xl overflow-hidden shadow-md">
        <table className="w-full border-collapse">
          <thead className="bg-[#334155] text-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-medium">#</th>
              <th className="py-3 px-4 text-left font-medium">Nama</th>
              <th className="py-3 px-4 text-left font-medium">Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {genres.length > 0 ? (
              genres.map((g, i) => (
                <tr
                  key={g.id}
                  className="border-t border-gray-700 hover:bg-[#273449] transition"
                >
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4">{g.name}</td>
                  <td className="py-3 px-4">{g.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-4 text-gray-400 italic"
                >
                  Tidak ada data genre.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
