import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import theme from "../styles/Theme";

const SocialLinks: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" gap={3} mt={3}>
           <IconButton 
           component="a" 
           href="https://www.linkedin.com/in/hanstoussaintcode605" 
           target="_blank" 
           sx={{
            color: theme.palette.common.black
           }}
            >
               <LinkedIn fontSize="large" />
           </IconButton>

           <IconButton 
           component="a" 
           href="https://github.com/hansToussaint" 
           target="_blank"
           sx={{
            color: theme.palette.common.black
           }}
           >
               <GitHub fontSize="large" />
           </IconButton>
                            
           <IconButton 
           component="a" 
           href="https://www.instagram.com/hanst605" 
           target="_blank"
           sx={{
            color: theme.palette.common.black
           }}
           >
               <Instagram fontSize="large" />
           </IconButton>
       </Box>
    )
} 

export default SocialLinks;