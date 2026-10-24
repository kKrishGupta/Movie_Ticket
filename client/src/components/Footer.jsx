import React, { useState, useEffect } from 'react';
import { footerStyles } from '../assets/dummyStyles';
import { Film, Clapperboard, Ticket, Video, Sparkles, Tv, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';

const floatingIcons = [Film, Clapperboard, Ticket, Video, Sparkles, Tv];

const Facebook = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const Twitter = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Instagram = (props) => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const currentyear = new Date().getFullYear();

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies" },
    { label: "Releases", href: "/releases" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
  ];

  const genreLinks = [
    { label: "Horror", href: "/movies" },
    { label: "Thriller", href: "/movies" },
    { label: "Action", href: "/movies" },
    { label: "Comedy", href: "/movies" },
    { label: "Drama", href: "/movies" },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.animatedBorder} />

      <div className={footerStyles.bgContainer}>
        <div className={footerStyles.bgGlow1} />
        <div className={footerStyles.bgGlow2} />
      </div>

      <div className={footerStyles.floatingIconsContainer || footerStyles.floatingIconContainer}>
        {[...Array(12)].map((_, i) => {
          const IconComponent = floatingIcons[i % floatingIcons.length];
          const left = (i * 23) % 100;
          const top = (i * 17) % 100;
          const dur = 6 + (i % 5);
          const delay = (i % 4) * 0.6;
          return (
            <div
              key={i}
              className={`${footerStyles.floatingIcon} animate-float`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
          );
        })}
      </div>

      <div className={footerStyles.mainContainer}>
        <div className={footerStyles.gridContainer}>
          <div className={footerStyles.brandContainer}>
            <div className={footerStyles.brandLogoContainer}>
              <div className="relative">
                <div className={footerStyles.logoGlow} />
                <div className={footerStyles.logoContainer}>
                  <Clapperboard className={footerStyles.logoIcon} />
                </div>
              </div>
              <h2 style={{ fontFamily: 'Monoton, cursive' }} className={footerStyles.brandTitle}>
                Cine <span className={footerStyles.brandTitleWhite}>Verse</span>
              </h2>
            </div>

            <p className={footerStyles.brandDescription} style={{ fontFamily: 'Roboto, sans-serif' }}>
              Experience the magic of cinema with CineVerse, your ultimate destination for movie tickets, trailers, and the latest news in the film industry. Dive into a world of entertainment and stay updated with the latest releases and reviews.
            </p>
            <div className={footerStyles.socialContainer}>
              {[
                { Icon: Facebook },
                { Icon: Twitter },
                { Icon: Instagram },
                { Icon: Linkedin },
              ].map((item, index) => (
                <a key={index} href="#" className={footerStyles.socialLink}>
                  <item.Icon className={footerStyles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeader}>
              <div className={footerStyles.sectionDot} />
              Explore
            </h3>
            <ul className={footerStyles.linksList}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={footerStyles.linkItem}>
                    <span className={footerStyles.linkDot} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeader}>
              <div className={footerStyles.sectionDot} />
              Genres
            </h3>
            <ul className={footerStyles.linksList}>
              {genreLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={footerStyles.linkItem}>
                    <span className={footerStyles.linkDot} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeader}>
              <div className={footerStyles.sectionDot} />
              Contact Us
            </h3>
            <ul className={footerStyles.contactList}>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <Mail className={footerStyles.contactIcon} />
                </div>
                <a
                  href="mailto:contact@cinverseservices.com"
                  className={`${footerStyles.contactText} hover:text-white transition-colors`}
                >
                  contact@cinverseservices.com
                </a>
              </li>

              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <Phone className={footerStyles.contactIcon} />
                </div>
                <a
                  href="tel:+918299431275"
                  className={`${footerStyles.contactText} hover:text-white transition-colors`}
                >
                  +91 8299431275
                </a>
              </li>

              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <MapPin className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>
                  Lucknow, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Film Divider */}
        <div className={footerStyles.divider}>
          <div className={footerStyles.dividerIconContainer}>
            <Film className={footerStyles.dividerIcon} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={footerStyles.bottomBar}>
          <div className={footerStyles.designedBy}>
            <span className={footerStyles.designedByText}>
              © {currentyear} CineVerse. All rights reserved.
            </span>
          </div>

          <div className={footerStyles.policyLinks}>
            <a href="/privacy" className={footerStyles.policyLink}>
              Privacy Policy
            </a>
            <a href="/terms" className={footerStyles.policyLink}>
              Terms of Service
            </a>
            <a href="/cookies" className={footerStyles.policyLink}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={footerStyles.scrollTopButton}
        >
          <ChevronUp className={footerStyles.scrollTopIcon} />
        </button>
      )}

      <style>{footerStyles.customCSS}</style>
    </footer>
  );
};

export default Footer;
