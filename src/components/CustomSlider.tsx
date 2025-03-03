import { Box, Button, MobileStepper, styled, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import theme from "../styles/Theme";
import { useSwipeable } from "react-swipeable";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface CustomSliderProps {
    items: React.ReactNode[];
    autoSlideInterval?: number; // Intervalle en ms (par défaut 5000)
    showDots?: boolean;
    arrowSize?: "small" | "medium" | "large"; 
}

interface ArrowSizeMappingProps {
    small: string;
    medium: string;
    large: string;
}

const arrowSizeMapping: ArrowSizeMappingProps = {
    small: "2.5rem",
    medium: "4rem",
    large: "5.5rem",
  };

const CustomMobileStepper = styled(MobileStepper)(() => ({
    "& .MuiMobileStepper-dot": {
    //   backgroundColor: theme.palette.common., 
    },
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: theme.palette.common.redColor, 
    },
  }));

const CustomSlider: React.FC<CustomSliderProps> = ({
    items,
    autoSlideInterval = 5000,
    showDots = true,
    arrowSize = "large",
}) => {
    // clone du dernier item au début et du premier à la fin
    const extendedItems = [
        items[items.length - 1],
        ...items,
        items[0],
      ];
    
    const [activeStep, setActiveStep] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const maxSteps = items.length;
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
    const handleNext = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveStep((prev) => prev + 1);
      }
    };
    
    const handleBack = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveStep((prev) => prev - 1);
      }
    };
    
    const swipeHandlers = useSwipeable({
      onSwipedLeft: handleNext,
      onSwipedRight: handleBack,
      trackMouse: true,
    });
    
    const handleTransitionEnd = () => {
      // Si l'on est sur un clone, réinitialiser l'index sans animation
      if (activeStep === 0) {
        // On est sur le clone du dernier témoignage
        setIsTransitioning(false);
        setActiveStep(maxSteps);
      } else if (activeStep === extendedItems.length - 1) {
        // On est sur le clone du premier témoignage
        setIsTransitioning(false);
        setActiveStep(1);
      } else {
        setIsTransitioning(false);
      }
    };

    const activeDotIndex =
    activeStep === 0
      ? maxSteps - 1
      : activeStep === extendedItems.length - 1
      ? 0
      : activeStep - 1;

    useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNext();
    }, autoSlideInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTransitioning, autoSlideInterval]);


  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        // maxHeight: "77vh",
      }}
      {...swipeHandlers}
    >
      <Box
        sx={{
          display: "flex",
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          transform: `translateX(-${activeStep * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, index) => (
          <Box key={index} sx={{ minWidth: "100%", flex: "0 0 100%" }}>
            {item}
          </Box>
        ))}
      </Box>

      {/* Flèches de navigation (affichées sur desktop) */}
      {!isMobile && (
        <>
          <Button
            onClick={handleBack}
            disableRipple
            sx={{
              position: "absolute",
              top: "50%",
              left: -25,
              transform: "translateY(-50%)",
              color: "#333",
            //   backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": { background: "none" },
            }}
          >
            <KeyboardArrowLeft style={{fontSize: arrowSizeMapping[arrowSize], color: theme.palette.common.redColor}} />
          </Button>
          <Button
            onClick={handleNext}
            disableRipple
            sx={{
              position: "absolute",
              top: "50%",
              right: -25,
              transform: "translateY(-50%)",
              color: "#333",
            //   backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": { background: "none" },
            }}
          >
            <KeyboardArrowRight style={{fontSize: arrowSizeMapping[arrowSize], color: theme.palette.common.redColor}} />
          </Button>
        </>
      )}

      {/* Dots pour indiquer le slide actif */}
      {showDots && (
        <CustomMobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeDotIndex}
          sx={{ background: "transparent", mt: 2, justifyContent: "center" }}
          nextButton={null}
          backButton={null}
        />
      )}
    </Box>
  );

}

export default CustomSlider;