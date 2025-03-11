import Marquee from "react-fast-marquee";

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
  const list = TECH_LIST.map((item) => <li key={item}>{item}</li>);
  if (import.meta.env.SSR) {
    return <ul className="marquee fakeMarquee">{list}</ul>;
  }
  return (
    <Marquee className="marquee" delay={0.5}>
      {list}
    </Marquee>
  );
}