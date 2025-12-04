"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";

export default function Sobre() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ================== CABEÇALHO ================== */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Nossa História
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça um pouco mais sobre a trajetória da nossa empresa e o
            compromisso que temos com a segurança e satisfação de nossos
            clientes.
          </p>
        </div>

        {/* ================== SEÇÃO DO FUNDADOR ================== */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-24">
          <div className="flex-shrink-0">
            {/* <Image
              src="/sobre/Arthur_IA2.jpg"
              alt="Foto do fundador"
              width={200}
              height={200}
              className="rounded-2xl shadow-lg object-cover mx-auto md:mx-0"
            /> */}
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Quem está por trás
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Olá, eu sou{" "}
              <span className="font-medium text-gray-900">Arthur Araujo Martins</span>,
              fundador da{" "}
              <span className="font-medium text-gray-900">Dynamics</span>.
              Comecei esse trabalho com o propósito de oferecer um serviço de
              instalação de redes de proteção que unisse qualidade,
              responsabilidade e atendimento humano.
            </p>
            <p className="leading-relaxed text-gray-700">
              Com mais de{" "}
              <span className="font-medium">5 anos de experiência</span> no
              segmento, criamos uma reputação baseada na confiança e em um
              compromisso inegociável com a segurança das mais de{" "}
              <span className="font-medium text-gray-900">4000</span> famílias
              que atendemos.
            </p>
          </div>
        </div>

        {/* ================== SEÇÃO HISTÓRIA DA EMPRESA ================== */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Como tudo começou
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A <span className="font-medium text-gray-900">Dynamics</span> nasceu
            do desejo de proporcionar segurança sem abrir mão da estética e
            qualidade. Desde o início, buscamos unir tecnologia, materiais de
            alta resistência e uma instalação precisa — sempre com atenção aos
            detalhes e respeito à confiança de cada cliente.
          </p>
        </div>

        {/* ================== SEÇÃO REDES SOCIAIS ================== */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Acompanhe nosso trabalho nas redes
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Veja fotos reais das nossas instalações, depoimentos e bastidores do
            nosso dia a dia. Siga, curta e fique por dentro das novidades!
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/dynamicsredes"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition flex flex-col items-center w-40"
            >
              <Instagram className="w-8 h-8 text-pink-500 mb-2 group-hover:scale-110 transition" />
              <span className="font-medium text-gray-800">Instagram</span>
              <span className="text-xs text-gray-500">@dynamicsredes</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5562993514863"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition flex flex-col items-center w-40"
            >
              <MessageCircle className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition" />
              <span className="font-medium text-gray-800">WhatsApp</span>
              <span className="text-xs text-gray-500">Clique para conversar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
