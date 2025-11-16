import { SpinnerCircular } from 'spinners-react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <SpinnerWrapper>
      <SpinnerCircular size={150} />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  margin: 2rem;
`;

export default Loading;
