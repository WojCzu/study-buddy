import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  ModalBackground,
  ModalWrapper,
} from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';
import { handleClickOutsideComponent } from 'helpers/handleClickOutsideComponent';
const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');
  const ref = useRef(null);

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    document.addEventListener('click', (e) =>
      handleClickOutsideComponent(e, ref, handleClose)
    );
    return () => {
      modalContainer.removeChild(modalNode);
      document.removeEventListener('click', (e) =>
        handleClickOutsideComponent(e, ref, handleClose)
      );
    };
  }, [modalNode, handleClose]);

  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalWrapper ref={ref}>
        {children}
        <Button onClick={handleClose}>Close</Button>
      </ModalWrapper>
    </ModalBackground>,
    modalNode
  );
};

export default Modal;
