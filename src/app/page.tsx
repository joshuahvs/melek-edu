"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import WebinarRegistrationForm from "@/components/WebinarRegistrationForm";

// Floating Particles Component
const Particles = () => {
  useEffect(() => {
    const particleCount = 30;
    const container = document.getElementById("particles");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = Math.random() * 3 + 5 + "s";
      container.appendChild(particle);
    }
  }, []);
  return (
    <div
      id="particles"
      className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none"
    >
      <style>{`
                .particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(165,41,187,0.5);
                    border-radius: 50%;
                    animation: float 8s infinite ease-in-out;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
                }
            `}</style>
    </div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Rina",
      role: "Product Designer, Surabaya",
      content:
        "Prompting Class bikin saya punya bank prompt yang rapi. Mockup, UX copy, sampai user research tinggal 1-2 iterasi. Tim puas, saya bisa ambil side project baru tanpa burnout.",
      avatar: "👩‍💼",
    },
    {
      name: "Agus",
      role: "Data Analyst, Jakarta",
      content:
        "Kuliah AI ngasih jalur jelas buat orang non-coding kayak saya. Mulai dari Google Colab sampai deploy dashboard prediksi internal. Bos langsung approve eksperimen saya karena ada hasil nyata minggu itu juga.",
      avatar: "👨‍💻",
    },
    {
      name: "Siti",
      role: "Freelance Content Creator, Yogyakarta",
      content:
        "Cuan AI bantu saya nge-pack skill prompting jadi layanan berbayar. Dapet template pitch deck, struktur pricing, dan skrip closing. Dalam 3 minggu, saya closing 4 klien bundling konten + automasi chat.",
      avatar: "✍️",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-8 rounded-2xl backdrop-blur-md border border-purple-500/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevTestimonial}
          className="bg-purple-600/20 hover:bg-purple-600/40 p-3 rounded-full transition-all duration-300"
        >
          ◀️
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-purple-600/20 hover:bg-purple-600/40 p-3 rounded-full transition-all duration-300"
        >
          ▶️
        </button>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div
      style={{ backgroundColor: "#000000" }}
      className="text-white min-h-screen relative overflow-hidden"
    >
      {/* Gradient background accents */}
      <div className="pointer-events-none select-none absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#a529bb]/60 via-transparent to-transparent rounded-full blur-3xl z-0" />
      <div className="pointer-events-none select-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#a529bb]/60 via-transparent to-transparent rounded-full blur-3xl z-0" />
      <Particles />

      {/* Header/Navbar with Glass Effect */}
      <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center py-5 px-6">
          <Link href="#beranda" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="MelekAI Logo"
              className="h-10 w-auto"
              width={120}
              height={40}
              priority
            />
          </Link>
          <ul className="hidden md:flex gap-10 text-white/90 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="#tentang"
                className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="#webinar"
                className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105"
              >
                Webinar
              </Link>
            </li>
            <li>
              <Link
                href="#testimoni"
                className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105"
              >
                Testimoni
              </Link>
            </li>
            <li>
              <Link
                href="#kontak"
                className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105"
              >
                Kontak
              </Link>
            </li>
          </ul>
          <Link
            href="#daftar-webinar"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-sm uppercase backdrop-blur-sm"
          >
            Daftar GRATIS
          </Link>
        </nav>
      </header>

      <main className="relative z-10 pt-8">
        {/* Hero Section with Promise Banner */}
        <section id="beranda" className="hero text-center py-32 relative">
          <div className="container mx-auto px-6">
            {/* Promise Banner */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-8 rounded-lg mb-8 inline-block shadow-2xl animate-pulse">
              🎉 PROMPTING CLASS · KULIAH AI · CUAN AI — GELOMBANG BARU DIBUKA!
            </div>

            <div className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              &ldquo;10.000+ kreator, karyawan, dan founder sudah naik kelas
              bersama 3 program utama MelekAI.&rdquo;
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              {/* Left side - Main content */}
              <div className="lg:w-1/2 text-left">
                <div className="inline-block bg-green-500/20 border border-green-500/50 px-5 py-2 rounded-full text-green-400 font-semibold mb-4">
                  🎓 Paket Lengkap: Prompting Class · Kuliah AI · Cuan AI
                </div>
                <div className="inline-block bg-[#a529bb] bg-opacity-10 border border-[#a529bb]/30 px-5 py-2 rounded-full text-white font-semibold mb-8">
                  ⭐ Kuota Desember terbatas · Semua sesi live + rekaman
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                    Cara paling praktis buat jadi{" "}
                    <span className="text-yellow-400">siap era AI</span> dalam
                    30 hari
                  </span>
                </h1>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Transformasi Digital Dimulai dari Prompting yang Tepat
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Prompting Class bantu kamu nulis prompt yang bikin AI nurut,
                    Kuliah AI mengajarkan machine learning yang relevan buat
                    industri, dan Cuan AI menunjukan cara nyata memonetisasi
                    skill tersebut. Formatnya live, penuh studi kasus lokal,
                    plus template siap pakai.
                  </p>
                  <Link
                    href="#webinar"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg mt-4 transition-all duration-300 inline-block"
                  >
                    Lihat Jadwal Webinar
                  </Link>
                </div>
              </div>

              {/* Right side - Arrow and commitment text */}
              <div className="lg:w-1/2 flex flex-col items-center">
                <div className="text-8xl mb-8 animate-bounce">↷</div>
                <div className="text-center max-w-lg">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Tiga jalur belajar ini dirancang buat{" "}
                    <span className="font-bold text-purple-400">
                      profesional, founder, freelancer, dan mahasiswa
                    </span>{" "}
                    yang mau punya skill AI yang kebal tren. Setiap program
                    punya mentor industri, sesi praktik, dan target hasil jelas:
                    kebiasaan baru dalam 7 hari, portofolio jadi dalam 14 hari,
                    cuan perdana maksimal 30 hari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section id="tentang" className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                🎯{" "}
                <span className="text-purple-400">
                  Kenapa 3 Program MelekAI Selalu Laris:
                </span>{" "}
                Bukti nyata progres peserta hanya dalam hitungan minggu
              </h2>
              <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
                Dari nambah kecepatan kerja, paham machine learning, sampai
                dapet income perdana dari AI—semuanya punya cerita suksesnya
              </p>
            </div>

            {/* Purple sections with content */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left purple section */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  📈 Prompting Class: Produktivitas naik 3x
                </h3>

                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">
                    Minggu 1: Struktur Prompt Anti-Buntu
                  </h4>
                  <p className="text-purple-100 mb-4">
                    Peserta belajar kerangka BEATS (Brief, Evidence, Angle,
                    Tone, Step) supaya setiap prompt langsung ditangkap AI.
                    Hasilnya output lebih akurat tanpa revisi berkali-kali.
                  </p>

                  <div className="bg-white/20 p-4 rounded-lg mb-4">
                    <div className="text-sm mb-2">Dampak 7 hari pertama</div>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span>Ide konten: +320%</span>
                      <span>Draft laporan: 40 menit → 12 menit</span>
                      <span>Revisi klien turun 70%</span>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="bg-blue-500 p-4 rounded-lg inline-block">
                      <div className="text-white font-bold">
                        Studi Kasus: copywriter fintech & UX writer
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right purple section */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  🚀 Kuliah AI: Machine Learning versi Indonesia
                </h3>

                <p className="text-purple-100 mb-6">
                  Bukan teori berat. Kita bedah pipeline ML yang kepake di
                  produk lokal: rekomendasi konten, klasifikasi dokumen, sampai
                  scoring risiko. Ada mini capstone yang langsung
                  dipresentasikan bareng mentor industri.
                </p>

                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <span>Peserta aktif: 420</span>
                    <span>Proyek jadi: 310</span>
                    <span>Lulus hiring: 62</span>
                  </div>
                  <div className="text-xs">
                    • Stack yang dipakai: Python, Colab, Vertex AI
                    <br />• Mentor tetap dari startup AI dan korporat besar
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom explanation */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-left bg-white/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
                  &ldquo;Roadmap 30 Hari: Prompting Class → Kuliah AI → Cuan
                  AI&rdquo;
                </h3>

                <div className="ml-8 mt-8">
                  <h4 className="font-bold mb-4 text-xl">
                    Roadmap Pembelajaran:
                  </h4>
                  <ol className="list-decimal list-inside space-y-4 text-gray-300">
                    <li>
                      <span className="font-bold text-purple-300">
                        🎯 Prompting Class – Fundamental + Template
                      </span>
                      <br />
                      <span className="text-sm text-gray-400">
                        Live tiap Selasa, 19:00 WIB: praktek bikin 12 prompt
                        untuk marketing, operasional, dan riset
                      </span>
                    </li>
                    <li>
                      <span className="font-bold text-purple-300">
                        💼 Kuliah AI – Machine Learning yang Aktual
                      </span>
                      <br />
                      <span className="text-sm text-gray-400">
                        Kamis, 20:00 WIB: bangun model sederhana sampai deploy
                        ke produk internal
                      </span>
                    </li>
                    <li>
                      <span className="font-bold text-purple-300">
                        💰 Cuan AI – Monetisasi Skill & Produk
                      </span>
                      <br />
                      <span className="text-sm text-gray-400">
                        Sabtu, 15:00 WIB: studi kasus freelancing, micro-SaaS,
                        dan paket layanan AI buat klien lokal
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="#daftar-webinar"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 inline-block"
                  >
                    📅 Lihat Jadwal Webinar Lengkap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimoni"
          className="py-20 bg-gradient-to-b from-black/30 to-purple-900/20"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl backdrop-blur-md border border-purple-500/30 inline-block mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-red-400 mb-2">
                  Cerita nyata alumni Prompting Class, Kuliah AI, dan Cuan AI
                </h2>
              </div>

              <p className="text-lg text-gray-300 mb-4 max-w-4xl mx-auto">
                <span className="font-bold text-purple-400">
                  &ldquo;Masih mikir AI itu ribet? Intip gimana alumni kami
                  dapet portofolio dan cuan baru hanya dalam beberapa
                  sesi.&rdquo;
                </span>
              </p>
              <p className="text-gray-400 mb-8">
                Bergabung bersama 1000+ profesional yang sudah menjadikan AI
                sebagai senjata kerja harian
              </p>

              <div className="text-left bg-white/5 p-8 rounded-2xl max-w-2xl mx-auto mb-12">
                <h3 className="font-bold text-xl mb-4">
                  TESTIMONI PESERTA PROGRAM:
                </h3>
                <TestimonialCarousel />
              </div>

              <div className="mt-8">
                <Link
                  href="#daftar-webinar"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 inline-block"
                >
                  🎯 Amankan kursi gelombang ini
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course/Program Section */}
        <section id="webinar" className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                🎯 3 Program Unggulan MelekAI
              </h2>
              <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
                Pilih jalur sesuai kebutuhanmu: kuasai prompting, pahami machine
                learning, atau langsung praktek cari cuan dengan AI
              </p>
              <div className="inline-block bg-green-500/20 border border-green-500/50 px-6 py-3 rounded-full">
                <span className="text-green-400 font-bold text-lg">
                  🎉 Akses live, rekaman, komunitas, dan template siap pakai
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Prompting Class */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Prompting Class
                </h3>
                <p className="text-gray-300 mb-6">
                  Belajar kerangka prompting yang bikin AI nurut: copywriting,
                  analisis, riset, sampai automasi workflow sederhana.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>✓ Live tiap Selasa, 19:00 WIB</li>
                  <li>✓ 12 template BEATS + workbook</li>
                  <li>✓ Studi kasus marketing dan operasional</li>
                  <li>✓ Klinik prompt 1-on-1</li>
                  <li>✓ Akses komunitas Discord</li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    Gratis untuk gelombang ini
                  </div>
                  <Link
                    href="#daftar-webinar"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Ikut Prompting Class
                  </Link>
                </div>
              </div>

              {/* Kuliah AI */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Favorit Talenta Tech
                  </span>
                </div>
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Kuliah AI (Machine Learning)
                </h3>
                <p className="text-gray-300 mb-6">
                  Kurikulum ringkas: data prep, modeling, evaluasi, dan cara
                  ngomongin hasilnya ke stakeholder non-teknis.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>✓ Live tiap Kamis, 20:00 WIB</li>
                  <li>✓ Build 3 mini proyek (NLP, CV, tabular)</li>
                  <li>✓ Mentoring teknis & career review</li>
                  <li>✓ Template presentasi ML</li>
                  <li>✓ Sertifikat dan rekomendasi LinkedIn</li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    Gratis s.d. 31 Desember
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    Kuota 120 kursi
                  </div>
                  <Link
                    href="#daftar-webinar"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Ikut Kuliah AI
                  </Link>
                </div>
              </div>

              {/* Cuan AI */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cuan AI</h3>
                <p className="text-gray-300 mb-6">
                  Fokus ke monetisasi: bikin paket layanan, micro-product, atau
                  automasi internal yang bisa kamu jual ke klien.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>✓ Live tiap Sabtu, 15:00 WIB</li>
                  <li>✓ Toolkit pricing & proposal</li>
                  <li>✓ Studi kasus freelancing & agency</li>
                  <li>✓ Demo automasi penjualan</li>
                  <li>✓ Grup accountability mingguan</li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    Gratis untuk 100 pendaftar pertama
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    Bonus template funnel & pitch deck
                  </div>
                  <Link
                    href="#daftar-webinar"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Ikut Cuan AI
                  </Link>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">
                📅 Jadwal Webinar Minggu Ini
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                  <div className="text-xl font-bold">Selasa</div>
                  <div className="text-sm text-gray-300">19:00 - 21:00 WIB</div>
                  <div className="text-purple-300 font-semibold">
                    Prompting Class
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    &ldquo;Kerangka BEATS + prompt library&rdquo;
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                  <div className="text-xl font-bold">Kamis</div>
                  <div className="text-sm text-gray-300">20:00 - 22:00 WIB</div>
                  <div className="text-purple-300 font-semibold">Kuliah AI</div>
                  <div className="text-xs text-gray-400 mt-2">
                    &ldquo;Bangun dan evaluasi model ML&rdquo;
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                  <div className="text-xl font-bold">Sabtu</div>
                  <div className="text-sm text-gray-300">15:00 - 17:00 WIB</div>
                  <div className="text-purple-300 font-semibold">Cuan AI</div>
                  <div className="text-xs text-gray-400 mt-2">
                    &quot;Paket layanan + closing script&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-blue-400">
                🚀 Angka yang membuktikan hype MelekAI bukan gimmick
              </h3>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">10.214</div>
                <div className="text-sm text-gray-300">
                  Alumni aktif sejak 2023
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-green-400">94%</div>
                <div className="text-sm text-gray-300">
                  Melaporkan output kerja 2-4x lebih cepat
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">Rp4,6M</div>
                <div className="text-sm text-gray-300">
                  Total cuan proyek dari komunitas Cuan AI
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-300">
                  Support komunitas & mentor
                </div>
              </div>
            </div>

            {/* Featured Success Stories */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-2xl mb-2">👩‍💼</div>
                <div className="font-bold text-purple-300">
                  Kreator & marketer
                </div>
                <div className="text-sm text-gray-400">
                  300+ peserta Prompting Class bikin kalender konten sebulan
                  dalam 90 menit
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-2xl mb-2">💼</div>
                <div className="font-bold text-purple-300">
                  Data & product people
                </div>
                <div className="text-sm text-gray-400">
                  200+ alumni Kuliah AI membuat mini PoC yang dipakai timnya
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-bold text-purple-300">
                  Founder & freelancer
                </div>
                <div className="text-sm text-gray-400">
                  500+ anggota Cuan AI ngantongi minimal 1 klien berbayar baru
                  setelah bootcamp monetisasi
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl max-w-md mx-auto">
                <h4 className="text-xl font-bold mb-4">
                  Siap jadi generasi kerja yang nggak takut diganti AI?
                </h4>
                <Link
                  href="#daftar-webinar"
                  className="bg-white text-blue-800 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 inline-block"
                >
                  Amankan slot sekarang
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  &quot;Prompting Class jadi alasan saya berani bilang tak apa
                  AI makin canggih. Sekarang saya justru jadi orang yang dicari
                  di kantor.&quot;
                </p>
                <p className="text-xs mt-2 text-blue-200">
                  - Nadya, Strategist FMCG
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="daftar-webinar" className="py-28 cta-section">
          <div className="container mx-auto px-6 text-center">
            <div className="cta-content bg-[#a529bb]/10 border border-[#a529bb]/30 p-16 rounded-2xl backdrop-blur-md">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                🎯 Gabung paket lengkap Prompting Class, Kuliah AI, dan Cuan AI
              </h2>
              <p className="text-[#c0c0c0] text-lg mb-8 max-w-2xl mx-auto">
                Bayangkan punya skill nulis prompt yang rapi, ngerti mekanisme
                machine learning, dan tau cara menawarkannya ke pasar. Itulah
                paket lengkap MelekAI gelombang ini.
                <strong className="text-green-400">
                  {" "}
                  Semua akses masih gratis sampai kuota habis.
                </strong>
              </p>

              {/* Discord CTA */}
              <div className="mb-12">
                <a
                  href="https://discord.gg/H6ChQJZvAW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Gabung Komunitas Discord MelekAI</span>
                </a>
                <p className="text-xs text-gray-400 mt-3">
                  💬 Akses diskusi, sharing progress, dan referal klien dari
                  10.000+ member
                </p>
              </div>

              {/* Registration Form */}
              <WebinarRegistrationForm />

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl mb-3">🧠</div>
                  <h4 className="font-bold text-white mb-2">Prompting Class</h4>
                  <p className="text-sm text-gray-300">
                    Modul, rekaman, dan template baru setiap minggu supaya
                    prompt kamu makin presisi
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl mb-3">🧪</div>
                  <h4 className="font-bold text-white mb-2">Kuliah AI</h4>
                  <p className="text-sm text-gray-300">
                    Mentor bantu review notebook ML kamu hingga siap jadi
                    portofolio
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl mb-3">💸</div>
                  <h4 className="font-bold text-white mb-2">Cuan AI</h4>
                  <p className="text-sm text-gray-300">
                    Playbook monetisasi, accountability weekly, dan referal
                    klien dari komunitas
                  </p>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p className="mb-2">
                  🔥 <strong className="text-purple-300">Terbatas!</strong>{" "}
                  Kuota paket lengkap Prompting Class + Kuliah AI + Cuan AI cuma
                  100 kursi bulan ini
                </p>
                <p>
                  ⏰ Jadwal webinar akan dikirimkan maksimal 24 jam setelah
                  pendaftaran
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <Footer />
    </div>
  );
}
