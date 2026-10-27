'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../page.module.css'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  )
}

function SocialIcon({ type }: { type: 'linkedin' | 'github' | 'x' }) {
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          stroke="none"
          d="M5.2 8.4H2.1V22h3.1V8.4ZM3.65 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM22 13.7c0-4.1-2.2-6-5.1-6a4.4 4.4 0 0 0-4 2.2V8.4H9.8V22h3.1v-7.5c0-2 .4-3.9 2.9-3.9s2.5 2.2 2.5 4V22h3.1l.6-8.3Z"
        />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          stroke="none"
          d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9 2.3 3.8 1.7.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2 4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.6.8.5A11.4 11.4 0 0 0 12 .8Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        stroke="none"
        d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-7.8L4.8 22H1.5l7.7-8.9L1 2h6.8l4.7 7.2L18.9 2Zm-1.2 18h1.8L6.9 3.9H5L17.7 20Z"
      />
    </svg>
  )
}

const projects = [
  {
    name: 'Iris flower classification',
    image: '/projects/portfolio.jpg',
    description:
      'Classifies Iris flowers as setosa, versicolor, or virginica using sepal and petal measurements.',
    topics: 'Python, machine learning, classification, Iris dataset',
    href: 'https://github.com/adityakchaudhary',
  },
  {
    name: 'AI Research Assistant',
    image: '/projects/research-assistant.jpg',
    description:
      'An AI-powered assistant for summarizing research papers, extracting key findings, identifying research gaps, and suggesting ideas.',
    topics: 'Generative AI, LLMs, AWS PartyRock',
    href: 'https://github.com/adityakchaudhary/partyrock-aws',
  },
  
  {
    name: 'Sentiment Analysis',
    image: '/projects/sentiment-analysis.jpg',
    description:
      'Classifies Twitter posts as positive, neutral, or negative to explore opinions and social trends.',
    topics: 'Python, NLP, machine learning, text classification',
    href: 'https://github.com/adityakchaudhary/Sentiment-Analysis',
  },

  {
    name: 'House Price Prediction',
    image: '/projects/house-price.jpg',
    description:
      'Predicts home prices from property features, with exploratory analysis, preprocessing, and regression model comparisons.',
    topics: 'Python, regression, Scikit-learn, feature engineering',
    href: 'https://github.com/adityakchaudhary/House-Price-Prediction-Model',
  },
  
  {
    name: 'Gravity Simulation',
    image: '/projects/gravity-simulation.jpg',
    description:
      'A C++ computational simulation exploring gravity and the motion of bodies.',
    topics: 'C++, physics, computational simulation',
    href: 'https://github.com/adityakchaudhary/computational-simulation',
  },
  
  {
    name: 'Portfolio website',
    image: '/projects/portfolio.jpg',
    description:
      'A responsive portfolio showcasing my experience, projects, and background.',
    topics: 'Next.js, React, TypeScript, CSS',
    href: '/',
  },
  {
    name: 'Tic-Tac-Toe',
    image: '/projects/tic-tac-toe.jpg',
    description:
      'A responsive two-player browser game with a clean interface, deployed on GitHub Pages.',
    topics: 'HTML, CSS, JavaScript, interactive UI',
    href: 'https://github.com/adityakchaudhary/tic-tac-toe',
  },
  {
    name: 'Several projects on GitHub',
    image: '/projects/portfolio.jpg',
    description:
      'A collection of several smaller projects, including Java notes, coursework, and programming fundamentals.',
    topics: 'programming fundamentals, coursework',
    href: 'https://github.com/adityakchaudhary/?tab=repositories',
  },
]

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Machine learning & data',
    skills: ['Machine learning', 'NLP', 'Classification', 'Regression', 'Scikit-learn', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'AI',
    skills: ['Generative AI', 'LLMs', 'AWS PartyRock'],
  },
  {
    category: 'Web development',
    skills: ['React', 'Next.js'],
  },
]

export default function WorkProjectsPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main className={`${styles.page} ${styles.workPage}`} data-theme={darkMode ? 'dark' : 'light'}>
      <div className={`${styles.site} ${styles.workSite}`}>
        <header className={styles.header}>
          <Link className={styles.brand} href="/#home">
            ~ aditya kumar chaudhary
          </Link>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/#home">Home</Link>
            <Link href="/work" aria-current="page">Work &amp; Projects</Link>
            <Link href="/blog">Blog</Link>
            <button
              className={styles.themeButton}
              type="button"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              aria-pressed={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              <SunIcon />
            </button>
          </nav>
        </header>

        <section className={styles.workIntro} aria-labelledby="workHeading">
          <h2 id="workHeading">Work &amp; projects</h2>
          <p>
            Some were research projects, some were jobs, and some started with a hackathon.
            Here’s what I made and what went into it.
          </p>
        </section>

        <section className={styles.workHistory} aria-labelledby="historyHeading">
          <div className={styles.workHistoryHeading}>
            <h2 id="historyHeading">Where I’ve spent my time</h2>
            <a
              className={styles.cvLink}
              href="https://drive.google.com/file/d/1m2eWJQNYLYhlZPDXKCvhmAgxv28hw7A9/view?usp=sharing/"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 16v4h14v-4" />
              </svg>
              Download CV
            </a>
          </div>
          <div className={styles.workColumns}>
            <section className={styles.workColumn} aria-labelledby="employmentHeading">
              <h3 id="employmentHeading">Work</h3>
              <div className={styles.workTimeline}>
                <article className={styles.workEntry}>
                  <span className={`${styles.workLogo} ${styles.flyrankWorkLogo}`}>
                    <Image src="/flyrank-logo.svg" alt="" width={962} height={317} sizes="28px" />
                  </span>
                  <div className={styles.workEntryText}>
                    <h4>FlyRank</h4>
                    <p className={styles.workRole}>ML Engineering Intern</p>
                    <p>
                      Built production-oriented ML systems on real data, with mentor feedback
                      and a capstone project.
                    </p>
                  </div>
                  <time className={styles.workDate} dateTime="2024-04">Apr 2024 – May 2025</time>
                </article>
                <article className={styles.workEntry}>
                  <span className={`${styles.workLogo} ${styles.grantThorntonWorkLogo}`}>
                    <Image src="/grant-thornton-symbol.svg" alt="" width={26} height={26} sizes="26px" />
                  </span>
                  <div className={styles.workEntryText}>
                    <h4>Grant Thornton</h4>
                    <p className={styles.workRole}>Business Development Associate</p>
                    <p>
                      Used AI-assisted data tools to research firms in Shanghai and Beijing,
                      analyze business metrics, and share strategic insights.
                    </p>
                  </div>
                  <time className={styles.workDate} dateTime="2024">2024</time>
                </article>
              </div>
            </section>

            <section className={styles.workColumn} aria-labelledby="communityHeading">
              <h3 id="communityHeading">Volunteering &amp; community</h3>
              <div className={styles.workTimeline}>
               
                <article className={styles.workEntry}>
                  <span className={styles.workLogo}>
                    <Image src="/gi-logo.svg" alt="" width={30} height={24} sizes="30px" />
                  </span>
                  <div className={styles.workEntryText}>
                    <h4>German Informatics Society (GI)</h4>
                    <p className={styles.workRole}>Student Member</p>
                    <p>
                      Part of Germany’s professional computer science community through GI.
                    </p>
                  </div>
                  <time className={styles.workDate} dateTime="2026-10">Oct 2026 – Present</time>
                </article>
              </div>
            </section>

          </div>
        </section>

        <section className={styles.skills} aria-labelledby="skillsHeading">
          <h2 id="skillsHeading">Skills &amp; tech stack</h2>
          <div className={styles.skillGroups}>
            {skillGroups.map((group) => (
              <div className={styles.skillGroup} key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.projects} aria-labelledby="projectsHeading">
          <div className={styles.projectsHeading}>
            <h2 id="projectsHeading">projects</h2>
            <p>
              A selection of things I’ve built. more details on my{' '}
              <a href="https://github.com/adityakchaudhary" target="_blank" rel="noreferrer">
                GitHub
              </a>.
            </p>
          </div>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <article className={styles.projectRow} key={project.href}>
                <Image
                  className={styles.projectThumbnail}
                  src={project.image}
                  alt=""
                  width={64}
                  height={64}
                  sizes="64px"
                  quality={65}
                />
                <p className={styles.projectDescription}>
                  {project.href.startsWith('/') ? (
                    <Link href={project.href}>{project.name}</Link>
                  ) : (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  )}{' '}
                  {project.description}{' '}
                  <span className={styles.projectTopicText}>Topics: {project.topics}.</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workContact} aria-labelledby="contactHeading">
          <h2 id="contactHeading">Get in touch</h2>
          <p>
            <a href="mailto:ckumaraditya2004@gmail.com">Contact me</a>
          </p>
          <div className={`${styles.socials} ${styles.contactSocials}`} aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/adityakchaudhary/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <SocialIcon type="linkedin" />
            </a>
            <a href="https://github.com/adityakchaudhary" aria-label="GitHub" target="_blank" rel="noreferrer">
              <SocialIcon type="github" />
            </a>
            <a href="https://x.com/aditkchaudhary" aria-label="X" target="_blank" rel="noreferrer">
              <SocialIcon type="x" />
            </a>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Aditya Kumar Chaudhary</p>
      </footer>
    </main>
  )
}