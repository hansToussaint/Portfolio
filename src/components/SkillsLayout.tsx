import { Box, Grid2, useMediaQuery } from "@mui/material";
import SkillCard from "./SkillCard";
import theme from "../styles/Theme";

// Exemple de données de compétences
const skillsData = [
  { 
    label: "Communication", 
    description: "Effective communication skills to convey ideas and collaborate with teams." 
  },
  { 
    label: "Problem Solving", 
    description: "Strong analytical skills to identify issues and devise effective solutions." 
  },
  { 
    label: "Leadership", 
    description: "Inspires and guides teams towards achieving common objectives." 
  },
  { 
    label: "Collaboration", 
    description: "Works well in team environments to foster creativity and synergy." 
  },
];

const SkillsLayout = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Box sx={{ maxWidth: "1150px", mx: "auto", }}>
        {skillsData.map((skill, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <SkillCard label={skill.label} description={skill.description} />
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: "1150px", mx: "auto" }}>
      {skillsData.map((skill, index) => (
        <Grid2 container key={index} sx={{ mb: 4 }} alignItems="center">
          {index % 2 === 0 ? (
            <>
              
              <Grid2 size={{xs:6}}>
                <SkillCard label={skill.label} description={skill.description} />
              </Grid2>
              
              <Grid2 size={{xs:6}} />
            </>
          ) : (
            <>
              
              <Grid2 size={{xs:6}} />
              
              <Grid2 size={{xs:6}}>
                <SkillCard label={skill.label} description={skill.description} />
              </Grid2>
            </>
          )}
        </Grid2>
      ))}
    </Box>
  );
};

export default SkillsLayout;
