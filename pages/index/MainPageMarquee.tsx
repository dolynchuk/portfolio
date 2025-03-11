import React from 'react';
import './styles.css';

const TECH_LIST = [
  'React',
  'Typescript',
  'Node.js',
  'GO',
  'Python',
  'Docker',
  'Redux',
  'Storybook',
  'MapBox',
  'Google Maps',
  'Google Analytics',
  '.NET',
  'MySQL', 
  'MongoDB',
  'GraphQL',
  'D3',
  'Golang',
  'Terraform',
  'Salesforce',
  'AWS',
  'OpenAPI',
  'Vite',
  'React Query',
  'Tanstack Router',
  'Playwright',
  'WebSockets',
];

export function MainPageMarquee() {
  return (
    <div className="marquee">
      <ul className="marquee-items">
        {TECH_LIST.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Duplicate the list for seamless looping */}
      <ul className="marquee-items">
        {TECH_LIST.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
