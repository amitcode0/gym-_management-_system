import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Plans() {
  return (
    <Box sx={{ bgcolor: "primary.main", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" color="secondary" gutterBottom>
          Membership Plans
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
              Basic
            </Typography>
            <Typography color="text.secondary">
              Access to gym equipment and group classes.
            </Typography>
            <Typography color="secondary" sx={{ fontWeight: 700, mt: 2 }}>
              $29/mo
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
              Premium
            </Typography>
            <Typography color="text.secondary">
              Includes personal training and nutrition guidance.
            </Typography>
            <Typography color="secondary" sx={{ fontWeight: 700, mt: 2 }}>
              $59/mo
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
              Elite
            </Typography>
            <Typography color="text.secondary">
              All benefits plus unlimited classes and VIP support.
            </Typography>
            <Typography color="secondary" sx={{ fontWeight: 700, mt: 2 }}>
              $99/mo
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
