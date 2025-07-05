import ImageGallery from "@/components/ImageGallery";

const imagens = [];

export default function PiscinasPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/piscinas/piscina2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Redes de Proteção para Piscinas</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Importância */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Por que instalar redes de proteção em piscinas?</h2>
          <p className="text-gray-700">
            Piscinas representam um risco constante de afogamentos, especialmente para crianças pequenas e animais domésticos.
            A instalação de redes de proteção ao redor da piscina é uma medida essencial para garantir a segurança e evitar acidentes graves.
          </p>
        </div>

        {/* Vantagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Evita quedas acidentais na água</li>
            <li>Fácil remoção e reinstalação quando necessário</li>
            <li>Alta durabilidade e resistência à umidade</li>
            <li>Não compromete a estética da área externa</li>
          </ul>
        </div>

        {/* Processo de instalação */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Como funciona a instalação?</h2>
          <p className="text-gray-700">
            A instalação é feita com postes de fixação e rede tensionada ao redor da piscina, criando uma barreira segura sem impedir o uso do espaço.
            O processo é rápido, limpo e pensado para não danificar pisos ou revestimentos.
          </p>
        </div>

        {/* Galeria de imagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Galeria de Imagens</h2>
          <ImageGallery images={imagens} altPrefix="Piscina" />
        </div>
      </section>
    </div>
  );
}
