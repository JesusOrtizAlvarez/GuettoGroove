import { motion } from 'framer-motion';
import events from '../data/events';
import { Link } from 'react-router-dom';
import guettogroove from '../assets/img/guettogroove.jpg';

export function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src={guettogroove}
            alt="Guetto Groove"
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-text-slide">
              GUETTO GROOVE
            </h1>
            <p className="mb-8 text-xl tracking-widest uppercase md:text-2xl text-foreground/60">
              The Future of Techno
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="relative h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-32">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-6xl font-bold tracking-tighter font-display md:text-7xl">
              EVENTOS
            </h2>
            <div className="w-24 h-1 mx-auto bg-primary" />
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                {!event.available && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="px-6 py-3 text-xl font-bold tracking-wider text-white uppercase border-4 rotate-12"
                    >
                      No Disponible
                    </motion.div>
                  </div>
                )}
                <img
                  src={event.image}
                  alt={event.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    event.available ? 'group-hover:scale-110' : 'grayscale'
                  }`}
                />
                <div className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transition-transform duration-700 transform translate-y-8 group-hover:translate-y-0">
                    <h3 className="mb-2 text-3xl font-bold tracking-tighter font-display">
                      {event.title}
                    </h3>
                    <p className="mb-4 text-sm tracking-wider uppercase text-foreground/60">
                      {event.date} • {event.location}
                    </p>
                    {event.available ? (
                      <Link
                        to="/programacion"
                        className="inline-block px-8 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 bg-primary hover:bg-primary/80"
                      >
                        COMPRAR ENTRADAS
                      </Link>
                    ) : (
                      <button disabled className="inline-block px-8 py-3 text-sm tracking-wider uppercase bg-gray-600 cursor-not-allowed text-white/50">
                        No Disponible
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tighter font-display sm:text-5xl lg:text-6xl lg:mb-6">
              Newsletter
            </h2>
            <p className="mb-6 text-sm tracking-wider uppercase sm:text-base lg:mb-8 text-foreground/60">
              Suscríbase para recibir actualizaciones exclusivas y acceso de preventa
            </p>
            <form className="flex flex-col w-full gap-3 sm:flex-row sm:gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full px-4 py-3 tracking-wider uppercase transition-colors duration-300 border-none sm:px-6 sm:py-4 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 sm:text-base sm:px-8 sm:py-4 bg-primary hover:bg-primary/80"
              >
                Suscribirse
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}