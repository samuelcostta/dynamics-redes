import ImageGallery from "@/components/ImageGallery";

const imagens = [
  "/escadas/escada.jpeg",
  "/escadas/escada2.jpeg"
];

export default function EscadasPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/escadas/escada2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Redes de Proteção para Escadas</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Importância */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Por que instalar redes de proteção em escadas?</h2>
          <p className="text-gray-700">
            As escadas são locais com alto risco de acidentes, especialmente para crianças pequenas, idosos e animais de estimação.
            Redes de proteção nas laterais ou vãos impedem quedas e aumentam significativamente a segurança do ambiente.
          </p>
        </div>

        {/* Vantagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Redução imediata do risco de acidentes</li>
            <li>Visual discreto que não compromete a decoração</li>
            <li>Instalação rápida, sem obra</li>
            <li>Resistência e durabilidade garantidas</li>
          </ul>
        </div>

        {/* Processo de instalação */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Como funciona a instalação?</h2>
          <p className="text-gray-700">
            A instalação é feita por especialistas, utilizando fixadores em pontos estratégicos das escadas.
            Todo o processo é pensado para proteger sem afetar o design do ambiente.
          </p>
        </div>

        {/* Galeria de imagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Galeria de Imagens</h2>
          <ImageGallery images={imagens} altPrefix="Escada" />
        </div>
      </section>
    </div>
  );
}
