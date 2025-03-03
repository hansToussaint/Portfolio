import { Card, CardContent, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";
import theme from "../styles/Theme";

const ContactCard: React.FC = () => {

    return (
      <Card sx={{ 
        boxShadow: 3, 
        bgcolor: theme.palette.primary.main, 
        borderRadius: 0,
        padding: "2rem", 
        }}>
        <CardContent>
          <Card sx={{
            // minWidth: "fit-content",
            overflow: "auto",
            border: "none",
            boxShadow: 0, 
            mb: 4, 
            bgcolor: theme.palette.common.secondBgColor, 
            borderRadius: 0 
            }}>
            <CardContent>
              <Typography variant="body1" fontWeight="bold" color="inherit" mb={1}>
                Phone:
              </Typography>
              <Typography variant="body1">
                +1 438 527 4103
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            // minWidth: "fit-content",
            overflow: "auto",
            border: "none",
            boxShadow: 0, 
            mb: 4, 
            bgcolor: theme.palette.common.secondBgColor, 
            borderRadius: 0 
            }}>
            <CardContent>
              <Typography variant="body1" fontWeight="bold" color="inherit" mb={1}>
                Email:
              </Typography>
              <Typography variant="body1">
                hanst605@gmail.com
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            // minWidth: "fit-content",
            overflow: "auto",
            border: "none",
            boxShadow: 0, 
            mb: 4, 
            bgcolor: theme.palette.common.secondBgColor, 
            borderRadius: 0 
            }}>
            <CardContent>
              <Typography variant="body1" fontWeight="bold" color="inherit" mb={1}>
                Address:
              </Typography>
              <Typography variant="body1">
                Longueuil, QC, Canada
              </Typography>
            </CardContent>
          </Card>

          <SocialLinks />
        </CardContent>
      </Card>
    );
};

export default ContactCard;
