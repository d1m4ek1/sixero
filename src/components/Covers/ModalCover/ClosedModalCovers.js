import Reat from 'react';

const ClosedModalCoverJS = () => {
    let one = document.querySelector('.modal_cover');
    one.classList.add('none');
    let modalMain = document.querySelector('.modal_main');
    modalMain.innerHTML = "";

}

export default ClosedModalCoverJS;