import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
const Info = () => {
  return (
    <StyledDiv>
      <SearchIcon />
      <Typography>Try to type something!</Typography>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default Info;
