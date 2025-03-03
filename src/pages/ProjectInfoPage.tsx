import { useParams } from "react-router-dom"
import projects from "../projects/projects";
import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import AppMenu from "../components/AppMenu";
import CustomSlider from "../components/CustomSlider";
import StackCard from "../components/StackCard";
import theme from "../styles/Theme";

const ProjectInfoPage: React.FC = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const {projectId} = useParams<{projectId: string}>();
    const project = projects.find(p => p.id === Number(projectId));

    if(!project) {
        return (
            <Box>
                <Typography sx={{textAlign: "center", mt: 4}}>
                    Project not found
                </Typography>
            </Box>
        );
    }

    const slidersItems = project.images.map((img, i) => (
        <Box 
        key={i}
        component="img"
        src={img}
        alt={`${project.title} image ${i + 1}`}
        sx={{
            width: "100%",
            // height: {xs: "250px", md: "500px"},
            objectFit: "cover",
        }}
        />
    ));

    return (
        <>
        <AppMenu />

        <Box sx={{bgcolor: theme.palette.common.white, pb: 3, px: 3,}}>
        <Box 
        sx={{ 
            maxWidth: "1150px", 
            height: "auto",
            mx: "auto",  
            boxShadow: 3,
            background: "none",
            backgroundColor: "transparent",
        }}>
           <CustomSlider 
           items={slidersItems}
           showDots={false}
           arrowSize="large"
           />
        </Box>

        <Box 
        sx={{ 
            maxWidth: "1200px", 
            mx: "auto", 
            mt: 4,
            px: isSmallScreen? 0 : 3,
            // pb: 10,
            position: "relative",
        }}>

            <Grid2 container spacing={2} justifyContent="space-between">
                <Grid2 size={{xs:12, md: 7,}} mb={2}>
                    <Typography variant="h2"fontWeight="bold" mb={2}>
                        {project.title}
                    </Typography>

                    <Typography variant="body1" mb={2}>
                        {project["description-1"]}
                    </Typography>

                    <Typography variant="body1" mb={2}>
                        {project["description-2"]}
                    </Typography>

                    <Typography variant="body1" mb={1}>
                        {project["description-3"]}
                    </Typography>
                </Grid2>

                <Grid2 size={{xs: 12, md: 3}}>
                    <StackCard stack={project.stack} />
                </Grid2>
            </Grid2>            
        </Box>
        </Box>
        </>
    )
}

export default ProjectInfoPage;