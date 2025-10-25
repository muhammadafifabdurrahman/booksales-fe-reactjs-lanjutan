import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import API from "../../../_api";

export default function EditAuthor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await API.get(`/authors/${id}`);
        const data = res.data.data;
        setName(data.name);
        setBio(data.bio);
        setPreview(`http://127.0.0.1:8000/storage/authors/${data.photo}`);
      } catch (err) {
        console.error("Gagal ambil data author:", err);
      }
    };

    fetchAuthor();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    if (photo) formData.append("photo", photo);

    try {
      await API.post(`/authors/${id}?_method=PUT`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Author berhasil diperbarui ✅");
      navigate("/admin/authors");
    } catch (err) {
      console.error("Gagal update author:", err);
      alert("Gagal memperbarui author ❌");
    }
  };

  return (
    <div className="p-6 bg-[#0f172a] min-h-screen text-gray-200">
      <div className="max-w-xl mx-auto bg-[#1e293b] border border-gray-700 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Edit Author</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0f172a] border border-gray-600 rounded-lg px-3 py-2 focus:ring focus:ring-blue-600 outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="4"
              className="w-full bg-[#0f172a] border border-gray-600 rounded-lg px-3 py-2 focus:ring focus:ring-blue-600 outline-none"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium">Foto</label>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-lg border border-gray-600 mb-2"
              />
            )}
            <input
              type="file"
              onChange={(e) => {
                setPhoto(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
              className="w-full text-gray-200"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <Link
              to="/admin/authors"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Kembali
            </Link>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
