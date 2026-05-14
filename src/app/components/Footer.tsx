import { Link } from "react-router-dom";
import { Laptop, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { primaryCta, publicRoutes, secondaryCta } from "../config/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-background text-foreground rounded-xl p-2">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Goupil</span>
            </div>
            <p className="text-background/60 mb-8 leading-relaxed font-light">
              Association de réemploi informatique et d'inclusion numérique en Bretagne.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg tracking-tight">L'association</h3>
            <ul className="space-y-4">
              {publicRoutes.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className="text-background/60 hover:text-background transition-colors font-light">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg tracking-tight">S'engager</h3>
            <ul className="space-y-4">
              <li><Link to={secondaryCta.path} className="text-background/60 hover:text-background transition-colors font-light">{secondaryCta.label}</Link></li>
              <li><Link to={primaryCta.path} className="text-background/60 hover:text-background transition-colors font-light">{primaryCta.label}</Link></li>
              <li><Link to="/contact" className="text-background/60 hover:text-background transition-colors font-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg tracking-tight">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/60 font-light">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Pays de Morlaix, Bretagne</span>
              </li>
              <li className="flex items-center gap-3 text-background/60 font-light">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>02 98 XX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-background/60 font-light">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>contact@goupil.bzh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm font-light">© 2026 Association Goupil. Tous droits réservés.</p>
          <div className="flex gap-8 text-sm">
            <Link to="/mentions-legales" className="text-background/50 hover:text-background transition-colors font-light">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
