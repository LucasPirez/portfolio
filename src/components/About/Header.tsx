import { useEffect, useState } from 'react';
import { useTranslation } from '../../TraslationContext';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [nav, setNav] = useState(false);
  const { text, currentPage, animationStart, width } =
    useTranslation();

  const changeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: text.header.home, page: 'home' },
    {
      href: '#portfolio',
      label: text.header.portfolio,
      page: 'projects',
    },
    { href: '#about', label: text.header.about, page: 'about' },
    { href: '#footer', label: text.header.contact, page: 'footer' },
  ];

  return (
    <div className="h-16 fixed  sm:sticky top-0 z-20 sm:bg-myBgBlue w-full dark:sm:bg-myBgDark md:border-b-2 border-b-myDarkPurple/10 ">
      <header
        className={`
          ${nav ? 'h-auto bg-background/95 backdrop-blur-xl' : 'h-16 bg-background/80 backdrop-blur-md'}
          smooth-transition border-b border-border/50 shadow-lg relative
        `}
      >
        <div className="custom-container h-full flex items-center justify-end px-4 md:px-6">
          {(animationStart.projects === true || width < 600) && (
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    smooth-transition group
                    ${
                      currentPage === link.page
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-foreground'
                    }
                  `}
                  style={{
                    animation: `fade-in-up 0.5s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <span className="relative z-10">{link.label}</span>

                  <span className="absolute inset-0 rounded-lg bg-primary/10 scale-0 group-hover:scale-100 smooth-transition" />

                  {currentPage === link.page && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-glow" />
                  )}
                </a>
              ))}
            </nav>
          )}
          {/* Mobile Menu Button */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden glass-effect p-2 rounded-lg hover:bg-primary/10 smooth-transition "
            aria-label="Toggle menu"
          >
            {nav ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {nav && (
          <nav className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fade-in">
            <div className="px-4 py-4 space-y-2 flex flex-col items-end">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setNav(false)}
                  className={`
                    block px-4 py-3 rounded text-base font-medium
                    smooth-transition
                    ${
                      currentPage === link.page
                        ? 'bg-primary/10 text-primary border-l-4 border-primary'
                        : 'text-foreground/70 hover:bg-primary/30  hover:text-foreground'
                    }
                  `}
                  style={{
                    animation: `slide-in-right 0.3s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}
