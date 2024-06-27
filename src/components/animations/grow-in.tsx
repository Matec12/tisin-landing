import React, { ReactNode } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

interface GrowInProps {
  children: ReactNode;
}

const GrowIn = ({ children }: GrowInProps) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    config: config.wobbly
  });

  return (
    <animated.div
      style={{ position: "relative", zIndex: 9999999, ...styles }}
      ref={ref}
    >
      {children}
    </animated.div>
  );
};

export { GrowIn };
