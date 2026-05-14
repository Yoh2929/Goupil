// Re-export simple components for home page
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, Sprout, Shield, Users, BookOpen, TreePine, Bird, GraduationCap, Microscope, Calendar, MapPin, User, Quote, Mail, CheckCircle, Heart, UserPlus, X, ZoomIn } from "lucide-react";

export { Hero, Stats, Mission, Projects, Events, Gallery, Testimonials, Newsletter, CTA };

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1530563706032-3398fe67407a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Fox in nature"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Association agréée depuis 1983
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Protégeons ensemble
          <br />
          <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
            notre écosystème
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Association de protection de la faune, de la flore et de l'environnement.
          Ensemble, agissons pour préserver la biodiversité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-primary rounded-full font-semibold text-base sm:text-lg shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-2"
          >
            Rejoindre l'aventure
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 40, suffix: "+", label: "Années d'engagement" },
    { value: 2500, suffix: "+", label: "Hectares protégés" },
    { value: 150, suffix: "+", label: "Espèces préservées" },
    { value: 5000, suffix: "+", label: "Membres actifs" },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Notre impact en chiffres
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Plus de quatre décennies d'action concrète pour la biodiversité
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base text-primary-foreground/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const missions = [
    {
      icon: Shield,
      title: "Protection de la faune",
      description: "Sauvegarde des espèces menacées et préservation de leurs habitats naturels",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Sprout,
      title: "Conservation des écosystèmes",
      description: "Restauration et maintien de la biodiversité dans nos territoires",
      color: "from-green-500 to-lime-600",
    },
    {
      icon: BookOpen,
      title: "Éducation à l'environnement",
      description: "Sensibilisation du public aux enjeux écologiques actuels",
      color: "from-lime-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Action collective",
      description: "Mobilisation citoyenne pour des projets concrets et durables",
      color: "from-teal-500 to-emerald-600",
    },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Notre mission
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Agir pour un avenir durable
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Depuis 1983, nous œuvrons quotidiennement pour la préservation de notre patrimoine naturel
            à travers quatre piliers fondamentaux.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${mission.color} mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Placeholder components - these will be created separately
function Projects() {
  return <div className="py-20 bg-muted/30 text-center text-muted-foreground">Projets section</div>;
}

function Events() {
  return <div className="py-20 bg-background text-center text-muted-foreground">Événements section</div>;
}

function Gallery() {
  return <div className="py-20 bg-muted/30 text-center text-muted-foreground">Galerie section</div>;
}

function Testimonials() {
  return <div className="py-20 bg-background text-center text-muted-foreground">Témoignages section</div>;
}

function Newsletter() {
  return <div className="py-20 bg-background text-center text-muted-foreground">Newsletter section</div>;
}

function CTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1758465814256-95ba6dab413d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Forest from above"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Rejoignez le mouvement
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Ensemble, construisons un avenir plus vert. Chaque action compte, chaque voix compte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
          >
            <div className="inline-flex p-3 rounded-xl bg-white/20 mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Faire un don
            </h3>
            <p className="text-white/80 mb-6">
              Soutenez nos projets de conservation et de sensibilisation.
            </p>
            <button className="w-full px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Contribuer maintenant
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
          >
            <div className="inline-flex p-3 rounded-xl bg-white/20 mb-6">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Devenir membre
            </h3>
            <p className="text-white/80 mb-6">
              Intégrez une communauté engagée et participez activement à nos actions.
            </p>
            <button className="w-full px-6 py-3 bg-white/20 text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-colors">
              Adhérer à l'association
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
