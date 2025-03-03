import { useNavigate } from "react-router-dom";
import { ProjectsProps } from "../projects/projects";
import { Card, CardActionArea, CardMedia, Typography, useMediaQuery } from "@mui/material";
import theme from "../styles/Theme";

interface ProjectCardProps {
  project: ProjectsProps;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        boxShadow: "none",
        background: "none",
        m: isSmallScreen ? -2 : 0,
      }}
    >
      <CardActionArea 
      onClick={handleClick} 
      disableRipple
      disableTouchRipple 
      >
        {project.images.length > 0 && (
          <CardMedia
            component="img"
            image={project.images[0]}
            loading="lazy"
            alt={project.title}
            sx={{
              width: "100%",
              boxShadow: 3, 
              height: isSmallScreen ? "100%" : 350,
              objectFit: "cover",
            }}
          />
        )}
      </CardActionArea>

      <CardActionArea
      onClick={handleClick}
      disableRipple
      disableTouchRipple   
        sx={{
          width: "fit-content",
          backgroundColor: "transparent",
          background: "none",
          pl: 0,
          pt: 2,
        }}
      >
        <Typography 
        variant="h3" 
        sx={{
          borderBottom: isSmallScreen ? "none" : `0.5px solid ${theme.palette.common.redColor}`
          }}>
          {project.title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
