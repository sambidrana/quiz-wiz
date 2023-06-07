import { Box, FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import { useState } from "react";

const SelectField = (props) => {
    const { options, label } = props;
    console.log(options, label)
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
        setValue(e.target.value)
    };
    return (
        <Box mt={3} width="100%">
        <FormControl size="small" fullWidth>
          <InputLabel> {label} </InputLabel>
          <Select value={value} label={label} onChange={handleChange}>
            {options && options.map(({ id, name }) => ( //because im getting null first
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  };

export default SelectField;
