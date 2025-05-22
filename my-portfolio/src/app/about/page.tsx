export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            IT professional passionate about technology and its potential to transform lives and solve real-world problems.
          </p>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-600">Professional Education and Influence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium mb-3">
                2020 - 2023
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Superior Institute of Technologies and Sciences (ISPTEC)</h3>
              <p className="text-gray-600">Computer Engineering</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-blue-600">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium mb-3">
                2015 - 2019
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Alda Lara Polytechnic Middle Institute (IMPAL)  </h3>
              <p className="text-gray-600">High School Diploma, Computer Science</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Motivation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Motivation in the Technology Career</h2>
              <p className="text-gray-600 mb-4">
                   Since childhood, I have always been fascinated by computers and by how technology can transform lives. I decided to pursue Computer Engineering to turn this passion into a career that positively impacts people.
              </p>
              <p className="text-gray-600">
                                    I believe in the power of technology as a tool for social transformation,
                  especially in developing contexts like Angola, where innovative solutions
                  can solve significant challenges in the areas of education,
                  health, and infrastructure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">              Technical Skills</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-blue-500">Cloud & Network Management</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-blue-500">Programming (Java, TypeScript)</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-blue-500">DevOps Practices</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-blue-500">UI/UX Design</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-blue-500">Project Management</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hobbies and Future Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Hobbies and Personal Interests</h2>
              <p className="text-gray-600 mb-6">              In my free time, I enjoy playing games, watching anime, exploring new technologies, and participating in conversations. I also love reading and learning about new cultures, which inspires me to think creatively.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Anime, K-Drama</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Read</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Programming</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Talk</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">              Future Professional Goals</h2>
              <p className="text-gray-600 mb-6">
                My goal is to specialize in DevOps and Artificial Intelligence,
                contributing to projects that solve real problems in Africa and around the world.
                I also intend to mentor young aspiring technology professionals.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-600">Specialization in DevOps and Artificial Intelligence</p>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-600">Development of technological solutions for local challenges in Angola</p>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-600">Mentoring young people in the technology field</p>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-600">Contributing to open-source projects in the cloud infrastructure area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}