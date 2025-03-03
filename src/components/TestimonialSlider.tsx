import React from "react";
import { Box, Typography, useMediaQuery, } from "@mui/material";
import theme from "../styles/Theme";
import CustomSlider from "./CustomSlider";

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
      text: "As a BI Developer, I had the pleasure of working with Hans on a complex project. His front-end expertise brought our work to life with an intuitive and visually appealing interface. He is a highly skilled and collaborative developer who ensures seamless integration between design and functionality, making him an invaluable asset to any team.",
      author: "Bens-Phabrice LOISEAU",
    },
    {
      text: "Веб-сайт, разработанный для моей практики, превзошел все мои ожидания. Современный дизайн и интуитивно понятный интерфейс создали комфортное пространство, где мои клиенты с легкостью находят нужную информацию и записываются на консультации. Я высоко оценила профессионализм и внимание к деталям, благодаря которым этот сайт стал настоящей визитной карточкой моего бизнеса.",
      author: "Violetta Lemann",
    },
  ];
    

const TestimonialSlider: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const testimonialItems = testimonials.map((testimonial, index) => (
    <Box key={index} sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="body1" sx={{ fontStyle: "italic", color: "#555" }}>
        "{testimonial.text}"
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold", color: "#333" }}>
        {testimonial.author}
      </Typography>
    </Box>
  ));

  return (
    <Box sx={{ pt: 4, pb: isSmallScreen ? 0 : 4, px: 2, backgroundColor: theme.palette.common.white }}>
      <CustomSlider
        items={testimonialItems}
        autoSlideInterval={5000}
        showDots={isSmallScreen ? false : true}
        arrowSize="small"
      />
    </Box>
  );
};

export default TestimonialSlider;