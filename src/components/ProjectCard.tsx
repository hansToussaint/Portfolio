import { useNavigate } from "react-router-dom";
import { ProjectsProps } from "../projects/projects";
import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
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
      <CardActionArea onClick={handleClick}>
        {project.images.length > 0 && (
          <CardMedia
            component="img"
            image={project.images[0]}
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
      <CardContent
        sx={{
          backgroundColor: "transparent",
          pl: 0,
        }}
      >
        <Typography variant="h3">{project.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
