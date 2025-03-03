import { Box, Typography } from "@mui/material";
import theme from "../styles/Theme";

const ProfileAboutMe: React.FC = () => {
  return (
    <Box>
      <Box>
        <img
          src={`${import.meta.env.BASE_URL}web-developer.jpg`}
          alt="Profile"
          loading="lazy"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box sx={{
         mt: 3, 
         maxWidth: "800px", 
         mx: "auto", 
         textAlign: 
         "left" 
         }}>
        {/* Section "About Me" */}
        <Typography variant="h1" gutterBottom mb={2}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ textIndent: "2em" }} mb={2}>
          I am a dedicated developer with a rich and diverse background that spans design, programming, and project management. My journey in technology is fueled by passion and a constant desire to innovate.
        </Typography>
        <Typography variant="body1" mb={2}>
          Over the years, I have honed my skills through a variety of projects, from working with dynamic startups to collaborating with established companies. This experience has endowed me with a deep understanding of both creative design and technical implementation.
        </Typography>
        <Typography variant="body1" mb={2}>
          I thrive on challenges and am continually exploring new technologies and methodologies to elevate my work. Whether it’s crafting a user-friendly interface or developing a complex application, I combine precision with creativity to deliver solutions that are as functional as they are beautiful.
        </Typography>
        <Typography variant="body1" mb={2}>
          I believe that technology has the power to transform ideas into reality, and I am dedicated to making that transformation seamless and impactful for every client.
        </Typography>

        {/* Section "My Education" */}
        <Typography variant="h1" gutterBottom mb={2}>
          My Education
        </Typography>
        <Box sx={{ borderLeft: `3px solid ${theme.palette.common.redColor}`, pl: 3, mb: 4, ml: 5.6 }}>
         <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Jan 2022 - Sept 2022</Typography>
            <Typography>Web Development</Typography>
            <Typography color="inherit" fontWeight={400}>Online Bootcamp</Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Sept 2020 - June 2024</Typography>
            <Typography>Bachelor in Chemistry, <i>Mendeleiev University</i></Typography>
            <Typography color="inherit" fontWeight={400}>Moscow, Russia</Typography>
          </Box>

          {/* <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Sept 2019 - June 2020</Typography>
            <Typography>Russian Language, <i>MIGAIIK</i></Typography>
            <Typography color="inherit" fontWeight={400}>Moscow, Russia</Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Sept 2011 - June 2018</Typography>
            <Typography>High School, <i>College Saint Martin de Tours</i></Typography>
            <Typography color="inherit" fontWeight={400}>Port-au-Prince, Haiti</Typography>
          </Box> */}

        </Box>

        {/* Section "Why Choose Me" */}
        <Typography variant="h1" fontWeight={500} gutterBottom mb={2}>
          Why Choose Me?
        </Typography>
        <Typography variant="body1" sx={{ textIndent: "2em" }} mb={2}>
          I bring a unique blend of creativity, technical expertise, and an uncompromising work ethic to every project I undertake. My approach combines innovative thinking with solid technical foundations, ensuring that every solution is not only visually engaging but also robust and efficient.
        </Typography>
        <Typography variant="body1" mb={2}>
          I have a proven track record of delivering projects that exceed expectations by paying close attention to every detail—from initial concept to final execution. I continuously update my skill set with the latest industry trends and best practices, allowing me to offer cutting-edge solutions that are tailored to your specific needs.
        </Typography>
        <Typography variant="body1" mb={2}>
          My commitment to clear communication and collaborative problem-solving means that I work closely with clients throughout the process, ensuring that each project reflects their vision while also pushing the boundaries of what’s possible.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileAboutMe;
