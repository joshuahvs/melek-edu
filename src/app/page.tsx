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
        "Setelah ikut webinar prompting MelekAI, produktivitas design saya naik 3x lipat! Sekarang bisa buat mockup dan copy testing jauh lebih cepat dengan AI. Klien senang, tarif naik, tapi workload malah berkurang. Teknik yang diajarkan benar-benar applicable langsung!",
      avatar: "👩‍💼",
    },
    {
      name: "Agus",
      role: "Data Analyst, Jakarta",
      content:
        "Webinar Advanced Prompting MelekAI game changer banget! Dulu butuh berjam-jam untuk analisis data, sekarang dengan teknik prompting yang tepat, waktu analisis berkurang 60%. Tim jadi lebih cepat ambil keputusan strategis. ROI dari webinar ini crazy high!",
      avatar: "👨‍💻",
    },
    {
      name: "Siti",
      role: "Freelance Content Creator, Yogyakarta",
      content:
        "Webinar Content Creation with AI Prompting benar-benar merubah cara kerja saya. Dalam sebulan setelah webinar, saya bisa launch 5 service baru yang langsung sold out. Income naik 200%! Prompting templates yang diberikan sangat praktis dan repeatable.",
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
                href="/pricing"
                className="hover:text-[#a529bb] transition-all duration-300 hover:scale-105"
              >
                Harga
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
              🎉 WEBINAR PROMPTING AI GRATIS - TINGGAL DAFTAR!
            </div>

            <div className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              &ldquo;1000+ individu sudah menguasai teknik prompting AI
              profesional!&rdquo;
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              {/* Left side - Main content */}
              <div className="lg:w-1/2 text-left">
                <div className="inline-block bg-green-500/20 border border-green-500/50 px-5 py-2 rounded-full text-green-400 font-semibold mb-4">
                  🎉 GRATIS! Webinar Eksklusif: Dari Pemula hingga Expert Prompting
                </div>
                <div className="inline-block bg-[#a529bb] bg-opacity-10 border border-[#a529bb]/30 px-5 py-2 rounded-full text-white font-semibold mb-8">
                  ⭐ Tinggal Daftar - Langsung Bisa Ikut!
                </div>

                              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-[#a529bb] bg-clip-text text-transparent">
                  Kupas Tuntas Bagaimana Perusahaan/Individu Bisa{" "}
                  <span className="text-yellow-400">&ldquo;Naik Kelas&rdquo;</span>{" "}
                  Dalam 1 Bulan Menggunakan AI?
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
                    MelekAI adalah platform pembelajaran AI prompting terdepan
                    yang telah membantu ribuan profesional menguasai teknologi
                    AI. Dengan metode pembelajaran interaktif melalui webinar
                    eksklusif, workshop praktis, dan mentoring langsung dari
                    para ahli AI.
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
                    Kami berkomitmen membantu para{" "}
                    <span className="font-bold text-purple-400">
                      profesional dan entrepreneur
                    </span>{" "}
                    menguasai AI prompting untuk meningkatkan produktivitas
                    hingga 10x lipat. Melalui webinar interaktif, workshop
                    praktis, dan komunitas pembelajar aktif, kami pastikan
                    setiap peserta mendapat{" "}
                    <span className="font-bold text-green-400">
                      hasil terukur dalam 30 hari
                    </span>{" "}
                    atau{" "}
                    <span className="font-bold text-green-400">
                      100% uang kembali
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                🎯 <span className="text-purple-400">Success Stories:</span>{" "}
                Bagaimana Peserta Webinar Kami Mencapai Breakthrough dalam AI
                Prompting
              </h2>
              <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
                Lihat transformasi nyata dari peserta webinar MelekAI yang
                berhasil meningkatkan produktivitas dan income mereka
              </p>
            </div>

            {/* Purple sections with content */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left purple section */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  📈 HASIL WEBINAR: PROMPTING UNTUK PRODUCTIVITY
                </h3>

                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">
                    1. TEKNIK FOUNDATION
                  </h4>
                  <p className="text-purple-100 mb-4">
                    Peserta belajar struktur prompting yang efektif dari dasar.
                    Dalam webinar ini, mereka menguasai cara berkomunikasi
                    dengan AI untuk hasil maksimal.
                  </p>

                  <div className="bg-white/20 p-4 rounded-lg mb-4">
                    <div className="text-sm mb-2">IMPROVEMENT RATE</div>
                    <div className="flex gap-4 text-xs">
                      <span>Produktivitas: +300%</span>
                      <span>Akurasi: 95%</span>
                      <span>Efisiensi: +250%</span>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="bg-blue-500 p-4 rounded-lg inline-block">
                      <div className="text-white font-bold">
                        BEFORE/AFTER COMPARISON
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right purple section */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  🚀 ADVANCED PROMPTING MASTERY
                </h3>

                <p className="text-purple-100 mb-6">
                  Peserta webinar lanjutan belajar teknik prompting untuk
                  business automation, content creation, dan problem solving
                  yang kompleks. Hasilnya? Income naik signifikan!
                </p>

                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Content Creation</span>
                    <span className="text-sm">Business Analysis</span>
                    <span className="text-sm">Automation</span>
                  </div>
                  <div className="text-xs">
                    <div>Peserta: 500+ | Success Rate: 92%</div>
                    <div>Avg. Income Increase: +150%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom explanation */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-left bg-white/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
                  &ldquo;Kupas Tuntas: Cara Professionals Naik Level dengan AI
                  Prompting dalam 30 Hari&rdquo;
                </h3>

                <div className="ml-8 mt-8">
                  <h4 className="font-bold mb-4 text-xl">
                    Roadmap Pembelajaran:
                  </h4>
                  <ol className="list-decimal list-inside space-y-4 text-gray-300">
                    <li>
                      <span className="font-bold text-purple-300">
                        🎯 Master Prompt Engineering Fundamentals
                      </span>
                      <br />
                      <span className="text-sm text-gray-400">
                        Webinar: &ldquo;Zero to Hero Prompting&rdquo; - Setiap
                        Selasa, 19:00 WIB
                      </span>
                    </li>
                    <li>
                      <span className="font-bold text-purple-300">
                        💼 Business Automation dengan AI
                      </span>
                      <br />
                      <span className="text-sm text-gray-400">
                        Workshop: &ldquo;AI untuk Produktivitas 10x&rdquo; -
                        Setiap Kamis, 20:00 WIB
                      </span>
                    </li>
                    <li>
                      <span className="font-bold text-purple-300">
                        📈 Advanced Content & Strategy Creation
                      </span>
                      <br />
                      <span className="text-sm text-gray-400">
                        Masterclass: &ldquo;AI Content Mastery&rdquo; - Setiap
                        Sabtu, 15:00 WIB
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
                  WHAT OUR WEBINAR PARTICIPANTS ARE SAYING
                </h2>
              </div>

              <p className="text-lg text-gray-300 mb-4 max-w-4xl mx-auto">
                <span className="font-bold text-purple-400">
                  &ldquo;Masih ragu dengan kemampuan AI Prompting? Lihat
                  transformasi peserta webinar kami!&rdquo;
                </span>
              </p>
              <p className="text-gray-400 mb-8">
                Bergabunglah dengan 1000+ profesional yang sudah merasakan
                manfaatnya
              </p>

              <div className="text-left bg-white/5 p-8 rounded-2xl max-w-2xl mx-auto mb-12">
                <h3 className="font-bold text-xl mb-4">
                  TESTIMONI PESERTA WEBINAR:
                </h3>
                <TestimonialCarousel />
              </div>

              <div className="mt-8">
                <Link
                  href="#daftar-webinar"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 inline-block"
                >
                  🎯 Daftar Webinar Gratis Sekarang!
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
                🎯 Program Webinar AI Prompting GRATIS
              </h2>
              <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
                Kuasai seni dan teknik prompting AI melalui webinar interaktif
                bersama para expert di bidangnya
              </p>
              <div className="inline-block bg-green-500/20 border border-green-500/50 px-6 py-3 rounded-full">
                <span className="text-green-400 font-bold text-lg">
                  🎉 SEMUA PROGRAM SAAT INI GRATIS - TINGGAL DAFTAR!
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Free Webinar */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">�</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Webinar Foundation
                </h3>
                <p className="text-gray-300 mb-6">
                  Webinar gratis setiap minggu untuk memahami dasar-dasar AI
                  prompting dan teknik fundamental.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>✓ Setiap Selasa, 19:00 WIB</li>
                  <li>✓ &quot;Zero to Hero Prompting&quot;</li>
                  <li>✓ Live Q&A dengan expert</li>
                  <li>✓ Template prompting starter pack</li>
                  <li>✓ Akses komunitas Discord</li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    GRATIS
                  </div>
                  <Link
                    href="#daftar-webinar"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>

              {/* Premium Workshop */}
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Workshop Pro Series
                </h3>
                <p className="text-gray-300 mb-6">
                  Workshop intensif dengan hands-on practice untuk business
                  automation dan advanced prompting techniques.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>✓ Setiap Kamis, 20:00 WIB</li>
                  <li>✓ &quot;AI untuk Produktivitas 10x&quot;</li>
                  <li>✓ Business automation workflows</li>
                  <li>✓ 1-on-1 mentoring session</li>
                  <li>✓ Advanced prompting templates</li>
                  <li>✓ Certificate of completion</li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    GRATIS
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    Tinggal daftar saja!
                  </div>
                  <Link
                    href="#daftar-webinar"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>

              {/* Masterclass */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Masterclass VIP
                </h3>
                <p className="text-gray-300 mb-6">
                  Masterclass eksklusif dengan expert untuk advanced content
                  creation dan strategic AI implementation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>✓ Setiap Sabtu, 15:00 WIB</li>
                  <li>✓ &quot;AI Content & Strategy Mastery&quot;</li>
                  <li>✓ Personal AI assistant setup</li>
                  <li>✓ Exclusive mastermind group</li>
                  <li>✓ Direct access to instructors</li>
                  <li>✓ Lifetime updates & materials</li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    GRATIS
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    Tinggal daftar saja!
                  </div>
                  <Link
                    href="#daftar-webinar"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Daftar Sekarang
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
                    Foundation Webinar
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    &ldquo;Prompt Engineering Basics&rdquo;
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                  <div className="text-xl font-bold">Kamis</div>
                  <div className="text-sm text-gray-300">20:00 - 22:00 WIB</div>
                  <div className="text-purple-300 font-semibold">
                    Pro Workshop
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    &ldquo;Business Automation with AI&rdquo;
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                  <div className="text-xl font-bold">Sabtu</div>
                  <div className="text-sm text-gray-300">15:00 - 17:00 WIB</div>
                  <div className="text-purple-300 font-semibold">
                    VIP Masterclass
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    &quot;Advanced Content Strategy&quot;
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
                🚀 MelekAI in Numbers
                <br />
                Transformasi Nyata dari Webinar Kami
              </h3>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">1000+</div>
                <div className="text-sm text-gray-300">Peserta Webinar</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-green-400">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">3x</div>
                <div className="text-sm text-gray-300">
                  Avg. Productivity Boost
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-300">Community Support</div>
              </div>
            </div>

            {/* Featured Success Stories */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-2xl mb-2">👩‍💼</div>
                <div className="font-bold text-purple-300">
                  Content Creators
                </div>
                <div className="text-sm text-gray-400">
                  300+ professionals boosted their content creation speed by
                  250%
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-2xl mb-2">💼</div>
                <div className="font-bold text-purple-300">
                  Business Analysts
                </div>
                <div className="text-sm text-gray-400">
                  200+ analysts automated their workflow and increased
                  efficiency
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-bold text-purple-300">Entrepreneurs</div>
                <div className="text-sm text-gray-400">
                  500+ business owners streamlined operations with AI
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl max-w-md mx-auto">
                <h4 className="text-xl font-bold mb-4">
                  Ready to Join the AI Revolution?
                </h4>
                <Link
                  href="#daftar-webinar"
                  className="bg-white text-blue-800 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 inline-block"
                >
                  Join Next Webinar
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  &quot;MelekAI webinars have completely transformed how I approach
                  my daily work. The prompting techniques are game-changing!&quot;
                </p>
                <p className="text-xs mt-2 text-blue-200">
                  - Satisfied Participant
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
                🎯 Siap Transform Karier dengan AI Prompting GRATIS?
              </h2>
              <p className="text-[#c0c0c0] text-lg mb-12 max-w-2xl mx-auto">
                Bergabunglah dengan 500+ profesional yang sudah merasakan
                transformasi karier melalui webinar eksklusif MelekAI.
                <strong className="text-green-400">
                  {" "}
                  Semua program saat ini 100% GRATIS - tinggal daftar!
                </strong>
              </p>

              {/* Registration Form */}
              <WebinarRegistrationForm />

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl mb-3">🎓</div>
                  <h4 className="font-bold text-white mb-2">Webinar Gratis</h4>
                  <p className="text-sm text-gray-300">
                    Akses penuh ke semua materi fundamental prompting AI
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl mb-3">💬</div>
                  <h4 className="font-bold text-white mb-2">
                    Komunitas Discord
                  </h4>
                  <p className="text-sm text-gray-300">
                    Bergabung dengan 1000+ member untuk diskusi dan sharing
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl mb-3">📜</div>
                  <h4 className="font-bold text-white mb-2">
                    Sertifikat Digital
                  </h4>
                  <p className="text-sm text-gray-300">
                    Dapatkan sertifikat keikutsertaan yang bisa dipajang di
                    LinkedIn
                  </p>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p className="mb-2">
                  🔥 <strong className="text-purple-300">Terbatas!</strong>{" "}
                  Hanya tersedia untuk 100 pendaftar pertama bulan ini
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
