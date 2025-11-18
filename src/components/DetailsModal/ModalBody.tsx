import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { useAtom, useSetAtom } from 'jotai';
import { modalAtom } from '../../atoms/modalAtom';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { MAX_MOBILE_WIDTH } from '../../enums';
import { favouritesAtom, type MovieDetails } from '../../atoms/favouritesAtom';

const ModalBody = ({ Plot, Poster, Title, imdbRating, id }: MovieDetails) => {
  const setModalOpen = useSetAtom(modalAtom);
  const [favourites, setFavourites] = useAtom(favouritesAtom);

  const canAddToFavourites = !favourites.find((el) => el.id === id);

  const handleAddToFavs = () => {
    setFavourites((favourites) => [
      ...favourites,
      { Plot, Poster, Title, imdbRating, id },
    ]);

    setModalOpen(false);
  };

  return (
    <>
      <Img src={Poster}></Img>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {Title}
        </Typography>

        <Button onClick={() => setModalOpen(false)}>Close</Button>
      </Box>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        {Plot}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <StarIcon /> {imdbRating}/10
        </Box>

        {canAddToFavourites && (
          <Button color='success' onClick={handleAddToFavs}>
            Add to favourites
          </Button>
        )}
      </Box>
    </>
  );
};

const Img = styled.img`
  width: 20rem;
  height: 100%;
  transition: transform 0.3s ease;

  @media screen and (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 14rem;
  }
`;

export default ModalBody;
