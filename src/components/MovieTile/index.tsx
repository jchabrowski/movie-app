import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

export type MovieProps = {
  Title: string;
  Year: number;
  Poster: string;
  Type: string;
};

const MovieTile = ({ Title, Poster, Year, Type }: MovieProps) => {
  return (
    <StyledMovieBox>
      <PosterWrapper>
        {Poster && <Img src={Poster} alt={Title} loading='lazy' />}
      </PosterWrapper>

      <InformationWrapper>
        <TopRowWrapper>
          <h2>
            {Title}
            <StyledYear>{Year}</StyledYear>
          </h2>

          <FaRegHeart />
        </TopRowWrapper>

        <RatingWrapper>
          <p>{Type}</p>

          {/* <div>
            <FaStar /> {imdbRating}
          </div> */}
        </RatingWrapper>
      </InformationWrapper>
    </StyledMovieBox>
  );
};

const StyledMovieBox = styled.div`
  display: flex;
  margin: 1rem 0;
  border: 1px solid gray;
  border-radius: 0.5rem;
  width: 34rem;
`;

const TopRowWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  > h2,
  p {
    margin: 0;
  }

  :last-child {
    fill: #e63946;
    margin-left: auto;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  font-size: 0.9rem;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

const PosterWrapper = styled.div`
  overflow: hidden;
  min-width: 10rem;
`;

const StyledYear = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  margin-left: 0.2rem;
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

export default MovieTile;
