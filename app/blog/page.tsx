import Link from 'next/link'
import styles from '../page.module.css'
import ThemeToggle from '../ThemeToggle'
import { formatPostDate, posts } from './posts'

export default function BlogPage() {
  return (
    <main className={styles.page} data-theme="light">
      <div className={`${styles.site} ${styles.workSite}`}>
        <header className={styles.header}>
          <Link className={styles.brand} href="/#home">
            ~ aditya kumar chaudhary
          </Link>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/#home">Home</Link>
            <Link href="/blog" aria-current="page">Blog</Link>
            <ThemeToggle />
          </nav>
        </header>

        <section className={styles.blogIntro} aria-labelledby="blogHeading">
          <h1 id="blogHeading">Blog</h1>
          <p>
            Notes on machine learning, data science, and the ideas I’m exploring across deep
            learning, software, and the life sciences.
          </p>
        </section>

        <section className={styles.blogPosts} aria-label="Blog posts">
          {posts.map((post) => (
            <article className={styles.blogPost} id={post.id} key={post.id}>
              <time className={styles.blogPostDate} dateTime={post.date}>
                {formatPostDate(post.date)}
              </time>
              <p className={styles.blogPostTopic}>{post.topic}</p>
              <h2>{post.title}</h2>
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </section>
      </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Aditya Kumar Chaudhary</p>
      </footer>
    </main>
  )
}
