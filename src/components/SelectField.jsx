import { Box, FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/actions";


const SelectField = (props) => {
  const { options, label } = props;
  console.log(options, label);
  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value)); //send payload
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value)); //send payload
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value)); //send payload
        break;
        default:
        return;
    }
  };
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel> {label} </InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options &&
            options.map(
              (
                { id, name } //because im getting null first
              ) => (
                <MenuItem value={id} key={id}>
                  {name}
                </MenuItem>
              )
            )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
