import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { notesAPI } from "../services/noteAPI";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (editingId) {
        await notesAPI.updateNote(editingId, dataForm);
        setSuccess("Catatan berhasil diperbarui!");
      } else {
        await notesAPI.createNote(dataForm);
        setSuccess("Catatan berhasil ditambahkan!");
      }

      setDataForm({ title: "", content: "" });
      setEditingId(null);
      setTimeout(() => setSuccess(""), 3000);
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
      </div>

      {error && (
        <div className="bg-red-500 text-white p-4 mb-4 rounded-xl shadow-md">
          <p>{error}</p>
        </div>
      )}
      {success && (
        <div className="bg-green-500 text-white p-4 mb-4 rounded-xl shadow-md">
          <p>{success}</p>
        </div>
      )}

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {editingId ? "Edit Catatan" : "Tambah Catatan Baru"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                      focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            disabled={loading}
            required
            rows="2"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                      focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                      rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                      disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              {editingId
                ? loading
                  ? "Menyimpan..."
                  : "Update Catatan"
                : loading
                ? "Menambahkan..."
                : "Tambah Catatan"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setDataForm({ title: "", content: "" });
                }}
                className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold
                        rounded-2xl transition-all"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">
            Daftar Catatan ({notes.length})
          </h3>
        </div>

        {loading && <LoadingSpinner text="Memuat catatan..." />}

        {!loading && notes.length === 0 && !error && (
          <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
        )}

        {!loading && notes.length === 0 && error && (
          <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
        )}

        {!loading && notes.length > 0 && (
          <GenericTable
            columns={["#", "Judul", "Isi", "Aksi"]}
            data={notes}
            renderRow={(note, index) => (
              <>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {index + 1}.
                </td>
                <td className="px-6 py-4 font-semibold text-emerald-600">
                  {note.title}
                </td>
                <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                  {note.content}
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => {
                      setEditingId(note.id);
                      setDataForm({
                        title: note.title,
                        content: note.content,
                      });
                    }}
                    disabled={loading}
                    title="Edit"
                  >
                    <AiFillEdit className="text-blue-500 text-2xl hover:text-blue-700 transition" />
                  </button>
                  <button
                    onClick={() => handleDelete(note.id)}
                    disabled={loading}
                    title="Hapus"
                  >
                    <AiFillDelete className="text-red-500 text-2xl hover:text-red-700 transition" />
                  </button>
                </td>
              </>
            )}
          />
        )}
      </div>
    </div>
  );
}
