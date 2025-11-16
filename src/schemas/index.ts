import { z } from 'zod';

const MovieOverview = z.object({
  Title: z.string(),
  Year: z.string(),
  Poster: z.string(),
  Type: z.string(),
});

export const SearchResponse = z.object({
  Response: z.literal('True'),
  Search: z.array(MovieOverview),
  totalResults: z.string(),
});

const Rating = z.object({
  Source: z.string(),
  Value: z.string(),
});

export const TitleResponse = z.object({
  Title: z.string(),
  Year: z.string(),
  Rated: z.string(),
  Released: z.string(),
  Runtime: z.string(),
  Genre: z.string(),
  Director: z.string().optional(),
  Writer: z.string().optional(),
  Actors: z.string().optional(),
  Plot: z.string(),
  Language: z.string().optional(),
  Country: z.string().optional(),
  Awards: z.string().optional(),
  Poster: z.string(),
  Ratings: z.array(Rating),
  Metascore: z.string(),
  imdbRating: z.string(),
  imdbVotes: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  DVD: z.string().optional(),
  BoxOffice: z.string().optional(),
  Production: z.string().optional(),
  Response: z.literal('True'),
});

export const ErrorResponse = z.object({
  Response: z.literal('False'),
  Error: z.string(),
});

export const OmdbResponse = z.union([
  ErrorResponse,
  SearchResponse,
  TitleResponse,
]);

export type MovieOverviewType = z.infer<typeof MovieOverview>;
export type OmdbResponseType = z.infer<typeof OmdbResponse>;
export type OmdbMovieDetailType = z.infer<typeof TitleResponse>;
