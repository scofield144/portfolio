import Link from 'next/link';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Know a bit more about me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Formação e Influência Profissional</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-blue-600">Instituto Superior de Tecnologias e Ciências (ISPTEC)</h4>
              <p className="text-gray-600">Engenharia Informatica · (2020 - 2023)</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-blue-600">Instituto Medio Politecnico Alda Lara</h4>
              <p className="text-gray-600">Ensino Médio, Informática (2015 - 2019)</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-blue-600">Motivação na Carreira de Tecnologia</h4>
              <p className="text-gray-600">
                Desde criança, sempre fui fascinado por computadores e pela forma como a
                tecnologia pode transformar vidas. Decidi seguir Engenharia Informática para
                transformar essa paixão em uma carreira que impacta positivamente as pessoas.
              </p>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Hobbies e Interesses Pessoais</h3>
              <p className="text-gray-600">
                Nos meus momentos livres, gosto de jogar xadrez, explorar novas tecnologias e
                participar de hackathons. Também adoro viajar e conhecer novas culturas, o que me
                inspira a pensar de forma criativa.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Objetivos Profissionais Futuros</h3>
              <p className="text-gray-600">
                Meu objetivo é me especializar em inteligência artificial e machine learning,
                contribuindo para projetos que resolvam problemas reais na África e no mundo.
                Também pretendo mentorar jovens aspirantes a profissionais de tecnologia.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            aria-label="Read more about me"
          >
            Read More About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;