import { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import theme from "../styles/Theme";

interface SkillCardProps {
    label: string;
    percentage: number;
    active?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({label, percentage, active}) => {
    const [fill, setFill] = useState(0);

    useEffect(() => {
        if (active) {
            setFill(0);

            const timer = setTimeout(() => {
                setFill(percentage);
            }, 200);

            return () => clearTimeout(timer);
        }

    }, [percentage, active])

    return (
        <Card sx={{
            overflow: "hidden",
            border: "none",
            boxShadow: 0,
            mb: 4,
            bgcolor: theme.palette.common.secondBgColor,borderRadius: 0,
            padding: "1rem 2rem",
        }}>
            <CardContent>
              <Box sx={{ position: "relative", mb: 2 }}>
                <Typography variant="body1" fontWeight="bold" color="inherit" mb={2}>
                    {label}
                </Typography>

                <Typography 
                    variant="caption" 
                    sx={{
                        fontSize: "1.2rem",
                        position: "absolute",
                        top: 0,
                        left: `${percentage}%`,
                        transform: "translateX(-50%)",
                        color: theme.palette.text.primary,
                    }}
                    >
                        {percentage}%
                </Typography>
              </Box>

                <Box sx={{
                    height: 10,
                    wiidth: "100%",
                    border: "none",
                    position: "relative",
                    backgroundColor: theme.palette.common.white,
                    mx: "auto",
                    mt: 1,
                }}>
                    <Box sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: `${fill}%`,
                        height: "100%",
                        bgcolor: theme.palette.common.secondTextColor,
                        transition: "width 1s ease-in-out",
                    }} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default SkillCard;