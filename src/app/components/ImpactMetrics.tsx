import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Metric {
  label: string;
  value: number;
  suffix?: string;
  icon?: string;
  description?: string;
}

interface ImpactMetricsProps {
  metrics: Metric[];
  columns?: 2 | 3 | 4;
  animate?: boolean;
}

function CountUp({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setCount(Math.floor(end * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
}

export function ImpactMetrics({
  metrics = [],
  columns = 3,
  animate = true,
}: ImpactMetricsProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  if (metrics.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Aucune métrique disponible
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridClass[columns]} gap-6`}>
      {metrics.map((metric, idx) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl border border-blue-200 dark:border-blue-800 p-8 text-center"
        >
          {metric.icon && (
            <div className="text-4xl mb-4">{metric.icon}</div>
          )}
          <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {animate ? (
              <>
                <CountUp end={metric.value} />
                {metric.suffix}
              </>
            ) : (
              <>
                {metric.value}
                {metric.suffix}
              </>
            )}
          </div>
          <p className="font-semibold text-foreground mb-2">
            {metric.label}
          </p>
          {metric.description && (
            <p className="text-sm text-muted-foreground">
              {metric.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
