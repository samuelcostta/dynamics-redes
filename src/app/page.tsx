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
            { src: "/janelas_e_sacada.jpg", title: "Janelas e Sacadas", descricao: "As redes de proteção para janela são soluções ideais para garantir segurança, conforto e funcionalidade em residências e empresas. Além de prevenir acidentes com crianças e pets, elas oferecem proteção contra a entrada de objetos externos, proporcionando tranquilidade para moradores e colaboradores." },
            { src: "/mezanino.jpg", title: "Escadas e Mezaninos", descricao: "As redes de proteção são ideais para criar ambientes seguros, confortáveis e funcionais, garantindo a proteção de pessoas, animais e objetos. Seja em residências, escolas ou áreas comerciais, nossas redes são versáteis, duráveis e personalizadas para atender às suas necessidades."},
            { src: "/piscina.jpg", title: "Piscinas", descricao: "As Redes para Piscinas desempenham um papel crucial na prevenção de acidentes. Elas criam uma barreira física que impede a entrada de crianças e animais de estimação na área da piscina sem supervisão. Além disso, ajudam a manter a piscina limpa ao evitar que folhas, galhos e outros detritos entrem na água."},
            { src: "/quadras_esportivas.jpg", title: "Quadras esportivas", descricao: "As redes de proteção para quadra esportiva são essenciais para garantir a segurança e a organização em espaços dedicados às atividades esportivas. Utilizadas para fechamento de campos de futebol, society, futsal, quadras poliesportivas, ginásios e outras práticas esportivas, elas são instaladas sob medida, atendendo às necessidades específicas de cada espaço."},
          ].map((item, idx) => (
            <div className="bg-gray-800/90 py-6 px-1 text-white border rounded-4xl" key={idx}>
              <p className="mt-2 mb-3 text-2xl"><b>{item.title}</b></p>
              <Image src={item.src} alt={item.title} width={200} height={150} className="rounded shadow mx-auto border-2 border-white" />
              <p className="mt-2 px-9 text-justify">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pets */}
      <section id="pets" className="py-12 bg-gray-100 px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Pets</h3>
        
        <div className="relative max-w-xs bg-gray-600">
          <Image 
            src="/moldura_celular.png" 
            alt="Celular" 
            width={500} 
            height={800} 
            className=""
          />
          <div className="absolute top-[12%] left-[9%] w-[82%] h-[76%] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_AQUI"
              title="Pets felizes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>  
  );
}
