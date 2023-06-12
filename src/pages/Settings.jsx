import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../components/SelectField";
import TextField from "../components/FieldText";
import useAxios from "../hooks/useAxios";
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate()
  console.log(response);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h5" mt={20} color="red">
        Something went wrong
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  const typeOption = [
    { id: "multiple", name: "Multiple Choices" },
    { id: "boolean", name: "Trus/False" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions")
  };
  return (
    <form onSubmit={handleSubmit}>
        {response.trivia_categories ? (
      <SelectField options={response.trivia_categories} label="Category" />
    ) : (
      <Typography variant="h5" mt={20}>
        Loading categories...
        <CircularProgress />
      </Typography>
    )}
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOption} label="Type" />
      <TextField></TextField>
      <Box mt={3} width="100%">
        <Button variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
