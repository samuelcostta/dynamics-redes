export default function SobrePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cabeçalho com imagem de fundo */}
      <section
        className="relative h-64 bg-cover bg-center"

      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Sobre Nós</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Introdução */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Compromisso com sua segurança e tranquilidade</h2>
          <p className="text-gray-700 text-lg">
            Somos especialistas na instalação de redes de proteção para residências, condomínios e empresas,
            com foco total na segurança de sua família, seus pets e seu patrimônio.
          </p>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-xl font-bold mb-2">Missão</h3>
            <p className="text-gray-600">
              Proporcionar proteção com qualidade, confiança e responsabilidade em cada instalação.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-xl font-bold mb-2">Visão</h3>
            <p className="text-gray-600">
              Ser referência em segurança com redes de proteção em Goiânia e região.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-xl font-bold mb-2">Valores</h3>
            <p className="text-gray-600">
              Ética, responsabilidade, qualidade no atendimento e respeito à vida.
            </p>
          </div>
        </div>

        {/* Área de atendimento */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md border text-center">
          <h3 className="text-xl font-semibold mb-2">Atendemos em Goiânia e cidades vizinhas</h3>
          <p className="text-gray-700">
            Leve segurança para sua casa ou empresa com quem entende do assunto. Entre em contato para saber se atendemos sua região.
          </p>
        </div>
      </section>
    </div>
  );
}
