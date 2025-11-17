import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
const Info = () => {
  return (
    <StyledDiv>
      <SearchIcon />
      <p>Try to type something!</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default Info;
