import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../_api";

export default function AuthorCreate() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    if (photo) formData.append("photo", photo);

    try {
      await API.post("/authors", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Author berhasil ditambahkan!");
      navigate("/admin/authors");
    } catch (error) {
      console.error(error);
      alert("Gagal menambah author!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 p-6">
      <div className="max-w-lg mx-auto bg-[#1e293b] p-6 rounded-xl border border-gray-700 shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Tambah Author
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Nama Author</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#334155] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama author"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-[#334155] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan bio author"
              required
            ></textarea>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foto</label>
            <input
              type="file"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              accept="image/*"
              required
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() => navigate("/admin/authors")}
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
