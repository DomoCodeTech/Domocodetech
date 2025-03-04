import { motion } from "framer-motion";

interface FloatingParticleProps {
  delay: number;
}

export const FloatingParticle = ({ delay }: FloatingParticleProps) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "linear-gradient(45deg, #00FFA3, #00805E)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [-20, -60],
        x: Math.random() * 40 - 20,
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};
