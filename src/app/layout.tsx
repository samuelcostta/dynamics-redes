import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

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
        <p className="mb-6">Entre em contato via WhatsApp ou preencha nosso formulário.</p>
        <div className="space-x-4">
          <a href="https://wa.me/SEUNUMERO" target="_blank" className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500">WhatsApp</a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center text-sm text-gray-500 py-4 bg-gray-100">
        &copy; 2025 Dynamics Redes e Telas de Proteção | CNPJ 00.000.000/0001-00
      </footer>
      </body>
    </html>
  );
}
