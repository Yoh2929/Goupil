// Composants pour Goupil - Réemploi informatique & Inclusion numérique
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Monitor, Users, Cpu, Heart, TrendingUp, Recycle, GraduationCap, Wrench, Calendar, MapPin, Clock, Mail, User, Quote } from "lucide-react";
import { homeHeroStats, homeImpactStats, homeMissions } from "../content/home-content";

export { Hero, Stats, Mission, Projects, Events, Gallery, Testimonials, Newsletter, CTA };

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Subtle Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-foreground text-sm font-medium mb-12"
        >
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Reconditionnement informatique en Bretagne
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]"
        >
          Lutter contre la
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
            fracture numérique
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Réemploi informatique, inclusion numérique et accompagnement humain sur le territoire breton.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="group px-10 py-4 bg-foreground text-background rounded-full font-medium text-base sm:text-lg hover:bg-foreground/90 transition-all flex items-center gap-2"
          >
            Découvrir nos actions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="group px-10 py-4 bg-transparent text-foreground rounded-full font-medium text-base sm:text-lg border-2 border-border hover:border-foreground/20 hover:bg-muted/50 transition-all flex items-center gap-2"
          >
            <Monitor className="w-5 h-5" />
            Obtenir du matériel
          </motion.button>
        </motion.div>

        {/* Stats Cards - Plus épurées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {homeHeroStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-border transition-all"
              >
                <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-foreground mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
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

  return (
    <section ref={ref} className="py-32 sm:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Notre impact en chiffres
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Des actions concrètes pour un numérique accessible et durable
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {homeImpactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-10 text-center hover:border-border hover:bg-card/50 transition-all"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/5 mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-5xl font-bold mb-3 text-foreground tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 sm:py-40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 tracking-wide">
            Nos missions
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Un numérique pour tous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Quatre piliers pour un accès équitable et durable au numérique sur le territoire breton
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {homeMissions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-10 hover:bg-card hover:border-border hover:shadow-2xl transition-all duration-500"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${mission.color} mb-8 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
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

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Ordi'Solidaire",
      description: "Distribution d'ordinateurs reconditionnés aux familles en situation de précarité numérique",
      impact: "350 familles équipées",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Ateliers Numériques",
      description: "Formations gratuites aux bases de l'informatique et aux démarches en ligne",
      impact: "120 ateliers / an",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Repair Café Tech",
      description: "Ateliers de réparation collaborative pour prolonger la durée de vie du matériel",
      impact: "200 réparations / an",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={ref} className="py-32 sm:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 tracking-wide">
            Nos projets
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Actions sur le terrain
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Des initiatives concrètes pour un impact social et environnemental mesurable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:bg-card hover:border-border hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute top-6 right-6 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                  {project.impact}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      date: "25 Mai 2026",
      time: "14h - 17h",
      title: "Atelier découverte du reconditionnement",
      location: "Morlaix, Bretagne",
      spots: "15 places",
    },
    {
      date: "8 Juin 2026",
      time: "10h - 12h",
      title: "Formation aux démarches administratives en ligne",
      location: "En ligne",
      spots: "20 places",
    },
    {
      date: "15 Juin 2026",
      time: "9h - 16h",
      title: "Repair Café Tech - Journée portes ouvertes",
      location: "Morlaix, Bretagne",
      spots: "Accès libre",
    },
  ];

  return (
    <section ref={ref} className="py-32 sm:py-40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 tracking-wide">
            Événements
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Prochains rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Participez à nos ateliers et événements pour découvrir l'inclusion numérique
          </p>
        </motion.div>

        <div className="space-y-6 lg:space-y-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-10 hover:bg-card hover:border-border hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row gap-8"
            >
              <div className="flex-shrink-0">
                <div className="inline-block bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-6 min-w-[100px] text-center">
                  <div className="text-3xl font-bold tracking-tight">{event.date.split(' ')[0]}</div>
                  <div className="text-sm opacity-90 mt-1 font-medium">{event.date.split(' ')[1]}</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                  <span className="flex items-center gap-2 text-base">
                    <Clock className="w-5 h-5" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-2 text-base">
                    <MapPin className="w-5 h-5" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-2 text-base">
                    <Users className="w-5 h-5" />
                    {event.spots}
                  </span>
                </div>
                <button className="px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors">
                  S'inscrire
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    {
      url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Atelier de reconditionnement",
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Formation numérique",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Équipe Goupil",
    },
    {
      url: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Matériel reconditionné",
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Accompagnement personnalisé",
    },
    {
      url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Distribution solidaire",
    },
  ];

  return (
    <section ref={ref} className="py-32 sm:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 tracking-wide">
            Galerie
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            En images
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Découvrez nos ateliers, nos équipes et les sourires de ceux que nous accompagnons
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer border border-border/50 hover:border-border transition-all duration-500"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-semibold text-lg tracking-tight">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sophie M.",
      role: "Bénéficiaire Ordi'Solidaire",
      text: "Grâce à Goupil, mes enfants peuvent suivre l'école à distance. Un ordinateur reconditionné qui a changé notre quotidien.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    },
    {
      name: "Jean-Luc T.",
      role: "Participant aux ateliers",
      text: "À 68 ans, j'ai appris à faire mes démarches en ligne. L'équipe est patiente et pédagogue. Merci pour cette autonomie retrouvée.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    },
    {
      name: "Marie K.",
      role: "Bénévole depuis 2 ans",
      text: "Transmettre mes compétences techniques pour une cause sociale et écologique, c'est ce qui donne du sens à mon engagement.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    },
  ];

  return (
    <section ref={ref} className="py-32 sm:py-40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 tracking-wide">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Ils témoignent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Les voix de celles et ceux qui font vivre notre mission
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-10 hover:bg-card hover:border-border hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="w-12 h-12 text-primary/15 mb-6 group-hover:text-primary/25 transition-colors" />
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-light">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-border/50 group-hover:ring-border transition-all"
                />
                <div>
                  <div className="font-semibold text-lg tracking-tight">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground font-light">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section ref={ref} className="py-32 sm:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-primary via-blue-600 to-secondary rounded-[2.5rem] p-12 sm:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <Mail className="w-14 h-14 mx-auto mb-8 opacity-90" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Restez informé·e
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Recevez nos actualités, événements et conseils pour un numérique solidaire directement dans votre boîte mail
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="px-10 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors whitespace-nowrap text-lg"
                >
                  S'abonner
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-white"
              >
                <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10" />
                </div>
                <p className="text-2xl font-semibold">Merci ! Vous êtes inscrit·e à notre newsletter.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 sm:py-40 relative overflow-hidden bg-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Subtle Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-background mb-6 tracking-tight">
            Rejoignez le mouvement
          </h2>
          <p className="text-xl text-background/70 max-w-3xl mx-auto font-light">
            Ensemble, construisons un numérique accessible, solidaire et durable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group bg-background/5 backdrop-blur-sm border border-background/10 rounded-3xl p-10 hover:bg-background/10 hover:border-background/20 transition-all duration-500"
          >
            <div className="inline-flex p-4 rounded-2xl bg-background/10 mb-8 group-hover:bg-background/20 transition-colors">
              <Heart className="w-7 h-7 text-background" />
            </div>
            <h3 className="text-3xl font-bold text-background mb-4 tracking-tight">
              Faire un don
            </h3>
            <p className="text-background/70 mb-8 text-lg font-light leading-relaxed">
              Soutenez nos actions d'inclusion numérique et de réemploi informatique
            </p>
            <button className="w-full px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-background/90 transition-colors text-lg">
              Contribuer
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group bg-background/5 backdrop-blur-sm border border-background/10 rounded-3xl p-10 hover:bg-background/10 hover:border-background/20 transition-all duration-500"
          >
            <div className="inline-flex p-4 rounded-2xl bg-background/10 mb-8 group-hover:bg-background/20 transition-colors">
              <Users className="w-7 h-7 text-background" />
            </div>
            <h3 className="text-3xl font-bold text-background mb-4 tracking-tight">
              Devenir bénévole
            </h3>
            <p className="text-background/70 mb-8 text-lg font-light leading-relaxed">
              Rejoignez une équipe engagée pour un numérique solidaire en Bretagne
            </p>
            <button className="w-full px-8 py-4 bg-transparent text-background rounded-full font-semibold border-2 border-background/30 hover:border-background/50 hover:bg-background/5 transition-colors text-lg">
              Nous rejoindre
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
