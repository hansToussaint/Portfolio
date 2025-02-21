import { Box, Divider, Grid2, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import AppMenu from "../components/AppMenu";
import theme from "../styles/Theme";
import Service from "../components/Service";
import { DeveloperMode, DesignServices, Storage } from "@mui/icons-material";
import TestimonialSlider from "../components/TestimonialSlider";

const sections = [
    {id: "home", label: "Home", bg: theme.palette.common.white},
    {id: "services", label: "My Expertise", bg: theme.palette.common.secondBgColor},
    {id: "skills", label: "Key Competencies", bg: theme.palette.common.white},
    {id: "projects", label: "Projects", bg: theme.palette.common.secondBgColor},
    {id: "testimonials", label: "Testimonials & Endorsements", bg: theme.palette.common.white},
    {id: "contact", label: "Get in Touch", bg: theme.palette.common.secondBgColor},
]

const MainPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section.id);

                if(element && element.offsetTop <= scrollPosition) setActiveSection(section.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <AppMenu activeSection={activeSection} />

        {sections.map(section => (
            <Box
            key={section.id}
            id={section.id}
            sx={{
                height: "100%",
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                padding: isSmallScreen ? "1.6rem 3rem" : "1.6rem",
                pb: "5rem",
                backgroundColor: section.bg,
            }}
            >
                {/* En-tete */}
                <Box
                sx={{
                    maxWidth: "1150px",
                    width: "100%",
                    mx: "auto",
                    mt: "2rem",
                    mb: "4rem",
                    display: "flex",
                    alignItems: "center",
                    }}
                    >
                        <Divider sx={{ flexGrow: 1, backgroundColor: theme.palette.common.secondBgColor }} />
                        <Typography
                          variant="h1"
                          sx={{ 
                            mx: 2,
                            textAlign:"center",
                        }}
                        >
                          {section.label}
                        </Typography>
                        <Divider sx={{ flexGrow: 1, backgroundColor: theme.palette.common.secondBgColor }} />
                </Box>


                {/* Home section */}

                {/* Services section */}
                {section.id === "services" && (
                    <Box sx={{
                        maxWidth: "1150px",
                        width: "100%",
                        margin: "0 auto",
                    }}>
                        <Grid2 container 
                        sx={{
                            display: "grid",
                            // display: isSmallScreen ? "flex" : "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: 4,
                            width: "100%",
                           justifyContent:"center",
                        }}
                        >
                            <Grid2 display="flex">
                                <Service
                                    icon={<DeveloperMode sx={{fontSize: "4.7rem", color: theme.palette.common.secondTextColor,}}/>}
                                    title="Front End Development"
                                    options={["HTML/CSS", "Javascript", "Typescript", "React", "Redux", "Next.js", "Tailwind Css", "Material UI"]}
                                />
                            </Grid2>

                            <Grid2 display="flex">
                                <Service 
                                     icon={<Storage sx={{fontSize: "4.7rem", color: theme.palette.common.secondTextColor,}} />}
                                     title="Back End Development"
                                     options={["Node.js", "MongoDB", "PostgreSQL", "Express",]}
                                />
                            </Grid2>

                            <Grid2 display="flex">
                                <Service 
                                    icon={<DesignServices sx={{fontSize: "4.7rem", color: theme.palette.common.secondTextColor,}} />}
                                    title="Web Design"
                                    options={["UI/UX", "Responsive Design", "Figma", "Prototyping", "Landing Pages",]}
                            />
                            </Grid2>
                        </Grid2>
                    </Box>
                    )}

                    {/* Skills section */}

                    {/* projects section */}

                    {/* Testimonials sections */}

                    {section.id === "testimonials" && (
                        <Box
                        sx={{
                            maxWidth: "1150px",
                            width: "100%",
                            margin: "0 auto",
                        }}
                        >
                            <TestimonialSlider />
                        </Box>
                    )}

                    {/* contact section */}

                    {/*  */}
            </Box>
        ))}
        </>
    )
}

export default MainPage;