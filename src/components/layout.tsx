import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm border-white/10">
        <nav className="container flex items-center h-16 px-4 mx-auto md:h-20">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="p-2 -ml-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground/80" />
            ) : (
              <Menu className="w-6 h-6 text-foreground/80" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/programacion" 
              className="text-sm tracking-wider uppercase transition-colors text-foreground/80 hover:text-primary"
            >
              Programación
            </Link>
            <Link 
              to="/contacta" 
              className="text-sm tracking-wider uppercase transition-colors text-foreground/80 hover:text-primary"
            >
              Contacta
            </Link>
          </div>
          
          {/* Center - Logo */}
          <Link to="/" className="flex justify-center flex-1 mx-4">
            <span className="text-xl font-bold tracking-tighter transition-colors md:text-2xl font-display text-primary hover:text-primary/80">
              GUETTO GROOVE
            </span>
          </Link>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a 
              href="https://instagram.com/guetto_groove/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 transition-colors hover:text-primary"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 transition-colors hover:text-primary"
            >
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 md:hidden">
            <div className="container px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/programacion" 
                  className="text-sm tracking-wider uppercase transition-colors text-foreground/80 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Programación
                </Link>
                <Link 
                  to="/contacta" 
                  className="text-sm tracking-wider uppercase transition-colors text-foreground/80 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacta
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      <footer className="py-12 border-t md:py-20 bg-muted border-white/10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="text-center md:text-left">
              <Link to="/" className="text-xl font-bold tracking-tighter font-display text-primary">
                GUETTO GROOVE
              </Link>
              <p className="mt-4 text-sm tracking-wider uppercase text-foreground/60">
                The Future of Techno Music
              </p>
            </div>
            
            {/* Navigation */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-bold tracking-tighter font-display">ENLACES</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/programacion" 
                    className="text-sm tracking-wider uppercase transition-colors text-foreground/60 hover:text-primary"
                  >
                    Programación
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/artistas" 
                    className="text-sm tracking-wider uppercase transition-colors text-foreground/60 hover:text-primary"
                  >
                    Artistas
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contacta" 
                    className="text-sm tracking-wider uppercase transition-colors text-foreground/60 hover:text-primary"
                  >
                    Contacta
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-bold tracking-tighter font-display">CONTACTO</h3>
              <ul className="space-y-2 text-sm tracking-wider uppercase text-foreground/60">
                <li>contacto@guettogroove.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Techno Street</li>
                <li>HUESA, JAÉN</li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-bold tracking-tighter font-display">NEWSLETTER</h3>
              <p className="mb-4 text-sm tracking-wider uppercase text-foreground/60">
                Manténgase actualizado con nuestros últimos eventos
              </p>
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="CORREO ELECTRÓNICO"
                  className="w-full px-4 py-2 text-sm tracking-wider uppercase transition-colors border bg-background text-foreground border-white/10 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm tracking-wider text-white uppercase transition-colors sm:w-auto bg-primary hover:bg-primary/80"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 mt-12 text-sm tracking-wider text-center uppercase border-t md:mt-16 border-white/10 text-foreground/60">
            © {new Date().getFullYear()} Guetto Groove. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}