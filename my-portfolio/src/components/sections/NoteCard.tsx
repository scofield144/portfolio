import React from 'react';
import Link from 'next/link';

interface Note {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>{note.date}</span>
        <span className="mx-2">•</span>
        <span>{note.readTime}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{note.title}</h3>
      <p className="text-gray-600 mb-4">{note.excerpt}</p>
      
      <Link 
        href={`/notes/${note.slug}`}
        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
      >
        <span>Read More</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

export default NoteCard;