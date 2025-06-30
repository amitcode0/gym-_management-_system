import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Trainers() {
  return (
    <Box sx={{ bgcolor: "background.default", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" color="primary" gutterBottom>
          Meet Our Trainers
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
            <Typography variant="h6" color="secondary">
              Alex Smith
            </Typography>
            <Typography color="text.secondary">
              Strength & Conditioning
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
            <Typography variant="h6" color="secondary">
              Priya Patel
            </Typography>
            <Typography color="text.secondary">Yoga & Flexibility</Typography>
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
            <Typography variant="h6" color="secondary">
              John Lee
            </Typography>
            <Typography color="text.secondary">HIIT & Cardio</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
