import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Hero/>
{/* quick links section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-black">

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Link
             href="/Experience" 
             className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Experience</h3>
              <p className="text-gray-600">Explore my professional journey and the skills I've acquired along the way.</p>
            </Link>
            <Link 
              href="/projects" 
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">Projects</h3>
              <p className="text-gray-600">Explore my portfolio of technical projects and solutions.</p>
            </Link>
            
            <Link 
              href="/notes" 
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">Notes</h3>
              <p className="text-gray-600">Read my thoughts on logical and abstract thinking.</p>
            </Link>
            
            <Link 
              href="/about" 
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">About</h3>
              <p className="text-gray-600">Learn more about my background, education, and interests.</p>
            </Link>

          </div>
        </div>
      </section>

      {/* Brief about section */}
      <About/>

    </div>

  )

}