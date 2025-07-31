import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'

function SwitchLang({ setPigLatinLeft, pigLatinLeft }) {
    const langOneRef = React.useRef(null);
    const langTwoRef = React.useRef(null);

    function changeLang() {
        setPigLatinLeft(!pigLatinLeft);
        if (pigLatinLeft) {
            const langOne = document.querySelector('.lang-one');
            const langTwo = document.querySelector('.lang-two');
            langOneRef.current = langOne;
            langTwoRef.current = langTwo;
            langOne.innerHTML = 'Pig latin';
            langTwo.innerHTML = 'English';
            langTwo.style.color = 'rgb(26, 115, 232)';
            langOne.style.color = '#ff79ab';
        } else {
            const langOne = document.querySelector('.lang-one');
            const langTwo = document.querySelector('.lang-two');
            langOneRef.current = langOne;
            langTwoRef.current = langTwo;
            langOne.innerHTML = 'English';
            langTwo.innerHTML = 'Pig latin';
            langTwo.style.color = '#ff79ab';
            langOne.style.color = 'rgb(26, 115, 232)';
        }
    }
  return (
    <button>
        <FontAwesomeIcon icon={faRepeat} onClick={changeLang} />
    </button>
  )
}

export default SwitchLang
