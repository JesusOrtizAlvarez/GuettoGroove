import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm border-white/10">
        <nav className="container flex items-center h-20 px-4 mx-auto">
          {/* Left side - Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/programacion" className="text-sm tracking-wider uppercase transition-colors text-foreground/80 hover:text-primary">
              Programación
            </Link>
            <Link to="/contacta" className="text-sm tracking-wider uppercase transition-colors text-foreground/80 hover:text-primary">
              CONTACTA
            </Link>
          </div>
          
          {/* Center - Logo */}
          <Link to="/" className="flex justify-center flex-1">
            <span className="text-2xl font-bold tracking-tighter transition-colors font-display text-primary hover:text-primary/80">
              GUETTO GROOVE
            </span>
          </Link>
          
          {/* Right side - Social Media */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com/guetto_groove/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors text-foreground/80 hover:text-primary"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://soundcloud.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors text-foreground/80 hover:text-primary"
            >
              <img 
                src="https://cdn.prod.website-files.com/65bcfb85aad27f60748596f0/65c0d1dd8b530991defa7f4d_658afd7097fdafdaf11046ce_Soundcloud%20(1).png" 
                loading="lazy" 
                alt="" 
                className="object-contain w-auto h-auto"
                style={{ display: "block", margin: "0 -120px 0 0", height: "auto" }}
              />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors text-foreground/80 hover:text-primary"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="py-20 border-t bg-muted border-white/10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <Link to="/" className="text-xl font-bold tracking-tighter font-display text-primary">
                GUETTO GROOVE
              </Link>
              <p className="mt-4 text-sm tracking-wider uppercase text-foreground/60">
                The Future of Techno Music
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-bold tracking-tighter font-display"></h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/programacion" className="text-sm tracking-wider uppercase transition-colors text-foreground/60 hover:text-primary">
                    Programación
                  </Link>
                </li>
                <li>
                  <Link to="/artistas" className="text-sm tracking-wider uppercase transition-colors text-foreground/60 hover:text-primary">
                    Artistas
                  </Link>
                </li>
                <li>
                  <Link to="/contacta" className="text-sm tracking-wider uppercase transition-colors text-foreground/60 hover:text-primary">
                    Contacta
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-bold tracking-tighter font-display">CONTACTO</h3>
              <ul className="space-y-2 text-sm tracking-wider uppercase text-foreground/60">
                <li>contacto@guettogroove.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Techno Street</li>
                <li>HUESA, JAÉN</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-bold tracking-tighter font-display">NEWSLETTER</h3>
              <p className="mb-4 text-sm tracking-wider uppercase text-foreground/60">
                Manténgase actualizado con nuestros últimos eventos
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="CORREO ELECTRÓNICO"
                  className="flex-1 px-4 py-2 text-sm tracking-wider uppercase border bg-background text-foreground border-white/10 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm tracking-wider text-white uppercase transition-colors bg-primary hover:bg-primary/80"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-8 mt-16 text-sm tracking-wider text-center uppercase border-t border-white/10 text-foreground/60">
            © {new Date().getFullYear()} Guetto Groove. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}