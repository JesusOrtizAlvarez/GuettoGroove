import { motion } from 'framer-motion';
import { Instagram, Music } from 'lucide-react';

const artists = [
  {
    id: 1,
    name: 'BALLESTER DJ',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    bio: 'Siberian-born Nina Kraviz is one of the most successful and recognizable figures in the global electronic music scene.',
    instagram: 'https://instagram.com',
    soundcloud: 'https://soundcloud.com',
  },
];

export function Artistas() {
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
            ARTISTAS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 mx-auto bg-primary"
          />
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden group bg-muted"
              >
                <div className="flex flex-col h-full md:flex-row">
                  {/* Image */}
                  <div className="relative overflow-hidden md:w-1/2 aspect-square">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-t from-background via-background/20 to-transparent group-hover:opacity-60" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-between p-8 md:w-1/2">
                    <div>
                      <h2 className="mb-4 text-3xl font-bold tracking-tighter font-display">
                        {artist.name}
                      </h2>
                      <p className="mb-6 text-foreground/60">
                        {artist.bio}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors text-foreground/60 hover:text-primary"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a
                        href={artist.soundcloud}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors text-foreground/60 hover:text-primary"
                      >
                        <Music className="w-6 h-6" />
                      </a>
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