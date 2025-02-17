"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Bagaimana cara mulai jual sampah di EcoBank?",
      answer:
        "Gampang banget! Daftar dulu di EcoBank, pilih sampah anorganik yang mau kamu jual, lalu ikuti petunjuknya. Dalam hitungan menit, sampahmu bisa jadi uang!",
    },
    {
      question: "Apakah ada jenis sampah tertentu yang tidak diterima di EcoBank?",
      answer:
        "Untuk saat ini, EcoBank hanya menerima sampah anorganik seperti plastik, kertas, logam, dan kaca. Sampah organik atau bahan berbahaya belum bisa ditukar di EcoBank ya!",
    },
    {
      question: "Berapa lama proses pembayaran setelah sampah dijual?",
      answer:
        "Setelah transaksi berhasil, pembayaran langsung diproses ke akunmu. Cepat dan tanpa ribet!",
    },
    {
      question: "Apakah saya bisa melihat harga sampah sebelum menjualnya?",
      answer:
        "Tentu bisa! EcoBank menyediakan daftar harga transparan untuk semua jenis sampah anorganik. Jadi, kamu bisa cek dulu sebelum jual.",
    },
    {
      question: "Apakah saya perlu memilah sampah sebelum dijual di EcoBank?",
      answer:
        "Lebih baik iya! Sampah yang sudah dipilah memudahkan proses penjualan dan meningkatkan nilainya. Yuk, mulai memilah dari sekarang!",
    },
    {
      question: "Apakah ada batas minimal jumlah sampah yang bisa dijual?",
      answer:
        "Nggak ada batas minimal! Kamu bisa jual sampah meski cuma sedikit. Setiap sampah punya nilai di EcoBank!",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl items-start justify-center scroll-mt-[120px] mx-auto p-10 my-4 lg:my-12" id="faq">
      {/* Left Section */}
      <div className="flex flex-1 relative">
        <div className="flex flex-1 flex-col justify-center">
          <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide">
            Faq Ecobank
          </h4>
          <h1 className="text-eb-primary-gray-800 font-bold text-3xl md:text-4xl max-w-md mt-2">
            Ada pertanyaan? Kami Punya Jawabannya!
          </h1>
          <h5 className="text-eb-primary-gray-600 text-base font-medium max-w-sm mt-4">
            Temukan jawaban cepat untuk pertanyaan umum tentang Ecobank kami.
          </h5>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-1 relative w-full pt-10 md:pt-10 lg:pt-0">
        <div className="grid gap-4 w-full">
          {faqData.map((item, index) => (
            <div key={index} className="bg-eb-primary-gray-100 border-2 border-eb-primary-gray-300 rounded-3xl px-6 py-4">
              <div className="flex flex-row items-center justify-between cursor-pointer" onClick={() => toggleIndex(index)}>
                <h5 className="font-semibold text-eb-primary-green-700">
                  {item.question}
                </h5>
                <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                  {openIndex === index ? <ChevronUp className="h-4" /> : <ChevronDown className="h-4" />}
                </div>
              </div>

              {/* Animasi untuk jawaban */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="text-eb-primary-gray-600 text-sm max-w-lg mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
