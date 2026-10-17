import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarStyles, navbarCSS } from '../assets/dummyStyles'
import { Clapperboard, Home, Film, Calendar, Mail, Ticket, Menu, X, LogIn, LogOut } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'movies', label: 'Movies', icon: Film, path: '/movies' },
    { id: 'releases', label: 'Releases', icon: Calendar, path: '/releases' },
    { id: 'contact', label: 'Contact', icon: Mail, path: '/contact' },
    { id: 'bookings', label: 'Bookings', icon: Ticket, path: '/bookings' },
  ]

  return (
    <>
      <style>{navbarCSS}</style>
      <nav
        className={`${navbarStyles.nav.base} ${
          isScrolled ? navbarStyles.nav.scrolled : navbarStyles.nav.notScrolled
        }`}
      >
        <div className={navbarStyles.container}>
          {/* Logo */}
          <div className={navbarStyles.logoContainer}>
            <div className={navbarStyles.logoIconContainer}>
              <Clapperboard className={navbarStyles.logoIcon} />
            </div>
            <span className={navbarStyles.logoText}>CineVerse</span>
          </div>

          {/* Desktop Navigation */}
          <div className={navbarStyles.desktopNav}>
            <div className={navbarStyles.desktopNavItems}>
              {navItems.map((item) => {
                const ItemIcon = item.icon
                return (
                  <div key={item.id} className={navbarStyles.desktopNavItem}>
                    <NavLink
                      to={item.path}
                      end
                      className={({ isActive }) =>
                        `${navbarStyles.desktopNavLink.base} ${
                          isActive
                            ? navbarStyles.desktopNavLink.active
                            : navbarStyles.desktopNavLink.inactive
                        }`
                      }
                    >
                      <ItemIcon className={navbarStyles.desktopNavIcon} />
                      <span>{item.label}</span>
                      <div className="pill-underline"></div>
                    </NavLink>
                    <span className="pill-border"></span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right / Auth section */}
          <div className={navbarStyles.rightSection}>
            <div className={navbarStyles.desktopAuth}>
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => setIsLoggedIn(false)}
                  className={navbarStyles.logoutButton}
                >
                  <LogOut className={navbarStyles.authIcon} />
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLoggedIn(true)}
                  className={navbarStyles.loginButton}
                >
                  <LogIn className={navbarStyles.authIcon} />
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className={navbarStyles.mobileMenuToggle}>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={navbarStyles.mobileMenuButton}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <X className={navbarStyles.mobileMenuIcon} />
                ) : (
                  <Menu className={navbarStyles.mobileMenuIcon} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className={navbarStyles.mobileMenuPanel}>
            <div className={navbarStyles.mobileMenuItems}>
              {navItems.map((item) => {
                const ItemIcon = item.icon
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `${navbarStyles.mobileNavLink.base} ${
                        isActive
                          ? navbarStyles.mobileNavLink.active
                          : navbarStyles.mobileNavLink.inactive
                      }`
                    }
                  >
                    <ItemIcon className={navbarStyles.mobileNavIcon} />
                    <span className={navbarStyles.mobileNavText}>{item.label}</span>
                  </NavLink>
                )
              })}

              <div className={navbarStyles.mobileAuthSection}>
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoggedIn(false)
                      setIsMenuOpen(false)
                    }}
                    className={navbarStyles.mobileLogoutButton}
                  >
                    <LogOut className={navbarStyles.mobileAuthIcon} />
                    <span>Logout</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoggedIn(true)
                      setIsMenuOpen(false)
                    }}
                    className={navbarStyles.mobileLoginButton}
                  >
                    <LogIn className={navbarStyles.mobileAuthIcon} />
                    <span>Login</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
