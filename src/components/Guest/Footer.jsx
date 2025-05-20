import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#064e3b] text-green-100 py-12">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-green-400">Sedap</span>.
          </h2>
          <p className="mb-4">
            Layanan makanan siap saji yang enak, cepat, dan terjangkau langsung
            ke meja Anda.
          </p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-full text-sm">
            Berlangganan
          </button>
        </div>

        {/* Produk Kami */}
        <div>
          <h3 className="font-semibold mb-3 text-green-300">Produk Kami</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Menu Harian
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Paket Langganan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Katering Acara
              </a>
            </li>
          </ul>
        </div>

        {/* Tentang Sedap */}
        <div>
          <h3 className="font-semibold mb-3 text-green-300">Tentang Sedap</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Profil Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Karier
              </a>
            </li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="font-semibold mb-3 text-green-300">Bantuan</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Layanan Pelanggan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Panduan Pembelian
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold mb-3 text-green-300">Kontak Kami</h3>
          <ul className="space-y-2">
            <li>Email: support@sedap.com</li>
            <li>WhatsApp: +62 812-3456-7890</li>
            <li>Instagram: @sedap.id</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-700 mt-12 pt-6 px-5 text-sm text-green-300 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>
          2025 © Sedap – Dibuat dengan <span className="text-pink-400">♥</span>{" "}
          oleh Tim Sedap
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <FaFacebookF className="hover:text-white transition cursor-pointer" />
          <FaTwitter className="hover:text-white transition cursor-pointer" />
          <FaYoutube className="hover:text-white transition cursor-pointer" />
          <FaInstagram className="hover:text-white transition cursor-pointer" />
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Syarat & Ketentuan
          </a>
          <a href="#" className="hover:text-white">
            Kebijakan Privasi
          </a>
        </div>
      </div>
    </footer>
  );
}
