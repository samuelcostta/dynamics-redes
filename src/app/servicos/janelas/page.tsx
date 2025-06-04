// app/servicos/janelas/page.tsx
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

const imagens = [
  "/janelas/janela25.jpeg",
  "/janelas/janela24.jpeg",
  "/janelas/janela23.jpeg",
  "/janelas/janela22.jpeg",
  "/janelas/janela20.jpeg",
  "/janelas/janela1.jpeg",
  "/janelas/janela2.jpeg",
  "/janelas/janela3.jpeg",
  "/janelas/janela4.jpeg",
  "/janelas/janela5.jpeg",
  "/janelas/janela6.jpeg",
  "/janelas/janela7.jpeg",
  "/janelas/janela8.jpeg",
  "/janelas/janela9.jpeg",
  "/janelas/janela10.jpeg",
  "/janelas/janela11.jpeg",
  "/janelas/janela12.jpeg",
  "/janelas/janela13.jpeg",
  "/janelas/janela14.jpeg",
  "/janelas/janela17.jpeg",
];

export default function JanelaPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/janelas/janela25.jpeg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Redes de Proteção para Janelas</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Importância */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Por que instalar redes de proteção em janelas?</h2>
          <p className="text-gray-700">
            As janelas representam um risco significativo, especialmente em apartamentos ou casas com andares elevados.
            Redes de proteção garantem a segurança de crianças, idosos e animais de estimação, prevenindo quedas acidentais e trazendo tranquilidade para sua família.
          </p>
        </div>

        {/* Vantagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Alta resistência, material com proteção UV e longa durabilidade</li>
            <li>Material discreto e esteticamente agradável</li>
            <li>Instalação rápida e limpa</li>
            <li>Não obstrui a ventilação nem a luz</li>
          </ul>
        </div>

        {/* Processo de instalação */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Como funciona a instalação?</h2>
          <p className="text-gray-700">
            A instalação é feita por profissionais capacitados, utilizando buchas, ganchos e ferramentas adequadas.
            Todo o processo é realizado com cuidado para não danificar sua estrutura e garantir máxima fixação e segurança.
          </p>
        </div>

        {/* Galeria de imagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Galeria de Imagens</h2>
          <ImageGallery images={imagens} altPrefix="Janela"/>
        </div>
      </section>
    </div>
  );
}
