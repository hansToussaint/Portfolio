import { Box, Divider, Grid2, Typography, useMediaQuery } from "@mui/material";
import AppMenu from "../components/AppMenu";
import theme from "../styles/Theme";
import Service from "../components/Service";
import TestimonialSlider from "../components/TestimonialSlider";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import useHashNavigation from "../hooks/useHashNavigation";
import projects from "../projects/projects";
import ProjectCard from "../components/ProjectCard";
import HomeSection from "../components/HomeSection";
import ColoredIcon from "../components/ColoredIcon";
import SkillsLayout from "../components/SkillsLayout";

const sections = [
    {id: "home", label: "Home", bg: theme.palette.common.white},
    {id: "services", label: "My Expertise", bg: theme.palette.common.secondBgColor},
    {id: "skills", label: "Key Competencies", bg: theme.palette.common.white},
    {id: "projects", label: "Projects", bg: theme.palette.common.secondBgColor},
    {id: "testimonials", label: "Testimonials & Endorsements", bg: theme.palette.common.white},
    {id: "contact", label: "Get in Touch", bg: theme.palette.common.secondBgColor},
];
  

const MainPage: React.FC = () => {
    
    const {activeSection, scrollToSection} = useHashNavigation(sections);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    
    return (
        <>
        <AppMenu activeSection={activeSection} onSectionClick={scrollToSection} />

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
                {section.id !== "home" && (
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
                                fontSize: isSmallScreen? "inherit" : "2.2rem",
                            }}
                            >
                              {section.label}
                            </Typography>
                            <Divider sx={{ flexGrow: 1, backgroundColor: theme.palette.common.secondBgColor }} />
                    </Box>
                )}


                {/* Home section */}

                {section.id === "home" && (
                    <HomeSection />
                )}

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
                                    icon={<ColoredIcon src={`${import.meta.env.BASE_URL}icons/front-end-programming.png`} />}
                                    title="Front End Development"
                                    options={["HTML/CSS", "Javascript", "Typescript", "React/Next.js", "Redux", "Tailwind Css", "Material UI"]}
                                />
                            </Grid2>

                            <Grid2 display="flex">
                                <Service 
                                     icon={<ColoredIcon src={`${import.meta.env.BASE_URL}icons/back-end.png`} />}
                                     title="Back End Development"
                                     options={["Node.js", "MongoDB", "PostgreSQL", "Express",]}
                                />
                            </Grid2>

                            <Grid2 display="flex">
                                <Service 
                                    icon={<ColoredIcon src={`${import.meta.env.BASE_URL}icons/ux-design.png`} />}
                                    title="Web Design"
                                    options={["UI/UX", "Responsive Design", "Figma", "Prototyping", "Landing Pages",]}
                            />
                            </Grid2>
                        </Grid2>
                    </Box>
                    )}

                    {/* Skills section */}
                    {section.id === "skills" && (
                        <Box sx={{
                            maxWidth: "1150px",
                            width: "100%",
                            margin: "0 auto",
                        }}>

                            <SkillsLayout />
                        </Box>
                    )}

                    {/* projects section */}

                    {section.id === "projects" && (
                        <Box
                        sx={{
                            width: "100%",
                            py: 4, 
                            px: isSmallScreen ? 0 : 2,
                        }}
                        >
                            <Grid2 container spacing={4}>
                                {projects.map((project, index) => (
                                    <Grid2 size={{xs: 12, md: 6}} key={project.id} sx={{
                                        mt: index === 0 ? 0 : isSmallScreen ? 3 : 0,
                                    }}>
                                        <ProjectCard project={project} />
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Box>
                    )}



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
                    
                    {section.id === "contact" && (
                        <Box sx={{
                            maxWidth: "1150px",
                            width: "100%",
                            margin: "0 auto",
                        }}>
                            <Grid2 container spacing={5}>
                                <Grid2 size={{xs: 12, md: 4}} sx={{ order: { xs: 2, md: 1 } }}>
                                    <ContactCard />
                                </Grid2>

                                <Grid2 size={{xs: 12, md: 8}} sx={{ order: { xs: 1, md: 2 } }}>
                                    <ContactForm />
                                </Grid2>
                            </Grid2>
                        </Box>
                    )}

                    {/*  */}
            </Box>
        ))}
        </>
    )
}

export default MainPage;