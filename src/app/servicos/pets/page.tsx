import ImageGallery from "@/components/ImageGallery";

const imagens = [
  "/pets/pet1.jpeg",
  "/pets/pet2.jpeg",
  "/pets/pet4.jpeg",
  "/pets/pet3.jpeg"
];

export default function PetsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/pets/pet1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Redes de Proteção para Pets</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Importância */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Por que instalar redes de proteção para pets?</h2>
          <p className="text-gray-700">
            Animais de estimação são curiosos e podem facilmente se aproximar de janelas, sacadas ou escadas.
            Redes de proteção evitam quedas e acidentes, proporcionando liberdade com segurança em apartamentos e casas com altura.
          </p>
        </div>

        {/* Vantagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Evita acidentes com gatos e cachorros</li>
            <li>Permite deixar janelas abertas com tranquilidade</li>
            <li>Material atóxico e resistente a mordidas</li>
            <li>Discreto e durável, com proteção UV</li>
          </ul>
        </div>

        {/* Processo de instalação */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Como funciona a instalação?</h2>
          <p className="text-gray-700">
            As redes são instaladas com fixadores resistentes e material específico para suportar impactos e tentativas de fuga dos pets.
            Tudo é feito com cuidado para manter a segurança sem comprometer o bem-estar animal.
          </p>
        </div>

        {/* Galeria */}
        <div>
            <div className="text-center justify-center">
                <h2 className="text-2xl font-semibold mb-4">Vídeo: Segurança para seu Pet</h2>

                <div className="mx-auto w-82 h-[600px] bg-black rounded-[3rem] border-4 border-gray-300 shadow-2xl pb-9 p-2 relative">
                    {/* Câmera frontal */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-full z-10" />
                    
                    {/* Tela */}
                    <div className="relative w-full h-full mt-6 overflow-hidden rounded-[2rem] bg-black">
                    <video autoPlay muted loop controls className="w-full h-full object-cover rounded-[2rem]">
                        <source src="/videos/pet_seguro.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeo.
                    </video>
                    </div>             
                </div>
            <br />
            <br />

                <h2 className="text-2xl font-semibold mb-4">Galeria de Imagens</h2>
            
                <ImageGallery images={imagens} altPrefix="Pet" />
            </div>
        </div>
      </section>
    </div>
  );
}
