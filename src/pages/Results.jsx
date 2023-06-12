import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";


const Result = () => {
    const {score} = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleToSettings = () => {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50))
        navigate('/settings')
    }

    return (
       <Box mt={30}>
        <Typography variant="h3" fontWeight="bold" mb={3}>Final Score: {score}</Typography>
        <Button onClick={handleToSettings} variant="outlined"> Back to settings </Button>
       </Box>
    )
}

export default Result;