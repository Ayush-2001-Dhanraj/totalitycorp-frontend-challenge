import {
  Box,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import { styled } from "@mui/system";

const StyledGridItem = styled(Grid)({
  border: "1px solid black",
});

const StyledListButton = styled(ListItemButton)({
  cursor: "default",
  "&:hover": { backgroundColor: "white" },
});

const contactData = [
  {
    icon: <SchoolIcon fontSize="medium" />,
    text: "Motital Nehru National Institute of Technology, Allahabad - M.Tech (AI & DS)",
  },
  {
    icon: <EmailIcon fontSize="medium" />,
    text: "dhanrajaayush123@gmail.com",
  },
  {
    icon: <HomeIcon fontSize="medium" />,
    text: "Lucknow - Allahabad, India",
  },
  {
    icon: <LocalPhoneIcon fontSize="medium" />,
    text: "+91 6394524439",
  },
];

const skillsData = [
  "Artificial Intelligence",
  "Front-end (Mobile & Web) Development",
  "UI/UX Design",
  "React.js, React Native, Next.js ...",
  "Problem Solving",
];

const socialLinks = [
  {
    icon: <GitHubIcon fontSize="medium" />,
    href: "https://github.com/Ayush-2001-Dhanraj",
  },
  {
    icon: <LinkedInIcon fontSize="medium" />,
    href: "https://www.linkedin.com/in/ayush-d-1759461a1/",
  },
  {
    icon: <TwitterIcon fontSize="medium" />,
    href: "https://twitter.com/_Ayush_Dhanraj",
  },
];

export default function Footer() {
  return (
    <Box>
      <Grid container spacing={0}>
        <StyledGridItem item xs={12} sm={4} md={3} p={2}>
          <Typography variant="h6">Contact Information</Typography>
          <List>
            {contactData.map((data) => {
              return (
                <ListItem disablePadding key={data.text}>
                  <StyledListButton>
                    <ListItemIcon>{data.icon}</ListItemIcon>
                    <ListItemText
                      primary={data.text}
                      sx={{ wordWrap: "break-word" }}
                    />
                  </StyledListButton>
                </ListItem>
              );
            })}
          </List>
        </StyledGridItem>

        <StyledGridItem item xs={12} sm={4} md={3} p={2}>
          <Typography variant="h6">Skills</Typography>
          <List>
            {skillsData.map((data) => {
              return (
                <ListItem disablePadding key={data}>
                  <StyledListButton>
                    <Typography>{data}</Typography>
                  </StyledListButton>
                </ListItem>
              );
            })}
          </List>
        </StyledGridItem>

        <StyledGridItem
          item
          xs={12}
          sm={4}
          md={6}
          p={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box textAlign="center">
            {socialLinks.map((link) => (
              <IconButton
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </StyledGridItem>
      </Grid>
    </Box>
  );
}
