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
            <h3 className="text-2xl font-bold mb-6 text-gray-800">            Professional Education and Influence</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-blue-600">              Superior Institute of Technologies and Sciences(ISPTEC)</h4>
              <p className="text-gray-600">              Computer Engineering · (2020 - 2023)</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-blue-600">Instituto Medio Politecnico Alda Lara</h4>
              <p className="text-gray-600">              Computer Engineering (2015 - 2019)</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-blue-600">Motivação na Carreira de Tecnologia</h4>
              <p className="text-gray-600">
                                   Since childhood, I have always been fascinated by computers and by how technology can transform lives. I decided to pursue Computer Engineering to turn this passion into a career that positively impacts people.

              </p>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Hobbies e Interesses Pessoais</h3>
              <p className="text-gray-600">
                I believe in the power of technology as a tool for social transformation,
                  especially in developing contexts like Angola, where innovative solutions
                  can solve significant challenges in the areas of education,
                  health, and infrastructure.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Future Professional Goals</h3>
              <p className="text-gray-600">
                My goal is to specialize in DevOps and Artificial Intelligence,
                contributing to projects that solve real problems in Africa and around the world.
                I also intend to mentor young aspiring technology professionals.
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