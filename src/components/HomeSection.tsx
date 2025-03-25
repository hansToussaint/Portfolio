import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import { Download } from "@mui/icons-material";
import theme from "../styles/Theme";

const HomeSection: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid2
      spacing={3}
      container
      justifyContent="space-between"
      id="home"
      sx={{
        width: "100%",
        mb: isSmallScreen ? "" : "-5rem",
        pb: 0,

        maxWidth: "1150px",
        mx: "auto",
      }}
    >
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          //   width: "100%",
          display: "flex",
          flexDirection: "column",
          order: { xs: 2, md: 1 },
          gap: 2,
          //   justifyContent: "stretch",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: isSmallScreen ? "2.5rem" : "8rem",
              fontWeight: "500",
              color: theme.palette.common.redColor,
            }}
          >
            Hello! I'm
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: isSmallScreen ? "2.5rem" : "8rem",
              fontWeight: "500",
              mr: "-10rem",
            }}
          >
            Hans Toussaint
          </Typography>
        </Box>

        <Typography
          variant="h2"
          sx={{ mt: 2, color: theme.palette.common.secondTextColor }}
        >
          A passionate Front-end Developer dedicated to creating stunning
          digital experiences.
        </Typography>

        <Grid2 sx={{ display: "flex", alignItems: "center", mt: 10 }}>
          <a
            href="/HANS_TOUSSAINT_Front_end_developper.pdf"
            download
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              outline: "none",
            }}
          >
            <Typography variant="body1" sx={{ mr: 1 }}>
              Download Resume
            </Typography>
            <Download
              sx={{
                cursor: "pointer",
                verticalAlign: "middle",
                color: theme.palette.common.redColor,
              }}
            />
          </a>
        </Grid2>
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          maxHeight: isSmallScreen ? "100vh" : "90vh",
          order: { xs: 1, md: 2 },
          margin: isSmallScreen ? 0 : "1rem -7rem 0",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}myPhoto.png`}
          alt="My photo"
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: isSmallScreen ? "contain" : "cover",
            objectPosition: "top",
          }}
        />

        {isSmallScreen && (
          <Box
            sx={{
              position: "absolute",
              bottom: "-20px",
              left: 0,
              right: 0,
              height: "100px",
              background: `linear-gradient(to bottom, transparent, ${theme.palette.common.white} 70%)`,
            }}
          />
        )}
      </Grid2>
    </Grid2>
  );
};

export default HomeSection;
