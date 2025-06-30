import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Trainers from "./pages/Trainers";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import theme from "./theme";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState, useEffect, useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(26,26,46,0.85), rgba(233,69,96,0.7)), url('https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
        pt: 10,
      }}
    >
      {/* Hero Section */}
      <Container
        maxWidth="md"
        sx={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 6,
            p: { xs: 3, md: 6 },
            textAlign: "center",
            opacity: 0.97,
            width: "100%",
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Welcome to akgym
          </Typography>
          <Typography variant="h5" color="secondary" gutterBottom>
            Unleash Your Potential
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ mb: 4 }}>
            akgym is your destination for fitness, transformation, and
            community. With top-tier equipment, expert trainers, and a variety
            of classes, we help you reach your goals—whether you're a beginner
            or a pro. Join a vibrant community that motivates and supports you
            every step of the way.
          </Typography>
          <a
            href="/about"
            style={{
              marginTop: 16,
              display: "inline-block",
              fontWeight: 700,
              fontSize: 18,
              background: "#E94560",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Discover More
          </a>
        </Box>
      </Container>
      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Why Choose akgym?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >
          <Box
            sx={{
              minWidth: 220,
              maxWidth: 300,
              textAlign: "center",
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/1A1A2E/dumbbell.png"
              alt="Equipment"
              width={48}
            />
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
              Modern Equipment
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              State-of-the-art machines and free weights for all levels.
            </Typography>
          </Box>
          <Box
            sx={{
              minWidth: 220,
              maxWidth: 300,
              textAlign: "center",
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/1A1A2E/coach.png"
              alt="Trainers"
              width={48}
            />
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
              Expert Trainers
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              Certified professionals to guide and motivate you.
            </Typography>
          </Box>
          <Box
            sx={{
              minWidth: 220,
              maxWidth: 300,
              textAlign: "center",
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/1A1A2E/group-foreground-selected.png"
              alt="Classes"
              width={48}
            />
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
              Diverse Classes
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              Yoga, HIIT, Zumba, and more for every interest.
            </Typography>
          </Box>
          <Box
            sx={{
              minWidth: 220,
              maxWidth: 300,
              textAlign: "center",
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/1A1A2E/meal.png"
              alt="Nutrition"
              width={48}
            />
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
              Nutrition Support
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              Personalized meal plans and expert advice.
            </Typography>
          </Box>
        </Box>
      </Container>
      {/* Testimonials Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" color="secondary" align="center" gutterBottom>
          What Our Members Say
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              minWidth: 220,
              maxWidth: 320,
            }}
          >
            <Typography color="primary" sx={{ fontWeight: 700 }}>
              I love the energy at akgym! The trainers are so motivating and the
              classes are always fun.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              — Priya S.
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              minWidth: 220,
              maxWidth: 320,
            }}
          >
            <Typography color="primary" sx={{ fontWeight: 700 }}>
              The equipment is top-notch and the staff is super friendly. I've
              made real progress here.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              — Alex M.
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              minWidth: 220,
              maxWidth: 320,
            }}
          >
            <Typography color="primary" sx={{ fontWeight: 700 }}>
              Great atmosphere and a real sense of community. Highly recommend
              akgym!
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              — John L.
            </Typography>
          </Box>
        </Box>
      </Container>
      {/* Call to Action Section */}
      <Box sx={{ bgcolor: "secondary.main", py: 8 }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="background.paper" gutterBottom>
            Ready to Start Your Journey?
          </Typography>
          <Typography color="background.paper" sx={{ mb: 3 }}>
            Join akgym today and unlock your full potential with our expert team
            and supportive community.
          </Typography>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              fontWeight: 700,
              fontSize: 18,
              background: "#fff",
              color: "#E94560",
              padding: "12px 32px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.2s",
              border: "2px solid #E94560",
            }}
          >
            Contact Us
          </a>
        </Container>
      </Box>
    </Box>
  );
}

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(26,26,46,0.7)",
        color: "background.paper",
        py: 4,
        mt: 8,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 -2px 16px 0 rgba(0,0,0,0.08)",
      }}
      component="footer"
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          textAlign: { xs: "center", md: "left" },
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* Links and Socials */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 1, md: 0 },
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="/contact"
              style={{
                color: "inherit",
                textDecoration: "none",
                margin: "0 8px",
                fontWeight: 600,
              }}
            >
              Contact
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                margin: "0 4px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <FacebookIcon
                sx={{
                  fontSize: 28,
                  transition: "color 0.2s",
                  "&:hover": { color: "#E94560" },
                }}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                margin: "0 4px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <InstagramIcon
                sx={{
                  fontSize: 28,
                  transition: "color 0.2s",
                  "&:hover": { color: "#E94560" },
                }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                margin: "0 4px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <TwitterIcon
                sx={{
                  fontSize: 28,
                  transition: "color 0.2s",
                  "&:hover": { color: "#E94560" },
                }}
              />
            </a>
          </Stack>
        </Box>
        {/* Copyright */}
        <Box
          sx={{
            width: { xs: "100%", md: "auto" },
            mt: { xs: 1, md: 0 },
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} akgym. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function DynamicFooter() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShow(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY < lastScrollY.current) {
        setShow(true); // Scrolling up
      } else {
        setShow(false); // Scrolling down
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Slide direction="up" in={show} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <Footer />
      </Box>
    </Slide>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Header */}
        <AppBar position="fixed" color="primary" elevation={4}>
          <Toolbar>
            <Typography
              variant="h5"
              sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 2 }}
            >
              akgym
            </Typography>
            <Stack direction="row" spacing={2}>
              <a
                href="/"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  margin: "0 8px",
                  fontWeight: 600,
                }}
              >
                Home
              </a>
              <a
                href="/about"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  margin: "0 8px",
                  fontWeight: 600,
                }}
              >
                About
              </a>
              <a
                href="/services"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  margin: "0 8px",
                  fontWeight: 600,
                }}
              >
                Services
              </a>
              <a
                href="/trainers"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  margin: "0 8px",
                  fontWeight: 600,
                }}
              >
                Trainers
              </a>
              <a
                href="/plans"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  margin: "0 8px",
                  fontWeight: 600,
                }}
              >
                Plans
              </a>
              <a
                href="/contact"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  margin: "0 8px",
                  fontWeight: 600,
                }}
              >
                Contact
              </a>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box sx={{ pt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
      <DynamicFooter />
    </ThemeProvider>
  );
}

export default App;
