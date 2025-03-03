import { ChevronRight } from "@mui/icons-material";
import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ReactNode } from "react";
import theme from "../styles/Theme";

interface ServiceProps {
    icon: ReactNode;
    title: string;
    options: string[];
}

const Service: React.FC<ServiceProps> = ({icon, title, options}) => {
    return (
        <Card sx={{width: "100%", p: 2, boxShadow: 3, borderRadius: 2}}>
            <CardContent>
                <Typography variant="h2" sx={{mb:5}}>
                    {icon}
                </Typography>
                <Typography variant="h3" sx={{mb:1}}>
                    {title}
                </Typography>

                <List>
                    {options.map((option, index) => (
                        <ListItem key={index} >
                            <ListItemIcon sx={{ minWidth: "unset", mr: 1,}}>
                                <ChevronRight sx={{color: theme.palette.common.redColor}} />
                            </ListItemIcon>

                            <ListItemText 
                            primary={option} 
                            slotProps={{
                                primary: {
                                  sx: {
                                    fontWeight: 400,
                                    fontSize: "1.4rem",
                                    color: theme.palette.common.secondTextColor,
                                  },
                                },
                              }} 
                              />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default Service;