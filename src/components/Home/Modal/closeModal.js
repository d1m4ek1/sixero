import React from 'react';
import './ModalWindow.css';

const closeModalJS = () => {
    let modal = document.querySelector('.modal_content');
    modal.classList.add('none')
}

export default closeModalJS;