import { useEffect, useState } from "react";
import { init, sendForm } from "@emailjs/browser";
import { Box, Button, Grid2, TextField, Typography, useMediaQuery } from "@mui/material";
import theme from "../styles/Theme";
import toast from "react-hot-toast";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        init({
            publicKey: 'MuNSKBla3wuxTfxvX',

            // a tester lorsque l'application sera en ligne
            limitRate: {
                id: formData.email, // Applique la limite par utilisateur
                throttle: 300000, // 1 email par 5 minutes par utilisateur
            },


            ///////////////
            blockHeadless: true, // Bloque les requêtes provenant de navigateurs headless (sans interface graphique)
    //         blockList: {
    //           // Blocage des emails suspendus ou indésirables
    //         list: ['foo@emailjs.com', 'bar@emailjs.com'],
    //           // La variable à surveiller dans vos données utilisateur pour vérifier contre la liste
    //           // Remarque : Assurez-vous que le nom de la variable correspond à celui utilisé dans votre formulaire (ici, 'email' ou 'userEmail')
    //         watchVariable: 'userEmail',
    // },
            ///////////
        });
    }, [formData.email]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        sendForm(
            "service_b7xziqn",
            "template_usoijxq",
            e.currentTarget
        ).then(
            (result) => {
                console.log("Email successfuly sent!", result);

                toast.success("Email successfuly sent! I will answer ASAP :)");

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                  });
            },
            (error) => {
                if (error.status === 429 || error.text === "Too Many Requests") {
                    console.error("You have already sent an email. I will reply shortly.");
                    toast.error("You have already sent an email. I will reply shortly.")
                } else {
                    console.error("Failed to send email: ", error.text);
                    toast.error("Failed to send email. Please Copy my email address and send me the message");
                }
            },
        );
    };

    const commonSlotProps = {
        inputLabel: {
          required: false,
          sx: {
            color: theme.palette.text.primary,
            "&.Mui-focused": { color: theme.palette.text.primary },
          },
        },
      };

      const commonTextFieldSx = {
        "& .MuiInputBase-root": {
          backgroundColor: theme.palette.primary.main,
        },
        "& .MuiInputBase-root.Mui-focused": {
          backgroundColor: theme.palette.primary.main,
        },
      };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h2" mb={3}>
                Looking for help with your project? Send me a message and let's discuss how I can help!
            </Typography>

            <Grid2 container spacing={3}>
                <Grid2 size={{xs: 12, md: 6}} sx={{bgcolor: theme.palette.primary.main}}>
                    <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    slotProps={commonSlotProps}
                    sx={commonTextFieldSx}
                    />
                </Grid2>

                <Grid2 size={{xs: 12, md: 6}} sx={{bgcolor: theme.palette.primary.main}}>
                    <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    slotProps={commonSlotProps}
                    sx={commonTextFieldSx}
                    />
                </Grid2>

                <Grid2 size={{xs: 12, md: 6}} sx={{bgcolor: theme.palette.primary.main}}>
                    <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    slotProps={commonSlotProps}
                    sx={commonTextFieldSx}
                    />
                </Grid2>

                <Grid2 size={{xs: 12, md: 6}} sx={{bgcolor: theme.palette.primary.main}}>
                    <TextField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    fullWidth
                    required
                    slotProps={commonSlotProps}
                    sx={commonTextFieldSx}
                    />
                </Grid2>

                <Grid2 size={{xs: 12}} sx={{bgcolor: theme.palette.primary.main}}>
                    <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    rows={7.8}
                    multiline
                    slotProps={commonSlotProps}
                    sx={{commonTextFieldSx,}}
                    />
                </Grid2>

                <Grid2 size={{xs: 6}}>
                    <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    sx={{
                        fontSize: isSmallScreen? "1rem" : "1.2rem",
                        bgcolor: theme.palette.common.redColor,
                        color: theme.palette.common.white,
                        // "&:hover": {
                        //     backgroundColor: theme.palette.common.secondBgColor,
                        // }
                    }}
                    >
                        Submit message
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default ContactForm;