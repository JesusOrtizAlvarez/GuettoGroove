import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import events from '../data/events';

export function ComprarEntradas() {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));
  const [ticketCount, setTicketCount] = useState(1);
  
  if (!event || !event.available) return <div>Evento no disponible</div>;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-5xl font-bold tracking-tighter font-display md:text-7xl"
          >
            COMPRAR ENTRADAS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 mx-auto bg-primary"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter font-display">
                  {event.title}
                </h2>
                
                <div className="space-y-2">
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

                <div>
                  <h3 className="mb-2 text-sm tracking-wider uppercase text-foreground/60">LINE UP</h3>
                  <div className="flex flex-wrap gap-2">
                    {event.artists.map((artist) => (
                      <span
                        key={artist}
                        className="px-3 py-1 text-sm tracking-wider uppercase bg-muted text-foreground/80"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ticket Selection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky p-8 space-y-8 bg-muted h-fit top-8"
            >
              <h3 className="text-2xl font-bold tracking-tighter font-display">DETALLES DE COMPRA</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Precio por entrada:</span>
                  <span className="text-2xl font-bold text-primary">{event.price}</span>
                </div>

                <div className="space-y-2">
                  <label className="text-sm tracking-wider uppercase text-foreground/60">
                    Cantidad de entradas
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                      className="p-2 transition-colors rounded-full bg-background hover:bg-background/80"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-8 text-xl font-bold text-center">{ticketCount}</span>
                    <button
                      onClick={() => setTicketCount(Math.min(10, ticketCount + 1))}
                      className="p-2 transition-colors rounded-full bg-background hover:bg-background/80"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium">Total:</span>
                    <span className="text-3xl font-bold text-primary">
                      {`${(parseFloat(event.price) * ticketCount).toFixed(2)}€`}
                    </span>
                  </div>
                  
                  <button className="w-full py-4 text-lg tracking-wider text-white uppercase transition-colors duration-300 bg-primary hover:bg-primary/80">
                    FINALIZAR COMPRA
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}