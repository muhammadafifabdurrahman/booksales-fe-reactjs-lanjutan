import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../_api";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);

  const fetchAuthors = async () => {
    try {
      const res = await API.get("/authors");
      setAuthors(res.data.data || []);
    } catch (err) {
      console.error("Gagal ambil data author:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin mau hapus author ini?")) return;
    try {
      await API.delete(`/authors/${id}`);
      setAuthors(authors.filter((a) => a.id !== id));
      alert("Author berhasil dihapus!");
    } catch (err) {
      console.error("Gagal hapus author:", err);
      alert("Gagal menghapus author!");
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const baseURL = "http://127.0.0.1:8000/storage/authors/";

  return (
    <div className="p-6 bg-[#0f172a] min-h-screen text-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Authors</h1>
        <Link
          to="/admin/authors/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Tambah Author
        </Link>
      </div>

      <div className="bg-[#1e293b] border border-gray-700 rounded-xl overflow-x-auto shadow-md">
        <table className="w-full border-collapse">
          <thead className="bg-[#334155] text-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-medium">ID</th>
              <th className="py-3 px-4 text-left font-medium">Photo</th>
              <th className="py-3 px-4 text-left font-medium">Name</th>
              <th className="py-3 px-4 text-left font-medium">Bio</th>
              <th className="py-3 px-4 text-left font-medium text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {authors.length > 0 ? (
              authors.map((a, i) => (
                <tr
                  key={a.id}
                  className="border-t border-gray-700 hover:bg-[#273449] transition"
                >
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4">
                    {a.photo ? (
                      <img
                        src={baseURL + a.photo}
                        alt={a.name}
                        className="w-14 h-14 rounded-lg object-cover border border-gray-600"
                      />
                    ) : (
                      <span className="text-gray-400 italic">No photo</span>
                    )}
                  </td>
                  <td className="py-3 px-4">{a.name}</td>
                  <td className="py-3 px-4">{a.bio}</td>
                  <td className="py-3 px-4 text-center relative">
                    {/* Tombol titik tiga */}
                    <button
                      onClick={() =>
                        setOpenMenuId(openMenuId === a.id ? null : a.id)
                      }
                      className="p-2 rounded hover:bg-gray-700"
                    >
                      ⋮
                    </button>

                    {/* Menu dropdown */}
                    {openMenuId === a.id && (
                      <div className="absolute right-4 mt-2 w-32 bg-[#1e293b] border border-gray-600 rounded-lg shadow-lg z-10">
                        <Link
                          to={`/admin/authors/edit/${a.id}`}
                          className="block px-4 py-2 text-left hover:bg-gray-700"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(a.id)}
                          className="block w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white rounded-b-lg"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 text-gray-400 italic"
                >
                  Tidak ada data author.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
