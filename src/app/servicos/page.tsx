// app/servicos/page.tsx
import Image from "next/image";


const services = [
  {
    title: "Janelas",
    image: "/janelas/janela25.jpeg",
  },
  {
    title: "Sacadas",
    image: "/sacadas/sacada33.jpeg",
  },
  {
    title: "Coberturas",
    image: "/coberturas/cobertura7.jpeg",
  },
  {
    title: "Pets",
    image: "/pets/pet1.jpeg",
  },
  {
    title: "Escadas",
    image: "/escadas/escada2.jpeg",
  },
  {
    title: "Piscinas",
    image: "/piscina.jpg",
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section */}
      <section className="relative h-72 bg-cover bg-center" style={{ backgroundImage: "url('/images/network-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Nossos Serviços</h1>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Quer um orçamento gratuito?</h2>
        <a href="/contato" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Fale Conosco
        </a>
      </section>
    </div>
  );
}
