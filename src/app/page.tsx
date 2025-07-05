import { Main } from "next/document";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url(/sacada6.jpeg)"}}>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Proteção com Segurança e Estilo
          </h2>
          <p className="mb-6 text-lg max-w-xl">
            Telas para janelas, sacadas, escadas e piscinas com instalação profissional.
          </p>
          <Link href="/contato" className="bg-green-600 px-6 py-3 rounded text-white hover:bg-green-700 transition-colors">
            Solicitar Orçamento Grátis
          </Link>
        </div>
      </section>

       {/* Vantagens */}
       <section className="py-12 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-8">Por que escolher a <span className="text-gray-600">Dynamics</span>?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { icon: "🛡️", text: "Segurança para crianças e pets" },
            { icon: "⚡", text: "Instalação rápida e limpa" },
            { icon: "🏅", text: "Materiais certificados e duráveis" },
            { icon: "💬", text: "Atendimento personalizado" },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-4xl text-blue-500 mb-2">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { slug: "sacadas", src: "/sacadas/sacada33.jpeg", title: "Sacadas", descricao: "As redes de proteção para sacadas são essenciais para garantir a segurança em áreas elevadas, oferecendo proteção eficaz para crianças, animais de estimação e toda a família. Discretas e resistentes, permitem aproveitar a vista e a ventilação com tranquilidade, sem comprometer a estética do espaço." },
            { slug: "janelas", src: "/janelas/janela25.jpeg", title: "Janelas", descricao: "As redes de proteção para janelas garantem segurança e tranquilidade em residências e apartamentos, prevenindo quedas de crianças, pets e objetos. Com instalação rápida e material resistente, são discretas, duráveis e ideais para quem busca proteção sem comprometer a estética do ambiente."},
            { slug: "escadas", src: "/escadas/escada2.jpeg", title: "Escadas e Mezaninos", descricao: "As redes de proteção para escadas e mezaninos evitam quedas acidentais em áreas internas com desníveis, sendo ideais para ambientes com crianças, idosos ou pets. Com visual discreto e excelente resistência, garantem segurança sem interferir na estética e na circulação da casa."},
            { slug: "coberturas", src: "/coberturas/cobertura.jpeg", title: "Coberturas", descricao: "As redes de proteção para coberturas proporcionam segurança em áreas abertas e elevadas, como terraços e lajes, prevenindo fuga/invasão de pet. São resistentes às condições climáticas e ideais para manter um ambiente seguro sem comprometer a ventilação e a liberdade do seu pet."},
          ].map((item, idx) => (
            <div className="bg-gray-800/90 py-8 px-1 text-white border rounded-4xl" key={idx}>
              <Link key={idx} href={`/servicos/${item.slug}`}>
                <p className="mt-2 mb-3 text-2xl"><b>{item.title}</b></p>
                <Image src={item.src} alt={item.title} width={200} height={150} className="rounded shadow mx-auto border-2 border-white" />
                <p className="mt-2 px-9 text-justify">{item.descricao}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pets */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
          <h2 className="text-4xl font-bold text-center mb-8">Pets</h2>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Moldura estilo celular para o vídeo */}
            <div className="mx-auto w-82 h-[600px] bg-black rounded-[3rem] border-4 border-gray-300 shadow-2xl pb-9 p-2 relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-full z-10" />
              <div className="relative w-full h-full mt-6 overflow-hidden rounded-[2rem] bg-black">
                <video autoPlay muted loop controls className="w-full h-full object-cover rounded-[2rem]">
                  <source src="/videos/pet_seguro.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            </div>

            {/* Texto descritivo + imagem decorativa */}
            <div className="flex-1 relative">
              <div className="bg-white p-6 rounded-xl shadow-lg z-10 relative max-w-150">
                <h2 className="text-2xl font-semibold mb-4">Segurança para seus Pets</h2>
                <p className="text-gray-700 mb-4 text-justify">
                  Animais de estimação, especialmente gatos, são curiosos e costumam explorar janelas, sacadas e parapeitos.
                  Isso os expõe a sérios riscos de queda, principalmente em apartamentos e andares elevados.
                </p>
                <p className="text-gray-700 text-justify">
                  As redes de proteção são uma solução eficaz e discreta que mantém seus pets em segurança, sem comprometer a ventilação ou a vista.
                  Com instalação rápida e materiais de alta resistência, elas oferecem tranquilidade para tutores e liberdade para os bichinhos.
                </p>
              </div>

              {/* Imagem decorativa de pets no canto inferior direito */}
              <img
                src="/pets/dog_barriga.png" 
                alt="Pets felizes com segurança"
                className="hidden lg:block absolute -bottom-50 -left-160 w-60 h-auto drop-shadow-xl"
              />
              <img
                src="/pets/dog_gato.png"
                alt="Pets felizes com segurança"
                className="hidden lg:block absolute -top-50 -right-70 w-120 h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

    </main>  
  );
}
