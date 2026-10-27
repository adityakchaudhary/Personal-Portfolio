'use client'

import { useState, type MouseEvent } from 'react'
import styles from './page.module.css'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const nextDarkMode = !darkMode
    event.currentTarget.closest('main')?.setAttribute('data-theme', nextDarkMode ? 'dark' : 'light')
    setDarkMode(nextDarkMode)
  }

  return (
    <button
      className={styles.themeButton}
      type="button"
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      aria-pressed={darkMode}
      onClick={toggleTheme}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    </button>
  )
}
