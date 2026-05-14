import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingDonation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-6 right-6 z-40"
      >
        {!isExpanded ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(true)}
            className="group relative bg-gradient-to-br from-primary to-secondary text-white rounded-full p-4 shadow-2xl hover:shadow-primary/50 transition-shadow"
          >
            <Heart className="w-6 h-6 fill-current" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-primary/30 -z-10"
            />
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card border border-border rounded-2xl shadow-2xl p-6 w-80"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-full p-2">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <h3 className="font-bold">Soutenez notre mission</h3>
              </div>
              <button onClick={() => setIsExpanded(false)} className="p-1 hover:bg-accent rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Votre don soutient l'inclusion numérique en Bretagne
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {["10€", "25€", "50€"].map((amount) => (
                <button
                  key={amount}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium"
                >
                  {amount}
                </button>
              ))}
            </div>
            <Link to="/faire-un-don">
              <button className="w-full px-6 py-3 bg-gradient-to-br from-primary to-secondary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Faire un don
              </button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
