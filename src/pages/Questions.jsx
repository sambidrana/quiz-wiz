import { Box, Typography, Button  } from "@mui/material";
import useAxios from "../hooks/useAxios";

const Questions = () => {

    let apiURL = `/api.php?amount=10`
    const {response, loading } = useAxios({ url: apiURL })
    console.log(response)

  return (
    <Box>
      <Typography variant="h4" mt={5}>Question 1</Typography>
      <Typography mt={5}>This is the question</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={2}>
        Score: 2 / 6
      </Box>
      
    </Box>
  );
};

export default Questions;
