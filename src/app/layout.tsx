import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { FaWhatsapp } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dynamics Redes de Proteção",
  description: "Dynamics Redes de Proteção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <NavBar />
        {children}

      {/* Contato */}
      <section id="contato" className="py-12 bg-gray-800 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Solicite um orçamento agora!</h3>
        <p className="mb-6">Entre em contato conosco</p>
        <div className="space-x-4">
          <a
            href="https://wa.me/5562993514863" // Substitua pelo número real com DDD
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-2xl" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center text-sm text-gray-500 py-4 bg-gray-100">
        &copy; 2025 Dynamics Redes e Telas de Proteção | CNPJ 52.588.786/0001-03
      </footer>
      </body>
    </html>
  );
}
