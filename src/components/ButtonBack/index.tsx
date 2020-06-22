import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { ButtonGoBack } from './styles';

const ButtonBack: React.FC = () => {
  return (
    <ButtonGoBack
      variant="contained"
      color="primary"
      onClick={() => window.history.back()}
    >
      <BsChevronLeft />
      Go back
    </ButtonGoBack>
  );
};

export default ButtonBack;
