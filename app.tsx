
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

const App: React.FC = () => {
  const personalInfo = {
    name: 'Bibesh Basnet',
    dateOfBirth: '2004/08/15',
    birthplace: 'Ratuwamai-6, Morang',
  };

  const educationInfo = [
    {
      level: 'Schooling',
      institution: 'SOS Hermann Gmeiner Secondary School, Itahari',
    },
    {
      level: '+2 Level',
      institution: 'SOS Hermann Gmeiner Higher Secondary School, Sanothimi',
    },
  ];

  const hobbiesInfo = [
    { name: 'Playing Football', icon: 'football' },
    { name: 'Reading Literature', icon: 'book' },
    { name: 'Singing', icon: 'microphone' },
    { name: 'Travelling', icon: 'globe' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Header name={personalInfo.name} />
        <div className="space-y-12 mt-12">
          <AboutMe dateOfBirth={personalInfo.dateOfBirth} birthplace={personalInfo.birthplace} />
          <Education items={educationInfo} />
          <Hobbies items={hobbiesInfo} />
        </div>
      </main>
      <Footer name={personalInfo.name} />
    </div>
  );
};

export default App;
