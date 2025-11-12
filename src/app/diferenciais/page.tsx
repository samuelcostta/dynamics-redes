"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Diferenciais() {
  const feedbacks = [
    "feedbacks/feedback_izabella.png",
    "feedbacks/feedback_claudia_morais.png",
    "feedbacks/feedback_toon.png",
    "feedbacks/feedback_bruna.png",
    "feedbacks/feedback_mariela.png",
    "feedbacks/feedback_rosecristine.png",
    "feedbacks/feedback_francielly.png",
  ];

  const videos = [
    { src: "/testes/resistencia1.mp4" },
    { src: "/testes/resistencia2.mp4" },  
    { src: "/testes/resistencia4.mp4" },
  ];

  const [current, setCurrent] = useState(0);
  const next = () =>
    setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));

  return (
    <section className="relative bg-gray-50 py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Segurança Comprovada e Clientes Satisfeitos
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Nosso compromisso é oferecer proteção, confiança e qualidade em cada
          instalação. As redes passam por testes de resistência rigorosos e
          contam com o reconhecimento de clientes que priorizam segurança e
          acabamento de alto padrão.
        </p>

        {/* ===================== TESTES DE RESISTÊNCIA ===================== */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Testes Reais de Resistência
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Veja como nossas redes suportam o peso e o impacto em situações
            reais, garantindo a máxima segurança para sua família e pets.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative w-[280px] h-[500px] rounded-2xl overflow-hidden shadow-lg bg-black"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Teste Real
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================== DEPOIMENTOS ===================== */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Depoimentos Reais de Clientes
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            A satisfação dos nossos clientes é o melhor resultado dos nossos
            esforços. Confira alguns dos feedbacks de quem confiou na nossa
            equipe.
          </p>

          {/* Carrossel */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <motion.img
                key={current}
                src={feedbacks[current]}
                alt={`Feedback ${current + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Botões */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow transition"
            >
              ›
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
              {feedbacks.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-blue-600 scale-110" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
