import { Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import theme from "../styles/Theme";
import { ChevronRight } from "@mui/icons-material";
import ColoredIcon from "./ColoredIcon";

interface StackCardProps {
    stack: string[];
}

const StackCard: React.FC<StackCardProps> = ({stack}) => {

    return (
        <Card sx={{
            p: 2, 
            pb: 0, 
            boxShadow: 3, 
            borderRadius: 0, 
            }}>
            <CardContent>
                 <Box sx={{mb:3}}>
                     <ColoredIcon src={`${import.meta.env.BASE_URL}icons/technology.png`} />
                </Box> 


                <Typography variant="h3" sx={{mb:2}}>
                    Tech Stack
                </Typography>

                <List>
                    {stack.map((tech, i) => (
                        <ListItem key={i}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: 1, }}>
                                <ChevronRight sx={{color: theme.palette.common.redColor}} />
                            </ListItemIcon>

                            <ListItemText
                            primary={tech}
                            sx={{
                                fontSize: "1.4rem",
                                color: theme.palette.common.secondTextColor,
                            }}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}

export default StackCard;