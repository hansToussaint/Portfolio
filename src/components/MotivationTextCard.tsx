import { Card, CardContent, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import theme from "../styles/Theme";

const MotivationTextCard: React.FC = () => {
    return (
      <Card sx={{ 
        mb: 4, 
        boxShadow: 3, 
        display: "flex", 
        flexDirection: "column", 
        p: 2,
        borderRadius: 0 
        // bgcolor: theme.palette.common.secondBgColor,
      }}>
        <FormatQuote sx={{ 
          fontSize: 80, 
          color: theme.palette.common.redColor, 
          transform: "scaleX(-1)" 
          }} 
        />
        <CardContent>
          <Typography variant="body1" color="inherit" align="center">
          Like in chemistry, every line of code is a reaction: when well-balanced, it transforms ideas into interactive experiences✍🏾
          </Typography>
        </CardContent>
      </Card>
    );
  };

export default MotivationTextCard;
