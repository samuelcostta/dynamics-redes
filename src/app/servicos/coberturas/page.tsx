import ImageGallery from "@/components/ImageGallery";

const imagens = [
  "/coberturas/cobertura.jpeg",
  "/coberturas/cobertura2.jpeg",
  "/coberturas/cobertura3.jpeg",
  "/coberturas/cobertura4.jpeg",
  "/coberturas/cobertura5.jpeg",
  "/coberturas/cobertura7.jpeg",
  "/coberturas/cobertura6.jpeg"
];

export default function CoberturasPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/coberturas/cobertura7.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Redes de Proteção para Coberturas</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Importância */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Por que instalar redes de proteção em coberturas?</h2>
          <p className="text-gray-700">
            As coberturas oferecem uma vista privilegiada, mas também apresentam riscos elevados, principalmente para crianças e pets.
            As redes de proteção garantem segurança contra quedas acidentais, sem comprometer a estética do espaço.
          </p>
        </div>

        {/* Vantagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Alta resistência a impactos e intempéries</li>
            <li>Material com proteção contra raios UV</li>
            <li>Instalação discreta, sem bloquear a iluminação natural</li>
            <li>Mais segurança para eventos e uso diário da área</li>
          </ul>
        </div>

        {/* Processo de instalação */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Como funciona a instalação?</h2>
          <p className="text-gray-700">
            A instalação é feita com equipamentos e materiais de alta qualidade, como ganchos inoxidáveis e malhas certificadas,
            garantindo durabilidade mesmo em áreas expostas ao sol e à chuva.
          </p>
        </div>

        {/* Galeria */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Galeria de Imagens</h2>
          <ImageGallery images={imagens} altPrefix="Cobertura" />
        </div>
      </section>
    </div>
  );
}
