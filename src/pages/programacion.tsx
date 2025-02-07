import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import events from '../data/events';


export function Programacion() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-5xl font-bold tracking-tighter font-display md:text-7xl"
          >
            PROGRAMACIÓN
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 mx-auto bg-primary"
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden group bg-muted"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-between p-8 md:w-2/3">
                    <div>
                      <h2 className="mb-4 text-3xl font-bold tracking-tighter font-display">
                        {event.title}
                      </h2>
                      
                      <div className="mb-6 space-y-2">
                        <div className="flex items-center text-foreground/60">
                          <Calendar className="w-5 h-5 mr-2" />
                          <span className="text-sm tracking-wider uppercase">{event.date}</span>
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <Clock className="w-5 h-5 mr-2" />
                          <span className="text-sm tracking-wider uppercase">{event.time}</span>
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <MapPin className="w-5 h-5 mr-2" />
                          <span className="text-sm tracking-wider uppercase">{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="mb-2 text-sm tracking-wider uppercase text-foreground/60">LINE UP</h3>
                        <div className="flex flex-wrap gap-2">
                          {event.artists.map((artist) => (
                            <span
                              key={artist}
                              className="px-3 py-1 text-sm tracking-wider uppercase bg-background text-foreground/80"
                            >
                              {artist}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{event.price}</span>
                      {event.available ? (
                        <Link 
                        to={`/comprar-entradas/${event.id}`}
                        className="px-8 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 bg-primary hover:bg-primary/80"
                      >
                        COMPRAR ENTRADAS
                      </Link>
                      ) : (
                        <button disabled className="px-8 py-3 text-sm tracking-wider uppercase bg-gray-600 cursor-not-allowed text-white/50">
                          No Disponible
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}