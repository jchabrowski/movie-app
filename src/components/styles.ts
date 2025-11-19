import styled from 'styled-components';
import { MAX_MOBILE_WIDTH, MIN_TABLET_WIDTH } from '../enums';

export const MovieBox = styled.div`
  display: flex;
  margin: 1rem 0;
  width: 30rem;
  overflow: hidden;

  @media screen and (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: ${MIN_TABLET_WIDTH}) {
    border: 1px solid gray;
    border-radius: 0.5rem;
  }
`;

export const MediumImg = styled.img`
  width: 10rem;
  height: 100%;
  transition: transform 0.3s ease;

  @media screen and (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
