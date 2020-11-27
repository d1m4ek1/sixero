import React from 'react';
import './Nav.jsx';

const burgAtc = () => {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('burger_active')
}

export default burgAtc;