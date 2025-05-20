import Header from "../../components/Guest/Header";
import HeroSection from "../../components/Guest/HeroSection";
import AboutUsSection from "../../components/Guest/AboutUsSection";
import Card from "../../components/Guest/Card";
import testimonials from "../../assets/testimonials.json";
import {
  FaCubes,
  FaTools,
  FaInfinity,
  FaProjectDiagram,
  FaBullseye,
} from "react-icons/fa";
import ProductSection from "../../components/Guest/ProductSection";
import TestimonialCard from "../../components/Guest/TestimonialCard";
import Footer from "../../components/Guest/Footer";
import FormCekKeanggotaan from "../../components/Guest/FormCekKeanggotaan";

export default function Home() {
  return (
    <div id="home-container" className="font-sans bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <AboutUsSection />
      </section>

      {/* Features / Cards */}
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={<FaCubes />}
            title="Pilihan Menu Variatif"
            description="Nikmati beragam pilihan menu makanan yang menggugah selera setiap hari, mulai dari masakan rumahan hingga hidangan modern kekinian."
          />

          <Card
            icon={<FaProjectDiagram />}
            title="Pesan Mudah & Cepat"
            description="Dengan antarmuka yang user-friendly, kamu bisa memesan makanan favorit hanya dalam beberapa klik—praktis dan tanpa ribet!"
          />

          <Card
            icon={<FaTools />}
            title="Kustomisasi Menu"
            description="Sedap memberikan fleksibilitas untuk memilih menu sesuai selera atau kebutuhan diet, termasuk vegetarian & rendah kalori."
          />

          <Card
            icon={<FaInfinity />}
            title="Langganan Fleksibel"
            description="Pilih paket langganan harian, mingguan, atau bulanan sesuai jadwal dan kebutuhan kamu. Bebas atur kapan makan!"
          />

          <Card
            icon={<FaBullseye />}
            title="Pengantaran Tepat Waktu"
            description="Sedap menjamin pengantaran makanan tepat waktu ke lokasi kamu, agar makanan tetap hangat dan segar saat disantap."
            showImage={true}
            imageUrl="/img/card6.png"
          />
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <ProductSection />
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Apa yang dikatakan pelanggan kami!</h2>
          <p className="text-gray-600 mt-2">
            Eksplor testimoni untuk menemukan yang anda cari
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Form Keanggotaan */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <FormCekKeanggotaan />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
