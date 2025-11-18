import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Loading = () => {
  return (
    <SpinnerWrapper>
      <CircularProgress size='3rem' color='primary' />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  margin: 2rem;
`;

export default Loading;
