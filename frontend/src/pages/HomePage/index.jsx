import React, { useState, useEffect, useRef } from "react";
import { Box, Fade, Grow, Slide } from "@mui/material";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularLessons from "./components/PopularLessons";
import Statistics from "./components/Statistics";
import EducationApproach from "./components/EducationApproach";
import Comments from "./components/Comments";
import CtaSection from "./components/CtaSection";
import Community from "./components/Community";

// Scroll ile görünürlüğü izleyen özel hook
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, ref]);

  return [ref, isVisible];
};

// Yavaşça görünüm kazanan bileşen
const FadeInSection = ({ children, timeout = 1000 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <Fade in={isVisible} timeout={timeout}>
        <Box>{children}</Box>
      </Fade>
    </div>
  );
};

// Aşağıdan yukarı kayarak görünüm kazanan bileşen
const SlideUpSection = ({ children, timeout = 1000 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <Slide direction="up" in={isVisible} timeout={timeout}>
        <Box>{children}</Box>
      </Slide>
    </div>
  );
};

// Büyüyerek görünüm kazanan bileşen
const GrowSection = ({ children, timeout = 1000 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <Grow in={isVisible} timeout={timeout}>
        <Box>{children}</Box>
      </Grow>
    </div>
  );
};

function HomePage() {
  return (
    <Box>
      {/* Hero kısmı sayfa yüklendiğinde hemen görünecek */}
      <Fade in={true} timeout={1000}>
        <Box>
          <Hero />
        </Box>
      </Fade>

      {/* Diğer bileşenler scroll ile görünür hale gelecek */}
      <SlideUpSection timeout={1200}>
        <Features />
      </SlideUpSection>

      <GrowSection timeout={1200}>
        <PopularLessons />
      </GrowSection>

      {/* İstatistikler */}
      <SlideUpSection timeout={1200}>
        <Statistics />
      </SlideUpSection>

      {/* Eğitim Yaklaşımı */}
      <FadeInSection timeout={1200}>
        <EducationApproach />
      </FadeInSection>

      {/* Yorumlar */}
      <SlideUpSection timeout={1200}>
        <Comments />
      </SlideUpSection>
      
      {/* CTA Bölümü */}
      <GrowSection timeout={1200}>
        <CtaSection />
      </GrowSection>

      {/* İletişim Formu */}
      <FadeInSection timeout={1200}>
        <Community />
      </FadeInSection>
    </Box>
  );
}

export default HomePage;