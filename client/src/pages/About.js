import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function About() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f6fa 60%, #e94560 100%)",
        py: 8,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" color="primary" gutterBottom align="center">
          About akgym
        </Typography>
        <Typography color="text.secondary" align="center" sx={{ mb: 4 }}>
          akgym is more than just a gym—it's a community dedicated to helping
          you become your best self. We believe fitness is a journey, and we're
          here to support you every step of the way.
        </Typography>
        {/* Mission, Values, Story as Cards in a Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "rgba(26,26,46,0.95)",
                color: "#fff",
                borderBottom: "4px solid #E94560",
              }}
            >
              <CardContent>
                <FitnessCenterIcon
                  sx={{ fontSize: 48, mb: 1, color: "#E94560" }}
                />
                <Typography variant="h5" sx={{ color: "#E94560" }} gutterBottom>
                  Our Mission
                </Typography>
                <Typography sx={{ color: "#fff", opacity: 0.85 }}>
                  To empower individuals of all backgrounds to achieve their
                  fitness goals through expert guidance, modern facilities, and
                  a supportive environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "rgba(233,69,96,0.95)",
                color: "#fff",
                borderBottom: "4px solid #0F3460",
              }}
            >
              <CardContent>
                <GroupsIcon sx={{ fontSize: 48, mb: 1, color: "#fff" }} />
                <Typography variant="h5" sx={{ color: "#fff" }} gutterBottom>
                  Our Values
                </Typography>
                <Typography sx={{ color: "#fff", opacity: 0.85 }}>
                  Community, inclusivity, and continuous improvement. We
                  celebrate every achievement and support each other on the path
                  to wellness.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "rgba(15,52,96,0.95)",
                color: "#fff",
                borderBottom: "4px solid #E94560",
              }}
            >
              <CardContent>
                <EmojiEventsIcon
                  sx={{ fontSize: 48, mb: 1, color: "#E94560" }}
                />
                <Typography variant="h5" sx={{ color: "#E94560" }} gutterBottom>
                  Our Story
                </Typography>
                <Typography sx={{ color: "#fff", opacity: 0.85 }}>
                  Founded in 2020, akgym started as a small group of fitness
                  enthusiasts. Today, we are proud to serve hundreds of members
                  with top-tier equipment, classes, and personal training.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Why Choose Us */}
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.95)",
            borderRadius: 3,
            p: 4,
            boxShadow: 2,
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom align="center">
            Why Choose akgym?
          </Typography>
          <Typography color="text.secondary" align="center" sx={{ mb: 2 }}>
            - Certified and passionate trainers
            <br />
            - Wide range of group classes
            <br />
            - Modern, clean, and safe facilities
            <br />
            - Personalized nutrition and fitness plans
            <br />
            - Friendly, welcoming community
            <br />- Flexible membership options
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
