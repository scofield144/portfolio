import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fabio Tales Victorino
            </h1>
            <div className="bg-blue-500 text-white inline-block px-4 py-2 rounded mb-6 font-medium">
              DevOps | IT Specialist | Developer
            </div>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              IT professional skilled in Cloud and Network management, Programming, and Design, with a
              strong foundation in IT Support. Continuously expanding expertise to deliver modern,
              efficient, and comprehensive technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/experience" 
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300"
              >
                View Experience
              </Link>
              <Link 
                href="/projects" 
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-300"
              >
                See Projects
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Placeholder for profile image or illustration */}
            <div className="bg-blue-700 h-96 w-96 rounded-full mx-auto flex items-center justify-center">
              <span className="text-6xl font-bold">FTV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;