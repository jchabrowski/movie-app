import styled from 'styled-components';

export const Img = styled.img`
  width: 10rem;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
