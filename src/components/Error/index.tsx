import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Typography from '@mui/material/Typography';

const Error = () => {
  return (
    <Typography>
      Oops! <SentimentVeryDissatisfiedIcon /> Looks like we cannot find the
      movie you are looking for!
      <br></br>
      Please try to reset your filters!
    </Typography>
  );
};

export default Error;
