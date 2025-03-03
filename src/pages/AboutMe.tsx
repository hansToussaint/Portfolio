import { Box, Grid2, useMediaQuery } from "@mui/material";
import theme from "../styles/Theme";
import MotivationTextCard from "../components/MotivationTextCard";
import ContactCard from "../components/ContactCard";
import ProfileAboutMe from "../components/ProfileAboutMe";
import AppMenu from "../components/AppMenu";

const AboutMe: React.FC = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{bgcolor: theme.palette.common.white,}}>
          <AppMenu activeSection="about" />
          <Box
            sx={{
              padding: isSmallScreen ? "1.6rem" : "5rem 0.5rem",
              maxWidth: "1150px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Grid2 container spacing={isSmallScreen ? 3 : 12}>
              <Grid2 size={{ xs: 12, md: 4 }} sx={{ order: { xs: 2, md: 1 } }}>
                <MotivationTextCard />
                <ContactCard />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 8 }} sx={{ order: { xs: 1, md: 2 } }}>
                <ProfileAboutMe />
              </Grid2>
            </Grid2>
          </Box>
        </Box>
    );
};

export default AboutMe;
