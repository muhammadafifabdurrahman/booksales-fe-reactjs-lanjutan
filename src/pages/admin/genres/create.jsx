import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../_api";

export default function GenreCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/genres", { name, description });
      alert("Genre berhasil ditambahkan!");
      navigate("/admin/genres");
    } catch (error) {
      console.error(error);
      alert("Gagal menambah genre!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 p-6">
      <div className="max-w-lg mx-auto bg-[#1e293b] p-6 rounded-xl border border-gray-700 shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Tambah Genre
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Nama Genre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#334155] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama genre"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-[#334155] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan deskripsi genre"
              required
            ></textarea>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() => navigate("/admin/genres")}
              className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
