import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h2" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Have questions or want to join? Reach out to us!
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{ padding: 12, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{ padding: 12, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            style={{ padding: 12, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <Button variant="contained" color="secondary" size="large">
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
