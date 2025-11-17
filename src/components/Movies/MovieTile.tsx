import styled from 'styled-components';
import type { MovieOverviewType } from '../../schemas';
import Button from '@mui/material/Button';

const MovieTile = ({ Title, Poster, Year, Type }: MovieOverviewType) => {
  const showPoster = Poster !== 'N/A';
  const showFallback = Poster === 'N/A';

  return (
    <StyledMovieBox>
      <PosterWrapper>
        {showPoster && <Img src={Poster} alt={Title} loading='lazy' />}
        {showFallback && <GradientDiv />}
      </PosterWrapper>

      <InformationWrapper>
        <TopRowWrapper>
          <h2>
            {Title} <StyledYear>{Year}</StyledYear>
          </h2>
        </TopRowWrapper>

        <RatingWrapper>
          <p>{Type}</p>

          <Button color='secondary'>Details</Button>
        </RatingWrapper>
      </InformationWrapper>
    </StyledMovieBox>
  );
};

const StyledMovieBox = styled.div`
  display: flex;
  margin: 1rem 0;
  width: 30rem;

  @media screen and (max-width: 550px) {
    width: 100%;
    flex-direction: column;
    max-width: 14rem;
  }

  @media screen and (min-width: 551px) {
    border: 1px solid gray;
    border-radius: 0.5rem;
  }
`;

const TopRowWrapper = styled.div`
  display: flex;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
`;

const PosterWrapper = styled.div`
  overflow: hidden;
  min-width: 10rem;

  @media screen and (max-width: 550px) {
    display: flex;
    justify-content: center;
  }
`;

const StyledYear = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const Img = styled.img`
  width: 10rem;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const GradientDiv = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #3a3a3a, #2a2a2a);
`;

export default MovieTile;
