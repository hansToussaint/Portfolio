import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import AppMenu from "../components/AppMenu";
import theme from "../styles/Theme";

const sections = [
    {id: "home", label: "Home", bg: theme.palette.common.white},
    {id: "services", label: "Services", bg: theme.palette.common.secondBgColor},
    {id: "skills", label: "Skills", bg: theme.palette.common.white},
    {id: "projects", label: "Projects", bg: theme.palette.common.secondBgColor},
    {id: "contact", label: "Contact", bg: theme.palette.common.white},
]

const MainPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

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
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                backgroundColor: section.bg,

                // display: "grid",
                // placeItems: "center",
                // width: "100%",
                // minHeight: "100vh",
                // padding: "0 1rem",
            }}
            >
                <h1>{section.label}</h1>
            </Box>
        ))}
        </>
    )
}

export default MainPage;