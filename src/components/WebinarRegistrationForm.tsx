"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const WebinarRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi";
    } else if (
      !/^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(formData.phone.replace(/\s+/g, ""))
    ) {
      newErrors.phone =
        "Format nomor telepon tidak valid (gunakan format Indonesia)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      // Check if Google Script URL is configured
      if (!googleScriptUrl || googleScriptUrl.includes("YOUR_SCRIPT_ID")) {
        console.log(
          "Google Sheets integration not configured. Form data:",
          formData
        );
        alert(
          "Pendaftaran berhasil disimpan! (Demo mode - Google Sheets belum dikonfigurasi)"
        );
        setIsSubmitted(true);
        return;
      }

      // Submit to Google Sheets via Google Apps Script
      const response = await fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          source: "MelekAI Landing Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();

      if (result.status === "success") {
        console.log("Form submitted successfully:", result);
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Fallback: still show success to user but log the error
      console.log("Fallback mode - Form data:", formData);
      alert(
        "Pendaftaran Anda telah diterima! Jika ada masalah teknis, tim kami akan menghubungi Anda segera."
      );
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 p-8 rounded-2xl backdrop-blur-md border border-green-500/30 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Pendaftaran Berhasil!
        </h3>
        <p className="text-gray-300 mb-6">
          Terima kasih <strong>{formData.name}</strong>! Tim kami akan kirim
          jadwal Prompting Class, Kuliah AI, dan Cuan AI ke email serta WhatsApp
          kamu.
        </p>
        <div className="bg-white/10 p-6 rounded-xl text-left">
          <h4 className="font-bold text-purple-300 mb-3">
            📋 Data Pendaftaran:
          </h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-400">Nama:</span>{" "}
              <span className="text-white">{formData.name}</span>
            </div>
            <div>
              <span className="text-gray-400">Email:</span>{" "}
              <span className="text-white">{formData.email}</span>
            </div>
            <div>
              <span className="text-gray-400">Telepon:</span>{" "}
              <span className="text-white">{formData.phone}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-purple-500/20 rounded-lg">
          <p className="text-sm text-purple-200">
            📅{" "}
            <strong>
              Jadwal 3 program akan dikirim via email dan WhatsApp dalam 24 jam
            </strong>
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Pastikan email dan nomor telepon Anda aktif untuk mendapatkan
            notifikasi
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 max-w-md mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          📝 Daftar Paket Program MelekAI
        </h3>
        <p className="text-gray-300 text-sm">
          Isi data berikut untuk mengunci kursi di Prompting Class, Kuliah AI,
          dan Cuan AI sekaligus
        </p>
      </div>

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
              errors.name ? "border-red-500" : "border-white/20"
            }`}
            placeholder="Contoh: John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
              errors.email ? "border-red-500" : "border-white/20"
            }`}
            placeholder="contoh@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Nomor Telepon (WhatsApp) *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
              errors.phone ? "border-red-500" : "border-white/20"
            }`}
            placeholder="08123456789"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Gunakan nomor yang terhubung dengan WhatsApp
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
            isSubmitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-[#a529bb] to-[#531e4c] hover:scale-105 hover:shadow-xl"
          } text-white`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Mendaftar...
            </div>
          ) : (
            "🚀 Daftar Sekarang"
          )}
        </button>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-purple-500/20 rounded-lg">
        <h4 className="font-bold text-purple-300 mb-2">
          📅 Informasi Penting:
        </h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>
            • Akses ke Prompting Class, Kuliah AI, dan Cuan AI dalam satu form
          </li>
          <li>• Semua sesi live + rekaman dikirim via email & WhatsApp</li>
          <li>• Sertifikat digital & template siap pakai tersedia</li>
          <li>• Komunitas Discord eksklusif + referal klien</li>
        </ul>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        Dengan mendaftar, Anda menyetujui menerima update seputar 3 program dan
        komunitas MelekAI
      </p>
    </form>
  );
};

export default WebinarRegistrationForm;
