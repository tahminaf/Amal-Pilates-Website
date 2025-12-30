import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: 'Schedule', path: '/schedule', type: 'navigate' },
    { name: 'Pricing', path: '/booking', type: 'navigate' },
    { name: 'About', scrollTo: 'philosophy', type: 'scroll' },
    { name: 'Contact', path: 'mailto:hello@amalpilates.com', type: 'email' },
  ];

  const handleLinkClick = (link) => {
    if (link.type === 'email') {
      window.location.href = link.path;
    } else if (link.type === 'scroll') {
      // Need to navigate to home first if not already there
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.scrollTo);
          if (element) {
            const offset = link.scrollTo === 'philosophy' ? 100 : 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById(link.scrollTo);
        if (element) {
          const offset = link.scrollTo === 'philosophy' ? 100 : 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#473c38] text-[#EBE4DC] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={`${process.env.PUBLIC_URL}/cream_logo.png`}
              alt="Amal Pilates Logo" 
              className="h-auto w-full max-w-[200px] object-contain cursor-pointer"
              onClick={handleLogoClick}
            />
            <p className="text-[#EBE4DC]/60 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Movement, refined. Now in Brooklyn.
            </p>
          </div>

          {/* Studio */}
          <div>
            <h4 className="text-sm tracking-[0.2em] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              STUDIO
            </h4>
            <div className="space-y-4 text-[#EBE4DC]/60 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <div className="space-y-2">
                <p>4312 Coney Island Ave,</p>
                <p>Brooklyn, NY 11218</p>
              </div>
              
              {/* App Store Button */}
              <a 
                href="https://apps.apple.com/us/app/mariana-tek/id1025514298" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EBE4DC] text-[#473c38] px-6 py-4 rounded-lg hover:bg-white transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Download on the
                  </div>
                  <div className="text-base font-semibold leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              QUICK LINKS
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                link.type === 'email' ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="block text-[#EBE4DC]/60 text-sm hover:text-[#EBE4DC] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.name}
                  </a>
                ) : link.type === 'scroll' ? (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link)}
                    className="block text-left text-[#EBE4DC]/60 text-sm hover:text-[#EBE4DC] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-[#EBE4DC]/60 text-sm hover:text-[#EBE4DC] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.2em] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              CONTACT
            </h4>
            <div className="space-y-2 text-[#EBE4DC]/60 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <a href="mailto:hello@amalpilates.com" className="block hover:text-[#EBE4DC] transition-colors">
                hello@amalpilates.com
              </a>
              <div className="flex gap-4 pt-4">
                <a href="https://www.instagram.com/amalpilates/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBE4DC] transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@amalpilates" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBE4DC] transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#EBE4DC]/20 pt-8 text-center">
          <p className="text-[#EBE4DC]/40 text-xs tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            © 2025 AMAL PILATES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;