import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  Chip,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Stack,
  Fab,
  useScrollTrigger,
  Fade,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  LocationOn,
  Code,
  Storage,
  Cloud,
  PhoneIphone,
  KeyboardArrowUp,
  Download,
  Work,
  Person,
  School,
} from "@mui/icons-material";

// Create dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      background: "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      marginBottom: "0.75rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 25px rgba(144, 202, 249, 0.3)",
          },
        },
      },
    },
  },
});

// Scroll to top component
function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={trigger}>
      <Fab
        onClick={handleClick}
        color="primary"
        size="small"
        aria-label="scroll back to top"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Fade>
  );
}

// Header component
function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(26, 26, 26, 0.95)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar>
        <Avatar
          src="/portfolio/SHicon_32x32.ico"
          alt="SH Logo"
          sx={{ width: 36, height: 36, mr: 1 }}
        />
        <Stack direction="row" spacing={1}>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#skills">
            Skills
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#experience">
            Experience
          </Button>
          <Button color="inherit" href="#education">
            Education
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

// Hero section
function HeroSection() {
  function downloadResume() {
    const tempLink = document.createElement("a");
    tempLink.href = "/portfolio/Profile.pdf";
    tempLink.download = "shaun-hamilton-resume.pdf";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h1" component="h1" gutterBottom>
              Shaun Hamilton
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              Software Developer at freeCodeCamp
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Mechanical Engineer working as a Software Developer with 5+ years
              at freeCodeCamp. Keen interest in computer science, Full-Stack Web
              Development, and expertise in Rust, JavaScript, and TypeScript.
              Experience in curriculum development, instructional design, and
              open-source project leadership.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                sx={{
                  background:
                    "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #64b5f6 30%, #f06292 90%)",
                  },
                }}
                onClick={downloadResume}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
                sx={{ borderColor: "#90caf9", color: "#90caf9" }}
              >
                Contact Me
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                sx={{
                  width: 300,
                  height: 300,
                  border: "4px solid",
                  borderColor: "primary.main",
                  background:
                    "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
                }}
              >
                <Person sx={{ fontSize: 150 }} />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// About section
function AboutSection() {
  return (
    <Container maxWidth="lg" id="about" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom color="primary">
              Professional Background
            </Typography>
            <Typography paragraph>
              Mechanical Engineer turned Software Developer with 5+ years of
              experience at freeCodeCamp. I oversee curriculum development and
              instructional design, manage GitHub organization repositories, and
              develop new features and services. My work spans across full-stack
              web development, quality assurance of pull requests, and community
              moderation.
            </Typography>
            <Typography paragraph>
              With experience in Python, Rust, JavaScript, TypeScript, and
              MATLAB, I'm passionate about creating educational content and
              contributing to open-source projects. I have experience in 3D
              printing, prosthetic design, and mechanical engineering, bringing
              a unique perspective to software development.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom color="primary">
              Personal Info
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Email color="primary" />
                </ListItemIcon>
                <ListItemText primary="shauhami020@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn color="primary" />
                </ListItemIcon>
                <ListItemText primary="Howick, KwaZulu-Natal, South Africa" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHub color="primary" />
                </ListItemIcon>
                <ListItemText primary="github.com/ShaunSHamilton" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

// Skills section
function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code />,
      skills: [
        "Rust",
        "JavaScript",
        "TypeScript",
        "Python",
        "MATLAB",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Tools & Platforms",
      icon: <Storage />,
      skills: [
        "Git & GitHub",
        "Azure",
        "Cloudflare",
        "VS Code",
        "SolidWorks",
        "3D Printing",
        "MongoDB",
        "npm/bun/pnpm",
        "Webpack/Vite/Rollup",
      ],
    },
    {
      category: "Engineering & Design",
      icon: <Cloud />,
      skills: [
        "Mechanical Engineering",
        "CAD",
        "Prosthetic Design",
        "Project Management",
        "Technical Documentation",
        "Quality Assurance",
      ],
    },
    {
      category: "Education & Community",
      icon: <PhoneIphone />,
      skills: [
        "Curriculum Development",
        "Instructional Design",
        "Community Moderation",
        "Mentoring",
        "Technical Writing",
        "Code Review",
      ],
    },
  ];

  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Skills & Technologies
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skillGroup, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {skillGroup.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {skillGroup.category}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        variant="outlined"
                        size="small"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// Projects section
function ProjectsSection() {
  const projects = [
    {
      title: "Prisma Rust Schema",
      description:
        "A Rust proc macro to generate Rust code from Prisma schema files. Provides RAII-style type generation with custom derive attributes, field renaming, and type overrides for seamless database integration.",
      technologies: ["Rust", "Prisma", "Proc Macros", "Serde"],
      github: "https://github.com/ShaunSHamilton/prisma-rust-schema",
    },
    {
      title: "freeCodeCamp Exam Environment",
      description:
        "Cross-platform desktop application built with Tauri for secure exam administration. Features proctoring capabilities, database integration with Prisma, and comprehensive testing environment for educational assessments.",
      technologies: ["TypeScript", "Rust", "Tauri", "Desktop App"],
      github: "https://github.com/freeCodeCamp/exam-env",
    },
    {
      title: "freeCodeCamp Exam Creator",
      description:
        "Full-stack web application for creating and managing educational exams. Features multiple choice and dialogue question types, tag-based question organization, and configurable exam generation with real-time collaboration.",
      technologies: ["TypeScript", "JavaScript", "Rust", "React", "Axum"],
      github: "https://github.com/freeCodeCamp/exam-creator",
    },
    {
      title: "CMP - Struct Comparison Macro",
      description:
        "Rust crate providing a powerful macro for comparing fields in structs, particularly useful for testing. Features detailed diff output, serde integration, and selective field comparison for comprehensive test assertions.",
      technologies: ["Rust", "Macros", "Testing", "Serde", "Debug Tools"],
      github: "https://github.com/ShaunSHamilton/cmp",
    },
    {
      title: "freeCodeCampOS",
      description:
        "Test repository and runtime environment for external freeCodeCamp courses. Supports course content written in Markdown with integrated lesson/project tests running on Node.js server with VS Code extension integration.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Rust",
        "CSS",
        "Markdown",
      ],
      github: "https://github.com/freeCodeCamp/freeCodeCampOS",
    },
    {
      title: "Solana Curriculum",
      description:
        "Comprehensive blockchain development curriculum for learning Solana. Features hands-on projects including smart contracts, NFT minting, Anchor framework, client-side dApp development, and DeFi applications.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "Rust",
        "Solana",
        "Anchor",
        "Blockchain",
      ],
      github: "https://github.com/freeCodeCamp/solana-curriculum",
    },
    {
      title: "MongoDB Drop Utility",
      description:
        "Rust RAII-style guard for MongoDB databases using experimental AsyncDrop trait. Automatically rolls back database changes within async scope using change streams - perfect for testing environments.",
      technologies: ["Rust", "MongoDB", "AsyncDrop", "Testing", "Database"],
      github: "https://github.com/ShaunSHamilton/mongo_drop",
    },
    {
      title: "Babeliser",
      description:
        "TypeScript library for parsing JavaScript code using Babel parser. Provides convenient methods for extracting arrow functions, expressions, declarations, and imports - ideal for code analysis and testing.",
      technologies: [
        "TypeScript",
        "Babel",
        "JavaScript Parsing",
        "Testing",
        "AST",
      ],
      github: "https://github.com/ShaunSHamilton/babeliser",
    },
  ];

  return (
    <Container maxWidth="lg" id="projects" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mb: 2 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                  >
                    Code
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// Experience section
function ExperienceSection() {
  const experiences = [
    {
      title: "Fullstack Software Developer",
      company: "freeCodeCamp",
      period: "May 2021 - Present (4+ years)",
      description:
        "Overseeing curriculum development and instructional design. Managing freeCodeCamp GitHub organization repositories, participating on issues, and quality assuring pull requests. Developing new features and services for the educational platform.",
      skills: [
        "Curriculum Development",
        "GitHub Management",
        "Quality Assurance",
        "JavaScript",
        "Node.js",
        "React",
      ],
    },
    {
      title: "Contributor & Moderator",
      company: "freeCodeCamp",
      period: "November 2019 - Present (5+ years)",
      description:
        "Moderate GitHub issues and pull-requests, and forums for freeCodeCamp.org. Assist with debugging, submitting pull-requests for issues, and dealing with triage. Ensure all posts meet organization guidelines and assist community members with programming questions.",
      skills: [
        "Community Moderation",
        "Debugging",
        "Code Review",
        "Forum Management",
        "Mentoring",
      ],
    },
    {
      title: "AI Trainer",
      company: "Pareto.AI",
      period: "March 2024 - May 2024 (3 months)",
      description:
        "Annotated an AI Assistant's code suggestions for TypeScript and Rust projects, contributing to machine learning model improvement and code quality standards.",
      skills: [
        "AI Training",
        "TypeScript",
        "Rust",
        "Code Annotation",
        "Quality Assurance",
      ],
    },
    {
      title: "Student Ambassador",
      company: "MathWorks",
      period: "September 2019 - January 2021 (1 year 5 months)",
      description:
        "First Student Ambassador for MathWorks at University of Glasgow. Promoted MathWorks software, educated students and staff. Created presentations, organized events, and managed community groups for MATLAB and Simulink education.",
      skills: [
        "MATLAB",
        "Simulink",
        "Presentations",
        "Event Management",
        "Community Building",
      ],
    },
  ];

  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Work Experience
        </Typography>
        <Box sx={{ mt: 4 }}>
          {experiences.map((exp, index) => (
            <Paper key={index} sx={{ p: 3, mb: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Work color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">{exp.title}</Typography>
                  </Box>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.period}
                  </Typography>
                  <Typography paragraph>{exp.description}</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {exp.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Education section
function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering - BE",
      field: "Mechanical Engineering",
      school: "University of Glasgow",
      period: "2018 - 2021",
      description:
        "Comprehensive mechanical engineering program with focus on design, analysis, and problem-solving.",
    },
    {
      degree: "Foundation Certificate in Engineering",
      field: "Engineering",
      school: "Glasgow International College",
      period: "2018",
      description:
        "Preparatory engineering program providing foundation knowledge for university studies.",
    },
    {
      degree: "International Baccalaureate Diploma Programme (IBDP)",
      field: "Engineering Focus",
      school: "Waterford Kamhlaba United World College",
      period: "2015 - 2016",
      description:
        "International program with engineering concentration, promoting global citizenship and critical thinking.",
    },
  ];

  return (
    <Box id="education" sx={{ py: 8, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Education
        </Typography>
        <Box sx={{ mt: 4 }}>
          {education.map((edu, index) => (
            <Paper key={index} sx={{ p: 3, mb: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <School color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">{edu.degree}</Typography>
                  </Box>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {edu.school}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {edu.field} • {edu.period}
                  </Typography>
                  <Typography paragraph>{edu.description}</Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Contact section
function ContactSection() {
  return (
    <Container maxWidth="lg" id="contact" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Get In Touch
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom align="center">
              Let's work together on your next project!
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 3 }}
            >
              <IconButton
                component={Link}
                href="https://github.com/ShaunSHamilton"
                target="_blank"
                color="primary"
                size="large"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/shaun-hamilton-411636114/"
                target="_blank"
                color="primary"
                size="large"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component={Link}
                href="mailto:shauhami020@gmail.com"
                color="primary"
                size="large"
              >
                <Email />
              </IconButton>
            </Stack>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                href="mailto:shauhami020@gmail.com"
                sx={{
                  background:
                    "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #64b5f6 30%, #f06292 90%)",
                  },
                }}
              >
                Send Email
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

// Footer component
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2025 Shaun Hamilton. Built with React, TypeScript, and MUI.
        </Typography>
      </Container>
    </Box>
  );
}

// Main App component
export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1, pt: "64px" }}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </Box>
        <Footer />
        <ScrollTop />
      </Box>
    </ThemeProvider>
  );
}
