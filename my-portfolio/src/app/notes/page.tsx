import NoteCard from '@/components/sections/NoteCard';

export default function NotesPage() {
  const notes = [
    {
      id: 1,
      title: "Logical and Abstract Thinking",
      excerpt: "Logical and abstract thinking is essential for solving problems, making decisions and developing advanced cognitive skills.",
      date: "May 10, 2025",
      readTime: "5 min read",
      slug: "logical-abstract-thinking"
    },
    {
      id: 2,
      title: "The Power of Problem Decomposition",
      excerpt: "Breaking down complex problems into smaller, manageable components is a fundamental skill in software development and systems design.",
      date: "April 25, 2025",
      readTime: "7 min read",
      slug: "problem-decomposition"
    },
    {
      id: 3,
      title: "DevOps Best Practices for Modern Teams",
      excerpt: "Implementing effective DevOps practices can significantly improve team productivity and software delivery processes.",
      date: "April 12, 2025",
      readTime: "8 min read",
      slug: "devops-best-practices"
    },
    {
      id: 4,
      title: "Optimizing Cloud Infrastructure",
      excerpt: "Strategies and techniques for efficiently managing and optimizing cloud resources across different providers.",
      date: "March 30, 2025",
      readTime: "6 min read",
      slug: "optimizing-cloud-infrastructure"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Notes & Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A curated collection of my personal insights, tips, quick posts, and code snippets that I
            frequently use across my projects.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}