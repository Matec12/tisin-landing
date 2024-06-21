import React, { ReactNode } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface SlideUpProps {
  children: ReactNode;
}

const SlideUp = ({ children }: SlideUpProps) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
    config: { tension: 200, friction: 20 }
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

export default SlideUp;
