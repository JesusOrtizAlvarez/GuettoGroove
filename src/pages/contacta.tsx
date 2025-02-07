import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

export function Contacta() {
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
            CONTACTA
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 mx-auto bg-primary"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-muted"
            >
              <h2 className="mb-6 text-3xl font-bold tracking-tighter font-display">
              PONTE EN CONTACTO
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm tracking-wider uppercase text-foreground/60">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border bg-background text-foreground border-white/10 focus:outline-none focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm tracking-wider uppercase text-foreground/60">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border bg-background text-foreground border-white/10 focus:outline-none focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm tracking-wider uppercase text-foreground/60">
                    Escribe aquí tu mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border bg-background text-foreground border-white/10 focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-sm tracking-wider text-white uppercase transition-colors duration-300 bg-primary hover:bg-primary/80"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Contact Details */}
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tighter font-display">
                  INFO
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-foreground/60">
                    <Mail className="w-6 h-6 mr-4" />
                    <span>contacto@guettogroove.com</span>
                  </div>
                  <div className="flex items-center text-foreground/60">
                    <Phone className="w-6 h-6 mr-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-foreground/60">
                    <MapPin className="w-6 h-6 mr-4" />
                    <span>Techno Street, Huesa, Jaén</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tighter font-display">
                  ¡SIGUENOS!
                </h2>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com/guetto_groove"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-foreground/60 hover:text-primary"
                  >
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a
                    href="https://soundcloud.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-foreground/60 hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.04-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.013.057.045.093.104 .093.057 0 .091-.039.104-.093l.196-1.308-.196-1.332c-.013-.057-.047-.094-.104-.094M2.669 11.107c-.067 0-.112.054-.12.12L2.278 14.47l.271 2.297c.008.066.053.12.12.12.066 0 .112-.054.12-.12l.303-2.297-.303-3.243c-.008-.066-.054-.12-.12-.12m.994-.003c-.069 0-.119.053-.128.123l-.257 3.243.257 2.297c.009.07.059.123.128.123.07 0 .12-.053.129-.123l.29-2.297-.29-3.243c-.009-.07-.059-.123-.129-.123m1.105-.037c-.077 0-.132.058-.14.134l-.241 3.269.241 2.295c.008.076.063.134.14.134.076 0 .132-.058.14-.134l.274-2.295-.274-3.269c-.008-.076-.064-.134-.14-.134m1.102-.013c-.082 0-.143.063-.151.145l-.227 3.271.227 2.287c.008.082.069.145.151.145.082 0 .143-.063.151-.145l.259-2.287-.259-3.271c-.008-.082-.069-.145-.151-.145m1.092.009c-.086 0-.15.066-.159.152l-.213 3.255.213 2.286c.009.086.073.151.159.151.086 0 .15-.065.159-.151l.24-2.286-.24-3.255c-.009-.086-.073-.152-.159-.152m1.029-.024c-.096 0-.157.07-.163.158l-.199 3.273.199 2.275c.006.088.067.157.163.157.092 0 .159-.069.172-.157l.185-2.275-.185-3.273c-.013-.088-.08-.158-.172-.158m1.067-.009c-.097 0-.165.073-.171.164l-.185 3.276.185 2.248c.006.091.074.164.171.164.092 0 .165-.073.171-.164l.21-2.248-.21-3.276c-.006-.091-.079-.164-.171-.164m1.031-.029c-.108 0-.173.077-.179.171l-.172 3.298.172 2.246c.006.094.071.171.179.171.106 0 .173-.077.179-.171l.197-2.246-.197-3.298c-.006-.094-.073-.171-.179-.171m1.047-.007c-.108 0-.183.08-.189.179l-.159 3.297.159 2.244c.006.099.081.179.189.179.108 0 .183-.08.189-.179l.182-2.244-.182-3.297c-.006-.099-.081-.179-.189-.179m1.045-.021c-.115 0-.19.084-.195.187l-.145 3.31.145 2.24c.005.103.08.187.195.187.115 0 .19-.084.195-.187l.165-2.24-.165-3.31c-.005-.103-.08-.187-.195-.187m1.12-.009c-.12 0-.2.087-.201.194l-.132 3.316.132 2.233c.001.107.081.194.201.194.12 0 .2-.087.201-.194l.15-2.233-.15-3.316c-.001-.107-.081-.194-.201-.194m1.056-.009c-.129 0-.205.091-.207.201l-.118 3.318.118 2.231c.002.11.078.201.207.201.129 0 .205-.091.207-.201l.133-2.231-.133-3.318c-.002-.11-.078-.201-.207-.201m1.063-.013c-.134 0-.213.095-.214.209l-.105 3.323.105 2.229c.001.114.08.209.214.209.134 0 .213-.095.214-.209l.119-2.229-.119-3.323c-.001-.114-.08-.209-.214-.209m1.075-.008c-.138 0-.22.098-.221.216l-.092 3.324.092 2.226c.001.118.083.216.221.216.138 0 .22-.098.221-.216l.104-2.226-.104-3.324c-.001-.118-.083-.216-.221-.216m1.135-.021c-.143 0-.228.102-.229.224l-.078 3.337.078 2.222c.001.122.086.224.229.224.143 0 .228-.102.229-.224l.088-2.222-.088-3.337c-.001-.122-.086-.224-.229-.224m1.142.004c-.147 0-.233.105-.234.231l-.065 3.331.065 2.219c.001.126.087.231.234.231.147 0 .233-.105.234-.231l.072-2.219-.072-3.331c-.001-.126-.087-.231-.234-.231" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-foreground/60 hover:text-primary"
                  >
                    <Twitter className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}