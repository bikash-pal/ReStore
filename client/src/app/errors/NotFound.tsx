import { Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 200 }}>
      <Typography gutterBottom variant="h6">
        What you are looking for is not found
      </Typography>
      <Button fullWidth component={Link} to="/catalog">
        Go Back to shop
      </Button>
    </Container>
  );
}
