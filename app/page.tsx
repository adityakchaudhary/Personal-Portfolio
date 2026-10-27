import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { formatPostDate, posts } from './blog/posts'
import FlickeringGrid from './FlickeringGrid'
import ThemeToggle from './ThemeToggle'

const homeProjects = [
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

function SocialIcon({
  type,
}: {
  type: 'linkedin' | 'github' | 'scholar' | 'x' | 'researchgate' | 'mail'
}) {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }
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
  if (type === 'scholar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m2.5 7 9.5-4 9.5 4-9.5 4-9.5-4Z" />
        <path d="M5.5 9v6.2c3.8 3 9.2 3 13 0V9M21.5 7v6" />
      </svg>
    )
  }
  if (type === 'x') {
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
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.5 5H7a6.5 6.5 0 1 0 0 13h4.5v-4.5H7.8" />
      <path d="M13 7h4.5a5.5 5.5 0 1 1 0 11H13v-4h4.5" />
    </svg>
  )
}

const experience = [
   {
    date: '2026 - present ',
    mark: 'GI',
    role: 'Student Member, Gesellschaft für Informatik (GI), part of Germany’s professional computer science community.',
    description:
      ' ',
    campusPhotos: [
      {
        src: '/gi-membership-card.jpg',
        alt: 'German Informatics Society membership card',
      },
    ],
  },
  {
    date: '',
    mark: 'FlyRank',
    role: 'ML Engineering Intern at',
    description:
      'building production-oriented ML systems on real data, with hands-on assignments.',
    campusPhotos: [],
  },
  {
    date: 'education – present',
    mark: 'HSWT',
    href: 'https://www.hswt.de/',
    role: 'BSc at HSWT with a major in computer science focusing on data science and ml algorithms and also some of my research modules specialize in digital life sciences.',
    description:
      'Additionally at FAU Erlangen-Nürnberg, pursuing academic course-work modules in deep learning, neural networks, LLM-based software engineering and modern software development practices.',
    campusPhotos: [
     
       {
        src: '/HSWT-6-optimized.jpg',
        alt: 'A lecture theatre at HSWT',
      },
      {
        src: '/HSWT5-optimized.jpg',
        alt: 'HSWT campus library shelves',
      },
     
      {
        src: '/HSWT-7-optimized.jpg',
        alt: 'A classroom at HSWT',
      },
    ],
  },
  {
    date: '2024',
    mark: 'GT',
    role: 'Intern at Grant Thornton sponsored by excelerate, used AI-assisted data tools to research firms in Shanghai and Beijing, analyze business metrics, and share strategic insights.  ',
    
    campusPhotos: [],
  },
]

export default function Home() {
  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aditya Kumar Chaudhary',
    alternateName: 'Aditya Chaudhary',
    url: 'https://adityakchaudhary.is-a.dev/',
    image: 'https://adityakchaudhary.is-a.dev/profile-photo.jpg',
    jobTitle: 'Data and Computer Science student',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Munich',
      addressCountry: 'Germany',
    },
    sameAs: [
      'https://github.com/adityakchaudhary',
      'https://www.linkedin.com/in/adityakchaudhary/',
      'https://scholar.google.com/citations?user=XJlOzZUAAAAJ',
      'https://x.com/aditkchaudhary',
      'https://www.researchgate.net/profile/Aditya-Kumar-Chaudhary',
    ],
  }

  return (
    <main className={styles.page} data-theme="light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <FlickeringGrid />
      <div className={styles.site}>
        <header className={styles.header}>
          <a className={styles.brand} href="#home">
            ~ aditya kumar chaudhary
          </a>
          <nav className={styles.navigation} aria-label="Main navigation">
            <a href="#home">Home</a>
            <Link href="/blog">Blog</Link>
            <ThemeToggle />
          </nav>
        </header>

        <section className={styles.profile} id="home" aria-label="Introduction">
          <Image
            className={styles.avatar}
            src="/profile-photo.jpg"
            alt="Aditya Kumar Chaudhary"
            width={122}
            height={122}
            sizes="122px"
            priority
          />
          <div className={styles.profileText}>
            <h1>ADITYA KUMAR CHAUDHARY</h1>
            <p className={styles.tagline}>
              I like to learn by building with data, code,
              <br className={styles.desktopBreak} /> and machine learning.
            </p>
            <div className={styles.socials} aria-label="Social links">
              <a href="https://www.linkedin.com/in/adityakchaudhary/" aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
              <a href="https://github.com/adityakchaudhary" aria-label="GitHub">
                <SocialIcon type="github" />
              </a>
              <a href="https://scholar.google.com/citations?user=XJlOzZUAAAAJ" aria-label="Google Scholar">
                <SocialIcon type="scholar" />
              </a>
              <a href="https://x.com/aditkchaudhary" aria-label="X">
                <SocialIcon type="x" />
              </a>
              <a href="https://www.researchgate.net/profile/Aditya-Kumar-Chaudhary" aria-label="ResearchGate">
                <SocialIcon type="researchgate" />
              </a>
              <a href="mailto:ckumaraditya2004@gmail.com" aria-label="Email">
                <SocialIcon type="mail" />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.experience} id="work" aria-label="Experience">
          {experience.map((item) => (
            <article className={styles.experienceItem} key={item.role}>
              {item.date ? (
                <time className={styles.date}>{item.date}</time>
              ) : (
                <span aria-hidden="true" />
              )}
              <span className={styles.timelineMarker} aria-hidden="true" />
              {item.mark === 'FlyRank' ? (
                <span aria-hidden="true" />
              ) : (
                <div
                  className={`${styles.organizationMark} ${
                    item.mark === 'GT'
                      ? styles.grantThorntonMark
                      : item.mark === 'HSWT'
                        ? styles.hswtMark
                        : item.mark === 'TUM XR'
                          ? styles.tumXrMark
                          : item.mark === 'GI'
                            ? styles.giMark
                            : ''
                  }`}
                >
                  {item.mark === 'GT' ? (
                    <Image
                      className={styles.grantThorntonLogo}
                      src="/grant-thornton-symbol.svg"
                      alt="Grant Thornton logo"
                      width={30}
                      height={30}
                      sizes="30px"
                    />
                  ) : item.mark === 'HSWT' ? (
                    <>
                      <Image
                        className={styles.hswtLogo}
                        src="/hswt-symbol.png"
                        alt="HSWT logo"
                        width={30}
                        height={30}
                        sizes="30px"
                      />
                      <span className={styles.hswtWordmark}>HSWT</span>
                    </>
                  ) : item.mark === 'TUM XR' ? (
                    <Image
                      src="/tum-xr-logo.png"
                      alt="TUM XR logo"
                      width={36}
                      height={26}
                      sizes="36px"
                    />
                  ) : item.mark === 'GI' ? (
                    <Image
                      className={styles.giLogo}
                      src="/gi-logo.svg"
                      alt="German Informatics Society logo"
                      width={68}
                      height={24}
                      sizes="68px"
                    />
                  ) : (
                    item.mark
                  )}
                </div>
              )}
              <div className={styles.experienceText}>
                <h2>
                  {item.role}
                  {item.mark === 'FlyRank' && (
                    <>
                      {' '}
                      <span className={styles.flyrankInlineLogo}>
                        <Image
                          src="/flyrank-logo.svg"
                          alt="FlyRank AI"
                          width={962}
                          height={317}
                          sizes="60px"
                        />
                      </span>
                    </>
                  )}
                </h2>
                <p>{item.description}</p>
                {(item.mark === 'HSWT' || item.mark === 'GI') && (
                  <>
                    <div
                      className={styles.campusGallery}
                      aria-label={item.mark === 'GI' ? 'German Informatics Society photo' : 'HSWT campus photos'}
                    >
                      {item.campusPhotos?.map((photo) => (
                        <div
                          className={styles.campusPhoto}
                          key={photo.src}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={640}
                            height={400}
                            sizes="(max-width: 640px) 30vw, 260px"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className={styles.bio} id="about">
          <h2>bio</h2>
          <p>
            I’m a Data and Computer Science student based in Munich, Germany. I like
            getting deep into a subject and building something with what I
            learn, from data analysis to machine learning, with interest lean toward ml, data science and how digital tools are changing the life sciences, and software in general with LLMs.
          </p>
          <p>
            Away from the screen, I enjoy{' '}
            <span className={styles.personalInterests}>
              badminton, cycling, photography, and a lot of music.
            </span>
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
          <div className={styles.workColumns} id="work-projects">
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
                      and a capstone project. Gained hands-on experience in building and deploying ML models, data preprocessing, and model evaluation.
                    </p>
                  </div>
                  <time className={styles.workDate} dateTime="2026-07">July 2026 – present</time>
                </article>
                <article className={styles.workEntry}>
                  <span className={`${styles.workLogo} ${styles.grantThorntonWorkLogo}`}>
                    <Image src="/grant-thornton-symbol.svg" alt="" width={26} height={26} sizes="26px" />
                  </span>
                  <div className={styles.workEntryText}>
                    <h4>Grant Thornton</h4>
                    <p className={styles.workRole}>Internship</p>
                    <p>
                      A 2-month position worked on AI-powered data analysis tools to
                       identify potential firms in Shanghai and Beijing region firms (law, private equity and MNCs). 
                       Leveraged AI-assisted platforms for data collection and evaluation, analyzed key business metrics, and 
                       presented actionable insights to support Grant Thornton’s strategic business development initiatives.
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
                  <time className={styles.workDate} dateTime="2026-10">Oct 2026 – present</time>
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
        <section className={styles.projects} aria-labelledby="homeProjectsHeading">
          <div className={styles.projectsHeading}>
            <h2 id="homeProjectsHeading">projects</h2>
            <p>
              A selection of things I’ve built. more details on my{' '}
              <a href="https://github.com/adityakchaudhary" target="_blank" rel="noreferrer">
                GitHub
              </a>.
            </p>
          </div>
          <div className={styles.projectList}>
            {homeProjects.map((project) => (
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
        <section className={styles.homeBlog} aria-labelledby="homeBlogHeading">
          <h2 id="homeBlogHeading">featured writing</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <div>
                  <Link href={`/blog#${post.id}`}>{post.title}</Link>
                  <Link
                    className={styles.homeBlogDescription}
                    href={`/blog#${post.id}`}
                  >
                    {post.paragraphs[0]}
                  </Link>
                </div>
              </li>
            ))}
            <li>
              <span aria-hidden="true" />
              <Link className={styles.homeBlogReadLink} href="/blog">
                Read the blog
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles.writing} id="posts">
          <h2>What I’m Exploring</h2>
          <p>
            How do neural networks actually learn? I’m studying deep learning
            and LLM-assisted software engineering, and I want to understand what
            happens inside a model as it picks up new abilities. I’m also curious about where
            computing meets the life sciences, and what machine learning can teach us when it’s applied
            to biological data.
          </p>
          <p>
            Most of all, I want to build things that connect the two and turn what I learn into useful work.
          </p>
        </section>
        <section className={styles.workContact} aria-labelledby="homeContactHeading">
          <h2 id="homeContactHeading">Get in touch</h2>
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
        <div className={styles.footerContact}>
          
          <div
            className={`${styles.socials} ${styles.footerSocials}`}
            aria-label="Social links"
          >
                     </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Aditya Kumar Chaudhary
        </p>
      </footer>
      <div className={styles.player} aria-hidden="true">
        <span />
        <i />
        <i />
        <i />
      </div>
    </main>
  )
}
