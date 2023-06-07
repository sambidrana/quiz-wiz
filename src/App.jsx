import "./App.css";
import { Container, Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import Result from "./pages/Results";

function App() {
  return (
    <Router>
      <Container maxWidth="sm" >
        <Box textAlign="center" mt={5}>
            <Typography variant="h2" fontWeight="bold"> Quiz Wiz </Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/results" element={<Result />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
