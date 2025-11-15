// import { useState } from 'react';

import styled from 'styled-components';
import { FaStar, FaRegHeart } from 'react-icons/fa';

export type MovieProps = {
  name: string;
  year: number;
  poster: string;
  plot: string;
  genre: string;
  imdbRating: string;
};

const MovieTile = ({
  name,
  plot,
  poster,
  year,
  genre,
  imdbRating,
}: MovieProps) => {
  return (
    <StyledMovieBox>
      <PosterWrapper>
        <Poster src={poster} alt={name} loading='lazy' />
      </PosterWrapper>

      <InformationWrapper>
        <TopRowWrapper>
          <h2>{name}</h2>
          <p>{year}</p>

          <FaRegHeart />
        </TopRowWrapper>

        <p>{plot}</p>

        <RatingWrapper>
          <p>Genre: {genre}</p>

          <div>
            <FaStar /> {imdbRating}
          </div>
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
  max-width: 34rem;
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

    :hover {
      cursor: pointer;
    }
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
  padding: 1rem;
`;

const PosterWrapper = styled.div`
  overflow: hidden;
  min-width: 10rem;
`;

const Poster = styled.img`
  width: 10rem;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export default MovieTile;
