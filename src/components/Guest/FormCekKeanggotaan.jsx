import { useState } from "react";
import members from "../../assets/members.json"; // Pastikan path-nya sesuai

export default function FormCekKeanggotaan() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!email) {
      setError("❗ Email tidak boleh kosong.");
      return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setError("❗ Format email tidak valid.");
      return;
    }

    const member = members.find((m) => m.email.toLowerCase() === email.toLowerCase());

    if (member) {
      setResult(member);
    } else {
      setError("❌ Email tidak terdaftar sebagai member.");
    }
  };

  const getStyle = (tipe) => {
    if (tipe === "silver") return "bg-gray-100 text-gray-700 border border-gray-300";
    if (tipe === "gold") return "bg-yellow-100 text-yellow-700 border border-yellow-300";
    if (tipe === "platinum") return "bg-purple-100 text-purple-700 border border-purple-300";
    return "bg-gray-100 text-gray-800 border border-gray-300";
  };

  const getIcon = (tipe) => {
    if (tipe === "silver") return "🥈";
    if (tipe === "gold") return "🥇";
    if (tipe === "platinum") return "🏆";
    return "👤";
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Cek Keanggotaan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          className="w-full border border-gray-300 p-3 rounded-lg"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
        >
          Cek
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="mt-4 p-4 text-red-700 bg-red-100 border border-red-300 rounded-lg">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div
          className={`mt-4 p-4 rounded-lg flex items-center gap-4 ${getStyle(result.tipe_member)}`}
        >
          <div className="text-3xl">{getIcon(result.tipe_member)}</div>
          <div>
            <p className="font-semibold">Selamat datang, {result.nama}!</p>
            <p>Anda adalah member <strong className="uppercase">{result.tipe_member}</strong>.</p>
          </div>
        </div>
      )}
    </div>
  );
}
