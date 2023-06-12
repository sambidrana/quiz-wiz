import { FormControl, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const FieldText = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value))
  };
  return (
    <Box mt={3} width="100%">
      <FormControl sx={{ width: 250 }} size="sm">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
          inputProps={{
            style: { textAlign: 'center' } 
          }}
        ></TextField>
      </FormControl>
    </Box>
  );
};

export default FieldText;
