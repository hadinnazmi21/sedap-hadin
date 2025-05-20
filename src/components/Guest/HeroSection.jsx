export default function HeroSection() {
  return (
    <section
      className="relative bg-white px-8 py-20 overflow-hidden font-rethink"
      style={{
        backgroundImage:
          "url('/img/bg-pattern.svg')", // gunakan SVG pattern geometric, atau pattern PNG transparan
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* Optional: Overlay warna putih transparan agar pattern lebih soft */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
            Makan Enak, Hidup Lebih Sedap
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            Jelajahi Rasa <br /> dan Nikmati Hidup Lebih{" "}
            <span className="text-green-500">Sedap.</span>
          </h1>
          <p className="text-gray-600 text-base max-w-lg">
            Kami menghadirkan berbagai pilihan makanan lezat, praktis, dan bergizi
            yang siap memanjakan lidahmu. Mulai dari cemilan rumahan hingga makanan berat
            kekinian, semua bisa kamu temukan di Sedap.
          </p>

          {/* Ratings */}
          <div className="flex space-x-8 items-center pt-2">
            <div className="flex items-center space-x-2">
              <img src="/img/google.png" alt="Google" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-sm flex items-center">
                  4.9
                  <span className="text-yellow-400 ml-1">★★★★★</span>
                </p>
                <p className="text-xs text-gray-500">Review terbaik di Google</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/img/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-sm flex items-center">
                  4.8
                  <span className="text-yellow-400 ml-1">★★★★★</span>
                </p>
                <p className="text-xs text-gray-500">Dipercaya oleh UMKM & Startup</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4 pt-4">
            <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition">
              Lihat Menu
            </button>
            <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
              Mulai Pesan
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 relative">
          <img
            src="/img/HeroSec.png"
            alt="Hero Section Makanan"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
