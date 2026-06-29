import { Metadata } from 'next';
import { AboutContent } from './about-content';

export const metadata: Metadata = {
  title: 'Nerd Not Noob | About Me',
  description:
    'Learn about Rithwan Oyelude, a professional cinematographer, director and photographer in Nigeria with over 10 years of experience in commercials, documentaries, weddings and branded content.',
  keywords: [
    'Rithwan Oyelude',
    'cinematographer Nigeria',
    'director photographer',
    'filmmaker Nigeria',
  ],
};

const About = () => {
  return <AboutContent />;
};

export default About;
