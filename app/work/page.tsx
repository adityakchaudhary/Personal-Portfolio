import Link from 'next/link'
import styles from '../page.module.css'

export default function WorkPage() {
  return (
    <main className={`${styles.page} ${styles.workPage}`}>
      <div className={`${styles.site} ${styles.workSite}`}>
        <section className={styles.workIntro} aria-labelledby="workUnavailableHeading">
          <h1 id="workUnavailableHeading">Work &amp; Projects</h1>
          <p>
            This page is temporarily inactive. You can find my work and projects on the homepage.
          </p>
          <Link className={styles.writingLink} href="/#work-projects">
            View work and projects
          </Link>
        </section>
      </div>
    </main>
  )
}
