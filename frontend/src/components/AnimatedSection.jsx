import React, { useState, useEffect, useRef } from "react";
import { Box, Fade, Grow, Slide } from "@mui/material";

// Animasyon türleri
export const ANIMATION_TYPES = {
  FADE: "fade",
  SLIDE: "slide",
  GROW: "grow"
};

/**
 * Scroll ile tetiklenen animasyonlu bileşen
 * 
 * @param {Object} props Component properties
 * @param {React.ReactNode} props.children The content to be animated
 * @param {string} props.type Animation type: 'fade', 'slide', or 'grow'
 * @param {number} props.threshold Viewport visibility threshold (0-1)
 * @param {number} props.timeout Animation duration in milliseconds
 * @param {Object} props.sx Additional MUI sx props for the Box component
 */
const AnimatedSection = ({ 
  children, 
  type = ANIMATION_TYPES.FADE, 
  threshold = 0.1,
  timeout = 1000,
  sx = {}
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Bileşen görüntülendikten sonra gözlemlemeyi bırak
        observer.unobserve(currentRef);
      }
    }, { threshold });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Animasyon türüne göre farklı MUI bileşenleri kullan
  const renderAnimatedComponent = () => {
    switch (type) {
      case ANIMATION_TYPES.SLIDE:
        return (
          <Slide direction="up" in={isVisible} timeout={timeout}>
            <Box sx={sx}>{children}</Box>
          </Slide>
        );
      case ANIMATION_TYPES.GROW:
        return (
          <Grow in={isVisible} timeout={timeout}>
            <Box sx={sx}>{children}</Box>
          </Grow>
        );
      case ANIMATION_TYPES.FADE:
      default:
        return (
          <Fade in={isVisible} timeout={timeout}>
            <Box sx={sx}>{children}</Box>
          </Fade>
        );
    }
  };

  return <div ref={ref}>{renderAnimatedComponent()}</div>;
};

export default AnimatedSection;