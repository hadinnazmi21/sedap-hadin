import { useRef } from "react";
import products from "../../assets/products.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth * 0.9;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-green-500 font-semibold uppercase text-sm tracking-widest">
            Produk Unggulan
          </span>
          <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "Poppins" }}>
            Makanan Viral Pilihan Kami
          </h2>
          <p className="text-gray-600 mt-2">
            Cicipi berbagai makanan yang sedang naik daun di TikTok & Instagram!
          </p>
        </div>

        <div className="relative">
          {/* Tombol Kiri */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition hidden md:block"
            aria-label="Scroll Left"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Scrollable Produk */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scroll-smooth px-2 pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[260px] max-w-xs bg-green-50 rounded-xl shadow-md overflow-hidden flex-shrink-0 hover:shadow-lg transition"
                style={{ scrollSnapAlign: "start" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-green-600 font-bold mt-2">Rp {product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition hidden md:block"
            aria-label="Scroll Right"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
