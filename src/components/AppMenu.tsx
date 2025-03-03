import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Avatar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery } from "@mui/material";

import theme from "../styles/Theme";
import { Close} from "@mui/icons-material";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

interface AppMenuProps {
    activeSection?: string;
    onSectionClick?: (sectionId: string) => void;
}

const AppMenu: React.FC<AppMenuProps> = ({activeSection, onSectionClick}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const menuItems = [
       {label: "Home", id:"home"},
       {label: "Services", id:"services"},
       {label: "Skills", id:"skills"},
       {label: "Projects", id:"projects"},
       {label: "Testimonials", id:"testimonials"},
       {label: "Contact", id:"contact"},
    ];

    const handleMenuClick = (sectionId: string) => {
        if (location.pathname !== "/") {
          // Si on n'est pas sur la page principale, on navigue vers "/" avec le hash
          navigate(`/#${sectionId}`);
        } else {
          // Sinon, on appelle la fonction de scroll de la page principale
          if (onSectionClick)
          onSectionClick(sectionId);
        }
      };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <>
        <AppBar 
        position="fixed" 
        elevation={scrolled? 4 : 0}
        sx={{
            backgroundColor: theme.palette.common.white,
            boxShadow: scrolled ? "0px 0.1px 0 #cccccc" : "none",
            transition: "background-color 0.3s, box-shadow 0.3s",
            padding: isSmallScreen ? "1.8rem 0" : "1.8rem",
        }}
        >
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
            }}>
                {/* Logo */}
                <Button 
                onClick={() =>handleMenuClick("home")} 
                disableRipple 
                sx={{
                    padding: 0,
                    alignSelf: "flex-start",
                  }}
                >
                   <Logo />
                </Button>

                {/* Menu grand ecran */}
                {!isSmallScreen && (
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: { xs: 2, sm: 3, md: 4, lg: 6 },
                    }}>
                        {menuItems.map(item => (
                            <Typography
                            component="a"
                            variant="h2"
                            key={item.id}
                            sx={{
                                cursor: "pointer",
                                fontWeight: activeSection === item.id ? "bold" : 400,
                            }}
                            onClick={() => handleMenuClick(item.id)}
                            >
                                {item.label}
                            </Typography>
                        ))}
                    </Box>
                )}

                {/* About ME */}
                {!isSmallScreen && (
                    <Typography 
                    variant="h2"
                    sx={{
                        cursor: "pointer", 
                        flexShrink: 0,
                        fontWeight: activeSection === "about" ? "bold" : 400,
                        }}
                    onClick={() => navigate("/about")}
                    >
                        About Me
                    </Typography>
                )}

                {/* Avatar en mode mobile */}
                {isSmallScreen && (
                    <>
                    <IconButton onClick={() => setDrawerOpen(true)} disableRipple
                        sx={{
                            height: "5rem",
                            width: "5rem",
                            position: "relative",
                            padding: 0,
                            margin: 0,
                        }}
                        >
                        <Avatar src="/avatar.jpg" alt="Hans Avatar" sx={{
                             height: "100%",
                             width: "100%",
                             transition: "none",
                        }} />
                    </IconButton>

                    <Drawer 
                    anchor="right" 
                    open={drawerOpen} 
                    onClose={() => setDrawerOpen(false)}
                    sx={{
                        "& .MuiDrawer-paper": {
                            width: "65%",
                            backgroundColor: theme.palette.common.white,
                            color: theme.palette.common.secondTextColor,
                        }
                    }}
                    >
                        <Box sx={{padding: "2rem 3rem"}}>
                            <IconButton onClick={() => setDrawerOpen(false)} disableRipple sx={{
                                height: "4rem",
                                width: "4rem",
                                border: `1px solid ${theme.palette.common.secondBgColor}`
                            }}>
                                <Close sx={{
                                    width: "100%",
                                    height: "100%",
                                }} />
                            </IconButton>
                        </Box>

                        <List sx={{mt: 1}}>
                        {menuItems.map(item => (
                            <ListItem
                            key={item.id}
                            onClick={() => {handleMenuClick(item.id); setDrawerOpen(false); }}
                            sx={{
                                cursor: "pointer",
                                bgcolor: activeSection === item.id ? theme.palette.common.secondBgColor : "none",
                                mb: 0.7,
                                padding: "0.5rem 2rem",
                            }}
                            >
                               <ListItemText primary={item.label}/>
                            </ListItem>
                        ))}

                        <ListItem onClick={() => {navigate("/about"); setDrawerOpen(false); }}
                            sx={{
                                fontSize: "1.6rem",
                                mb: 1,
                                padding: "0.5rem 2rem",
                                bgcolor: activeSection === "about" ? theme.palette.common.secondBgColor : "none",
                            }}>
                            <ListItemText primary="About Me" sx={{cursor: "pointer",}} />
                        </ListItem>
                        </List>

                        <SocialLinks />
                    </Drawer>
                    </>
                )}

            </Toolbar>
        </AppBar>

        <Box sx={{ height: "100px" }} />
     </>
    );
};

export default AppMenu;