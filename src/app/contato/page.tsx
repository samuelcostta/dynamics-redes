"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContatoPage() {
  return (
    <section
      className="relative bg-gray-100 py-16 px-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background/goiania2.png')" }} // substitua pela sua imagem
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Entre em Contato</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
          Atendemos Goiânia - GO e cidades vizinhas com agilidade, profissionalismo e compromisso com a sua segurança.
        </p>

        <p className="text-gray-700 mb-6 text-lg">
          Para dúvidas, orçamentos ou agendamento de visita, clique abaixo e fale diretamente conosco pelo WhatsApp.
        </p>

        <a
          href="https://wa.me/5562999999999" // Substitua pelo número real
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition"
        >
          <FaWhatsapp className="text-2xl" />
          Falar no WhatsApp
        </a>

        {/* Mapa embutido */}
        <div className="mt-15 rounded-xl overflow-hidden shadow-lg border">
          <iframe
            title="Mapa de Goiânia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122205.73873745544!2d-49.372458734973195!3d-16.686891994238955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12c9673bfe3%3A0x35cfa970eacfa3b1!2zR29pw6FuaWEsIEdP!5e0!3m2!1spt-BR!2sbr!4v1717511112345!5m2!1spt-BR!2sbr"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
