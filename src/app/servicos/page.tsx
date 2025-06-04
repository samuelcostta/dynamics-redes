// app/servicos/page.tsx
import Image from "next/image";
import Link from "next/link";


const services = [
  {
    title: "Pets",
    image: "/pets/pet1.jpeg",
    slug: "pets",

  },
  {
    title: "Janelas",
    image: "/janelas/janela25.jpeg",
    slug: "janelas",
  },
  {
    title: "Sacadas",
    image: "/sacadas/sacada33.jpeg",
    slug: "sacadas",
  },
  {
    title: "Coberturas",
    image: "/coberturas/cobertura7.jpeg",
    slug: "coberturas",
  },
  {
    title: "Escadas",
    image: "/escadas/escada2.jpeg",
    slug: "escadas",
  },
  {
    title: "Piscinas",
    image: "/piscinas/piscina2.jpg",
    slug: "piscinas",
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
          <Link key={index} href={`/servicos/${service.slug}`} className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform">
            <div>
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
          </Link>
        ))}
      </section>
    </div>
  );
}
