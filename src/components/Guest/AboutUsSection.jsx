export default function AboutUsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-rethink">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Background Circle */}
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-orange-100 rounded-full -z-10 top-0 left-1/2 -translate-x-1/2"></div>
          <img
            src="/img/aboutus.png"
            alt="Tentang Kami"
            className="w-64 sm:w-72 lg:w-80 h-auto object-cover z-10"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          {/* Tag */}
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <span className="bg-orange-100 text-green-500 px-2 py-1 text-sm rounded-full font-medium">
              🍽️
            </span>
            <span className="bg-orange-50 text-green-500 px-3 py-1 rounded-full text-sm font-medium">
              Tentang Kami
            </span>
          </div>

          {/* Heading & Text */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-snug">
            Makanan Lezat & Bergizi Untuk Hidup Lebih Sehat
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto lg:mx-0">
            Sedap hadir untuk memberikan solusi makanan siap saji yang tidak
            hanya enak, tapi juga bergizi dan praktis. Dengan pilihan menu yang
            variatif, kami siap memenuhi kebutuhan harian Anda - dari rumah
            hingga kantor.
          </p>

          {/* Link */}
          <a
            href="#"
            className="text-green-500 font-medium hover:underline inline-flex items-center"
          >
            Selengkapnya <span className="ml-1">→</span>
          </a>

          {/* Quote Box */}
          <div className="border-l-4 border-green-200 pl-4 mt-6 text-left">
            <p className="italic text-gray-700 mb-4">
              “Sedap membantu saya tetap makan sehat meskipun jadwal kerja
              padat. Rasanya enak dan tidak membosankan!”
            </p>
            <div className="flex items-center space-x-3">
              <img
                src="/img/1.jpg"
                alt="Joel"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Joel Purba</p>
                <p className="text-sm text-gray-500">Karyawan Swasta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
