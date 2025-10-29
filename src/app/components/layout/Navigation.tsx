'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Use public/logo/logo.png
const LOGO_SRC = '/logo/logo.png'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Read initial theme from the <html> attribute which is set by the early script
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // On mount, read the theme from the data-theme attribute
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark'
    if (currentTheme) setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    // This now becomes the single source of truth for theme changes
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    ;(document.documentElement as HTMLElement).style.colorScheme =
      (newTheme as 'light' | 'dark')
  }

  // Intended site sections (no Blog/Features/Pricing/Login/SignUp)
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Founders', href: '/#founders' },
    { label: 'Platform', href: '/#platform' },
    { label: 'Channels', href: '/#channels' },
    // Send to the /testimonials route (app/testimonials/page.tsx)
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Contact', href: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header data-nav className={`site-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-brand">
          <Link href="/" aria-label="Re-Wise home">
            <Image
              src={LOGO_SRC}
              alt="Re-Wise"
              width={140}
              height={36}
              priority
              className="brand-logo"
            />
          </Link>
        </div>
        <nav>
          <ul className={`menu rw-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {items.map(it => (
              <li key={it.label} onClick={() => setIsMobileMenuOpen(false)}>
                <Link href={it.href}>{it.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button
            className="mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="theme-toggle">
            <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {/* Icon reflects current theme */}
              <span className="theme-icon" aria-hidden="true">
                {theme === 'dark' ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
