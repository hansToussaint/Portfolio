import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, MobileStepper, useMediaQuery, styled } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";
import theme from "../styles/Theme";

const CustomMobileStepper = styled(MobileStepper)(() => ({
    "& .MuiMobileStepper-dot": {
    //   backgroundColor: theme.palette.common., 
    },
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: "#000", 
    },
  }));

  const testimonials = [
    {
      text: "I have had the pleasure of working with Hans on several projects. As a senior full stack developer, I witnessed his technical expertise, creativity, and commitment firsthand. His problem-solving skills and dedication to quality consistently elevated our projects, making him an invaluable partner in every endeavor.",
      author: "Nico Philibert",
    },
    {
      text: "Having had a custom website created for me, I can confidently say it beautifully captures my artistry and dynamic performances. The elegant design and intuitive navigation have elevated my digital presence, showcasing my unique style and talent.",
      author: "Junior Descollines",
    },
    {
      text: "As a developer specializing in SQL and data analysis, I had the pleasure of working with Hans on a complex project. His front-end expertise brought our work to life with an intuitive and visually appealing interface. He is a highly skilled and collaborative developer who ensures seamless integration between design and functionality, making him an invaluable asset to any team.",
      author: "Bens Loiseau Phabrice",
    },
    {
      text: "Веб-сайт, разработанный для моей практики, превзошел все мои ожидания. Современный дизайн и интуитивно понятный интерфейс создали комфортное пространство, где мои клиенты с легкостью находят нужную информацию и записываются на консультации. Я высоко оценила профессионализм и внимание к деталям, благодаря которым этот сайт стал настоящей визитной карточкой моего бизнеса.",
      author: "Violetta Lemann",
    },
  ];
    

const TestimonialSlider: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxSteps = testimonials.length;
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveStep((prev) => (prev + 1) % maxSteps);
    }
  };

  const handleBack = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handleBack,
    trackMouse: true,
  });

  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTransitioning]);

  return (
    <Box
    sx={{
      width: "100%",
      pt: 4, 
      pb: 4,
      px: 2,
      boxShadow: 3,
      position: "relative",
      overflow: "hidden",
      backgroundColor: theme.palette.common.white,
    }}
      {...swipeHandlers}
    >
      <Box
        sx={{
          display: "flex",
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          transform: `translateX(-${activeStep * 100}%)`,
        }}
        onTransitionEnd={() => setIsTransitioning(false)}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100%",
              flex: "0 0 100%",
              p: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontStyle: "italic", color: "#555" }}>
              "{testimonial.text}"
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold", color: "#333" }}>
              {testimonial.author}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Flèches de navigation visibles sur desktop */}
      {!isMobile && (
        <>
          <Button
            onClick={handleBack}
            disableRipple
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              color: "#333",
              backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
          >
            <KeyboardArrowLeft fontSize="large" />
          </Button>
          <Button
            onClick={handleNext}
            disableRipple
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              color: "#333",
              backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
          >
            <KeyboardArrowRight fontSize="large" />
          </Button>
        </>
      )}
      {/* MobileStepper pour indiquer le slide actif */}
      <CustomMobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ background: "transparent", mt: 2, justifyContent: "center" }}
        nextButton={null}
        backButton={null}
      />
    </Box>
  );
};

export default TestimonialSlider;