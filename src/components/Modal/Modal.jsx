import { StyledModal, Overlay, Img } from './Modal.styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const  Modal =({id, url, closeModal})=> {

 const closeModalByEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
useEffect (()=>{
  window.addEventListener('keydown', closeModalByEscape);

  return ()=>{
    window.removeEventListener('keydown', closeModalByEscape);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
 
    return createPortal(
      <Overlay onClick={closeModalOnBackdrop}>
        <StyledModal>
            <Img src={url} alt={id} />
        </StyledModal>
      </Overlay>,
      modalRoot
    );
  }

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,

};

export default Modal;
