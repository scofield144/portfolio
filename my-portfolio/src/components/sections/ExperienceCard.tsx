import React from 'react';

interface Experience {
    id: number;
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
}
interface ExperienceCardProps {
    experience: Experience;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
      <div className='bf-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className="mb-4">
            <div className="inline-block bg-blue-800 px-3 py-1 rounded text-sm font-medium mb-2">
                {experience.period}                
            </div>
            <h3 className='text-2xl font-bold text-gray-800'>{experience.company}</h3>
            <h4 className='text-xl text-blue-600 font-semibold'>{experience.role}</h4>
        </div>
        <h5 className="font-semibold text-gray-700 mb-2">Primary responsibilities include:</h5>
        <ul className="space-y-3">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={responsibility} className="flex">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-600">{responsibility}</span>
          </li>
        ))}
      </ul>
      </div> 
    );
}
export default ExperienceCard;