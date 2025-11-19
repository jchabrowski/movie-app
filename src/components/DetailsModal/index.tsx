import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAtom, useAtomValue } from 'jotai';
import { showModalAtom } from '../../atoms/modalAtom';
import { movieIdAtom } from '../../atoms/queryParamsAtom';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import Loading from '../Loading';
import ModalBody from './ModalBody';
import Error from '../Error';
import { MIN_TABLET_WIDTH } from '../../enums';

const DetailsModal = () => {
  const [open, setModalOpen] = useAtom(showModalAtom);
  const id = useAtomValue(movieIdAtom);

  const { isError, isLoading, movie } = useMovieDetails({ id });

  return (
    <Modal
      open={open}
      //onClose handles click event outside of modal in mui
      onClose={() => setModalOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {isLoading && <Loading />}

        {isError && <Error />}

        {movie && <ModalBody movie={movie} />}
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '5%',
  margin: '1rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  [`@media screen and (min-width: ${MIN_TABLET_WIDTH})`]: {
    margin: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '36rem',
  },
};

export default DetailsModal;
