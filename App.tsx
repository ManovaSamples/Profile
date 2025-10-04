

import React, { useState, useEffect, useRef } from 'react';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedInIcon from './components/icons/LinkedInIcon';
import TwitterIcon from './components/icons/TwitterIcon';
import GlobeIcon from './components/icons/GlobeIcon';

const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Resume', 'Contact'];

const Navbar = ({ activeLink, setActiveLink }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#home" className="font-signature text-4xl text-primary transition-colors duration-300 hover:text-primary-hover">MC</a>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveLink(link)}
                className={`text-zinc-300 hover:text-primary transition duration-300 ${activeLink === link ? 'text-primary font-semibold' : ''}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const Home = () => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center bg-zinc-900">
    <div className="container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">
        Hi, I'm <span className="text-primary">Manova Chandramohan</span>
      </h1>
      <p 
        className="text-xl md:text-2xl text-zinc-400 mb-8 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out"
        style={{ transitionDelay: '200ms' }}
      >A Passionate Test Lead Ensuring Software Quality and Reliability.</p>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-zinc-800/50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">About Me</h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto text-left text-zinc-300 space-y-6">
        <p>
          Hello! I'm Manova, a digital detective with a passion for quality. For over a decade, I've been on a mission to ensure software is not just functional, but flawless. I thrive on the thrill of the hunt—tracking down elusive bugs and architecting robust automation frameworks that stand the test of time.
        </p>
        <p>
          My journey has taken me through diverse landscapes, from the fast-paced world of FinTech and Card Payments to the critical domains of Healthcare, Insurance, and Manufacturing. This experience has given me a unique perspective on crafting tailored testing strategies that align perfectly with different development lifecycles, whether it's Waterfall, Agile, or DevOps.
        </p>
        <p>
          As a leader, I'm passionate about building and mentoring high-performing QA teams. From designing effective test plans and setting up CI/CD pipelines to presenting failure analysis reports that drive real improvement, my focus is always on delivering value and building products that users can trust.
        </p>
      </div>
    </div>
  </section>
);


const Experience = () => {
  const experiences = [
    {
      role: 'Manager Projects',
      company: 'Cognizant Technology Solutions, Bangalore',
      period: 'May 2024 – Present',
      responsibilities: [
        'Collaborated with product owners to understand and define project requirements.',
        'Worked within an Agile SDLC model, coordinating with the development team to ensure quality standards.',
        'Engineered and automated API and file-based tests using Cucumber.js to validate system functionality.'
      ],
      achievements: [],
      tools: []
    },
    {
      role: 'Test Lead',
      company: 'DXC Technology, Bangalore',
      period: 'Jul 2021 – May 2024',
      responsibilities: [
        'Led 3 automation projects and mentored a team of 8 engineers, defining test strategy, roadmap, and capacity planning to align with business objectives.',
        'Designed and developed robust, reusable automation frameworks, conducted code reviews, and provided technical guidance on automation best practices.',
        'Oversaw the end-to-end testing lifecycle, including risk analysis, test case execution, and failure analysis, within an Agile/Scrum environment to ensure comprehensive quality coverage.'
      ],
      achievements: [
        'Developed automation framework from ground up using Playwright tool and JavaScript, flavoured with BDD Cucumber, helped Product owner verify the workflow using plain English language',
        'Successfully reduced manual testing time from 15 hours to approximately 2.30 hours through the automation of complex scenarios, leading to improved efficiency and productivity',
        'Cross browser testing achieved using Browser Stack with minimal code change',
        'Implemented BDD Cucumber based framework with Selenium and Playwright tools for different projects',
        'Introduced metrics board in Azure Dev-Ops for reporting to client about sprint automation data points'
      ],
      tools: ['Playwright', 'TypeScript', 'BDD', 'Cucumber', 'Selenium', 'Java', 'Azure Dev-ops', 'Browser Stack']
    },
    {
      role: 'Test Analyst',
      company: 'Infosys Limited, Bangalore, India',
      period: 'Jul 2017 - Jul 2021',
      responsibilities: [
        'Analyzed software requirements to create comprehensive test strategies, author detailed test cases, and manage test data.',
        'Automated critical API and UI test scenarios, conducted security (authentication/authorization) testing, and verified cross-browser compatibility.',
        'Provided training and mentorship to junior team members, enhancing their skills in QA automation and core application knowledge.'
      ],
      achievements: [
        'Successfully migrated Salesforce UI automation test cases to API workflows, resulting in increased test coverage and reduced execution time',
        'Implemented a data-driven framework for web services migration projects, significantly reducing the manual effort required for data comparison tasks'
      ],
      tools: ['SOA Test', 'SOAPUI', 'Groovy', 'Rally', 'Gitlab']
    },
    {
      role: 'Automation Test Engineer',
      company: 'DXC Technology, Sydney, Australia',
      period: 'Sep 2016 - Jul 2017',
      responsibilities: [
        'Authored key documentation, including test approach documents and automation user guides, to establish clear team guidance and standards.',
        'Developed reusable automation functions and automated a wide variety of test cases to significantly improve testing efficiency and coverage.',
        'Collaborated closely with developers on bug resolution and maintained effective client communication to ensure project alignment and success.'
      ],
      achievements: [
        'Successfully implemented an automation solution for Flash/Flex application, resulting in a significant decrease in manual end-to-end testing efforts from 5 days to just 14 hours',
        'Streamlined manual data setup and regression testing processes, saving an estimated 10 days of manual effort, and reducing it to just 23 hours'
      ],
      tools: ['Ranorex', 'C#']
    },
    {
      role: 'Test Engineer',
      company: 'DXC Technology, Bangalore, India',
      period: 'Jan 2014 - Aug 2016',
      responsibilities: [
        'Prepared and maintained essential testing artifacts, including test strategy documents, and managed software patch deployments.',
        'Conducted comprehensive functional and automation testing across web services and user interfaces to validate application quality.',
        'Tracked and reported software defects, collaborating with developers to ensure timely and effective resolution.'
      ],
      achievements: [
        'The automation solution also helped to identify issues early in the development cycle, leading to quicker resolution and a higher overall quality of the product'
      ],
      tools: ['SOAPUI', 'Groovy', 'Selenium', 'Java', 'TFS', 'SSMS', 'Jenkin']
    }
  ];

  const ExperienceItem = ({ exp, isReversed }) => (
    <div className={`w-1/2 ${isReversed ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
      <p className="text-zinc-400">{exp.period}</p>
      <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
      <h4 className="text-lg font-semibold text-zinc-200 mb-4">{exp.company}</h4>
      
      {exp.responsibilities && exp.responsibilities.length > 0 && (
        <div className="mb-4">
          <h5 className="text-md font-bold text-zinc-300 mb-2">Roles and Responsibilities</h5>
          <ul className={`list-disc text-zinc-400 space-y-1 ${isReversed ? 'list-inside' : 'pl-5'}`}>
            {exp.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {exp.achievements && exp.achievements.length > 0 && (
        <div className="mb-4">
          <h5 className="text-md font-bold text-zinc-300 mb-2">Achievements</h5>
          <ul className={`list-disc text-zinc-400 space-y-1 ${isReversed ? 'list-inside' : 'pl-5'}`}>
            {exp.achievements.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
      
      {exp.tools && exp.tools.length > 0 && (
        <div>
          <h5 className="text-md font-bold text-zinc-300 mb-2">Tools Used</h5>
          <div className={`flex flex-wrap gap-2 ${isReversed ? 'justify-end' : 'justify-start'}`}>
            {exp.tools.map(tag => <span key={tag} className="bg-primary/20 text-primary text-sm font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>)}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">Work Experience</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-zinc-700 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-8 flex justify-between items-start w-full scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {index % 2 === 0 ? (
                <>
                  <ExperienceItem exp={exp} isReversed={true} />
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                   <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <ExperienceItem exp={exp} isReversed={false} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Projects = () => {
    const projects = [
    {
      title: 'E2E Test Automation Framework',
      description: 'Designed a scalable test framework using Selenium and Java for a payments platform, cutting regression testing time by 70%.',
      tags: ['Selenium', 'Java', 'TestNG', 'CI/CD'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Healthcare App Performance Testing',
      description: 'Led performance testing for a patient portal using JMeter, improving application response times by 40% by identifying key bottlenecks.',
      tags: ['JMeter', 'Performance Testing', 'SQL'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'CI/CD Pipeline for Manufacturing',
      description: 'Integrated automated test suites into a CI/CD pipeline using Jenkins, enabling continuous testing for a manufacturing ERP system.',
      tags: ['Jenkins', 'DevOps', 'Agile'],
      liveUrl: '#',
      repoUrl: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">My Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col justify-between transform hover:-translate-y-2 transition duration-300 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map(tag => <span key={tag} className="bg-primary/20 text-primary text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{tag}</span>)}
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-primary transition duration-300 flex items-center space-x-2">
                  <GitHubIcon className="w-6 h-6" /> <span>GitHub</span>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-primary transition duration-300 flex items-center space-x-2">
                   <GlobeIcon className="w-6 h-6" /> <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Resume = () => (
  <section id="resume" className="py-20 bg-zinc-900 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">My Resume</h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
      <p className="max-w-2xl mx-auto text-zinc-400 mb-8">
        Interested in learning more about my professional background? You can download a copy of my resume for a detailed look at my skills, experience, and qualifications.
      </p>
      <a href="#" download className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-primary-hover transition duration-300 text-lg inline-block">
        Download Resume
      </a>
    </div>
  </section>
);


const Contact = () => (
  <section id="contact" className="py-20 bg-zinc-800/50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">Get In Touch</h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
      <p className="max-w-2xl mx-auto text-zinc-400 mb-8">
        I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out. Let's build something amazing together!
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
        <a href="mailto:mano.c.91@gmail.com" className="text-primary text-xl md:text-2xl font-semibold hover:underline">
          mano.c.91@gmail.com
        </a>
        <span className="text-zinc-500 hidden md:block">|</span>
        <a href="tel:+918489728223" className="text-primary text-xl md:text-2xl font-semibold hover:underline">
          +91 84897 28223
        </a>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
        <a href="#" aria-label="GitHub" className="text-zinc-400 hover:text-primary transition duration-300 transform hover:-translate-y-1"><GitHubIcon className="w-8 h-8" /></a>
        <a href="#" aria-label="LinkedIn" className="text-zinc-400 hover:text-primary transition duration-300 transform hover:-translate-y-1"><LinkedInIcon className="w-8 h-8" /></a>
        <a href="#" aria-label="Twitter" className="text-zinc-400 hover:text-primary transition duration-300 transform hover:-translate-y-1"><TwitterIcon className="w-8 h-8" /></a>
      </div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="bg-zinc-900 py-6 text-center">
    <div className="container mx-auto px-6">
      <p className="text-zinc-500">&copy; {new Date().getFullYear()} Manova Chandramohan. All Rights Reserved.</p>
    </div>
  </footer>
);


const App = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const linkName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
            setActiveLink(linkName);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
    );

    navLinks.forEach(link => {
        const id = link.toLowerCase();
        const el = document.getElementById(id);
        if (el) {
            sectionRefs.current[id] = el;
            observer.observe(el);
        }
    });

    return () => {
        Object.values(sectionRefs.current).forEach((el : any) => {
            if (el) observer.unobserve(el);
        });
    };
  }, []);

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;