import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  excerpt: string;
  image?: string;
  featured?: boolean;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialsCarousel({
  testimonials = [],
  autoPlay = true,
  interval = 5000,
}: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Aucun témoignage disponible
      </div>
    );
  }

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-card dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {testimonials[current].image && (
              <img
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <blockquote className="text-lg italic mb-6 text-muted-foreground">
                "{testimonials[current].excerpt}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {testimonials.length > 1 && (
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? "w-8 bg-blue-600" : "w-2 bg-border"
                }`}
                aria-label={`Aller au témoignage ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
