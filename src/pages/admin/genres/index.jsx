import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../_api";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const navigate = useNavigate();

  const fetchGenres = async () => {
    try {
      const res = await API.get("/genres");
      setGenres(res.data.data || []);
    } catch (err) {
      console.error("Gagal ambil data genre:", err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus genre ini?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/genres/${id}`);
      alert("Genre berhasil dihapus!");
      navigate("/admin/genres"); // ✅ redirect biar langsung refresh halaman
    } catch (err) {
      console.error("Gagal hapus genre:", err);
      alert("Terjadi kesalahan saat menghapus genre.");
    }
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
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

      <div className="bg-[#1e293b] border border-gray-700 rounded-xl overflow-x-auto shadow-md relative">
        <table className="w-full border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="py-3 px-4 text-left font-medium">ID</th>
              <th className="py-3 px-4 text-left font-medium">Name</th>
              <th className="py-3 px-4 text-left font-medium">Descriptions</th>
              <th className="py-3 px-4 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {genres.length > 0 ? (
              genres.map((g, i) => (
                <tr
                  key={g.id}
                  className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4">{g.name}</td>
                  <td className="py-3 px-4">{g.description}</td>

                  {/**titik 3 */}
                  <td className="py-3 px-4 text-center relative">
                    <button
                      onClick={() => toggleDropdown(g.id)}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    >
                      ⋮
                    </button>

                    {openDropdownId === g.id && (
                      <div className="absolute right-4 mt-2 w-32 bg-[#1e293b] border border-gray-600 rounded-lg shadow-lg z-10">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <Link
                              to={`/admin/genres/edit/${g.id}`}
                              className="block px-4 py-2 text-left hover:bg-gray-700"
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => handleDelete(g.id)}
                              className="block w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white rounded-b-lg"
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
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
