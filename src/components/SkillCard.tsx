import { Card, CardContent, Typography } from "@mui/material";
import theme from "../styles/Theme";

interface SkillCardProps {
  label: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ label, description }) => {
  return (
    <Card
      sx={{
        border: "none",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: theme.palette.common.white,
        mb: 4,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            backgroundColor: theme.palette.common.redColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          {label}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
