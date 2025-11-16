import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';

type Props = {
  pagesAmount: number;
  page: number;
  onPageChange: (page: number) => void;
};

const PaginationButtons = ({ pagesAmount, page, onPageChange }: Props) => {
  return (
    <StyledPagination
      count={pagesAmount}
      page={page}
      variant='outlined'
      shape='rounded'
      color='secondary'
      size='large'
      onChange={(_event, page) => onPageChange(page)}
    />
  );
};

const StyledPagination = styled(Pagination)`
  margin-top: 1rem;
`;

export default PaginationButtons;
