import ImageGallery from "@/components/ImageGallery";

const imagens = [
    "/sacadas/sacada4.jpeg",
    "/sacadas/sacada5.jpeg",
    "/sacadas/sacada6.jpeg",
    "/sacadas/sacada7.jpeg",
    "/sacadas/sacada8.jpeg",
    "/sacadas/sacada9.jpeg",
    "/sacadas/sacada10.jpeg",
    "/sacadas/sacada11.jpeg",
    "/sacadas/sacada14.jpeg",
    "/sacadas/sacada18.jpeg",
    "/sacadas/sacada31.jpeg",
    "/sacadas/sacada32.jpeg",
    "/sacadas/sacada33.jpeg",
    "/sacadas/sacada34.jpeg",
    "/sacadas/sacada35.jpeg"
];

export default function SacadasPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/sacadas/sacada33.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Redes de Proteção para Sacadas</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Importância */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Por que instalar redes de proteção em sacadas?</h2>
          <p className="text-gray-700">
            As sacadas oferecem risco potencial em ambientes elevados, especialmente para famílias com crianças ou pets.
            A instalação de redes de proteção evita quedas acidentais, proporcionando segurança e tranquilidade no dia a dia.
          </p>
        </div>

        {/* Vantagens */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Alta resistência a impactos</li>
            <li>Material com proteção UV e longa durabilidade</li>
            <li>Estética discreta, sem comprometer a vista</li>
            <li>Instalação rápida e segura</li>
          </ul>
        </div>

        {/* Processo de instalação */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Como funciona a instalação?</h2>
          <p className="text-gray-700">
            Profissionais especializados utilizam buchas e ganchos de alta fixação, respeitando a estrutura do local e garantindo total segurança.
            O serviço é feito de forma limpa, ágil e com materiais certificados.
          </p>
        </div>

        {/* Galeria */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Galeria de Imagens</h2>
          <ImageGallery images={imagens} altPrefix="Sacada" />
        </div>
      </section>
    </div>
  );
}
