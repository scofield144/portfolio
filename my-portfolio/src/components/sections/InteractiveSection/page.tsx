'use client';

import Experience from '@/app/experience/page';
import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import ProjectsPage from '@/app/projects/page';
import About from '../About';
import NotesPage from '@/app/notes/page';

export default function InteractiveSection() {
  const contentData = {
    experience: {
      title: "Experience",
      content: (
        <Experience />
        
      )
    },
    projects: {
      title: "Projects",
      content: (
        <ProjectsPage />
      )
    },
    notes: {
      title: "Notes",
      content: (
        <NotesPage/>
       
      )
    },
    about: {
      title: "About",
      content: (
        <About />
      )}
  };
type ContentKey = keyof typeof contentData;
const [selectedContent, setSelectedContent] = useState<ContentKey | null>(null);

  return (
    <div>
      {/* Content Display Area */}
      {selectedContent && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {contentData[selectedContent].title}
              </h1>
              <button
                onClick={() => setSelectedContent(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Close
              </button>
            </div>
            {contentData[selectedContent].content}
          </div>
        </section>
      )}

      {/* Navigation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-black">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <button
              onClick={() => setSelectedContent('experience')}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left w-full"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">Experience</h3>
              <p className="text-gray-600">Explore my professional journey and the skills I've acquired along the way.</p>
            </button>
            
            <button
              onClick={() => setSelectedContent('projects')}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left w-full"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">Projects</h3>
              <p className="text-gray-600">Explore my portfolio of technical projects and solutions.</p>
            </button>
            
            <button
              onClick={() => setSelectedContent('notes')}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left w-full"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">Notes</h3>
              <p className="text-gray-600">Read my thoughts on logical and abstract thinking.</p>
            </button>
            
            <button
              onClick={() => setSelectedContent('about')}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left w-full"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">About</h3>
              <p className="text-gray-600">Learn more about my background, education, and interests.</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}