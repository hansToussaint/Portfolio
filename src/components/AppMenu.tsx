import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Avatar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery } from "@mui/material";

import theme from "../styles/Theme";
import { Close, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Logo from "./Logo";

interface AppMenuProps {
    activeSection: string;
}

const AppMenu: React.FC<AppMenuProps> = ({activeSection}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"})
        }
    };

    const menuItems = [
       {label: "Home", id:"home"},
       {label: "Services", id:"services"},
       {label: "Skills", id:"skills"},
       {label: "Projects", id:"projects"},
       {label: "Testimonials", id:"testimonials"},
       {label: "Contact", id:"contact"},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar 
        position="fixed" 
        elevation={scrolled? 4 : 0}
        sx={{
            backgroundColor: theme.palette.common.white,
            boxShadow: scrolled ? "0px 0.1px 0 #cccccc" : "none",
            transition: "background-color 0.3s, box-shadow 0.3s",
            padding: isSmallScreen ? "1.6rem 0" : "1.6rem",
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
                onClick={() =>handleScrollTo("home")} 
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
                            onClick={() => handleScrollTo(item.id)}
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
                            onClick={() => {handleScrollTo(item.id); setDrawerOpen(false); }}
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
                            }}>
                            <ListItemText primary="About Me" sx={{cursor: "pointer",}} />
                        </ListItem>
                        </List>

                        <Box display="flex" justifyContent="center" gap={3} mt={3}>
                            <IconButton component="a" href="https://www.linkedin.com/in/hanstoussaintcode605" target="_blank">
                               <LinkedIn fontSize="large" />
                            </IconButton>

                            <IconButton component="a" href="https://github.com/hansToussaint" target="_blank">
                               <GitHub fontSize="large" />
                            </IconButton>
                            
                            <IconButton component="a" href="https://www.instagram.com/hanst605" target="_blank">
                               <Instagram fontSize="large" />
                            </IconButton>
                        </Box>
                    </Drawer>
                    </>
                )}

            </Toolbar>
        </AppBar>
    );
};

export default AppMenu;