import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Img } from '../common';
import Box from '@mui/material/Box';
import { useAtom } from 'jotai';
import { modalAtom } from '../../atoms/modalAtom';
import StarIcon from '@mui/icons-material/Star';

// TODO infer props!
type Props = {
  Plot: string;
  Poster: string;
  Title: string;
  imdbRating: string;
};

const ModalBody = ({ Plot, Poster, Title, imdbRating }: Props) => {
  const [, setModalOpen] = useAtom(modalAtom);

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
          <Typography></Typography>
        </Box>

        <Button color='success' onClick={() => setModalOpen(false)}>
          Add to favourites
        </Button>
      </Box>
    </>
  );
};

export default ModalBody;
