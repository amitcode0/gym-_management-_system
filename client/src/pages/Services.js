import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Services() {
  return (
    <Box sx={{ bgcolor: "secondary.main", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" color="background.paper" gutterBottom>
          Our Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              minWidth: 220,
              maxWidth: 300,
            }}
          >
            <Typography variant="h6" color="primary">
              Personal Training
            </Typography>
            <Typography color="text.secondary">
              One-on-one sessions with certified trainers tailored to your
              goals.
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              minWidth: 220,
              maxWidth: 300,
            }}
          >
            <Typography variant="h6" color="primary">
              Group Classes
            </Typography>
            <Typography color="text.secondary">
              Yoga, HIIT, Zumba, and more—find your favorite way to move!
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              minWidth: 220,
              maxWidth: 300,
            }}
          >
            <Typography variant="h6" color="primary">
              Nutrition Guidance
            </Typography>
            <Typography color="text.secondary">
              Personalized meal plans and nutrition advice from experts.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
