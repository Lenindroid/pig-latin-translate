import React from 'react'
import Count from './Count'
import Voice from './Voice'


function Input({ setText }) {

  function translatePigLatin(str) {
    let newStr = '';
    let consonantCluster = '';
    let consonantFinished = false;
    if(str[0].toUpperCase() == 'A' || str[0].toUpperCase() == 'E'||str[0].toUpperCase() == 'I'||str[0].toUpperCase() == 'O'||str[0].toUpperCase() == 'U') {
      return str.concat('way');
    } else {
        for(let i = 0; i < str.length; i++) {
          if(str[i].toUpperCase() != 'A' && str[i].toUpperCase() != 'E'&& str[i].toUpperCase() != 'I'&&str[i].toUpperCase() != 'O'&& str[i].toUpperCase() != 'U') {
            if (!consonantFinished) {
              consonantCluster += str[i].toLowerCase();
            } else {
              newStr += str[i];
            }
          } else {
            newStr += str[i];
            consonantFinished = true;
          }
        }
        newStr += consonantCluster; 
        newStr += 'ay'
        if (str[0] === str[0].toUpperCase()) newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
        return newStr;
    }
}
  function updateText(e) {
    if (e.target.value === "") {
      setText("Translation");
      return;
    } else {
      setText(translatePigLatin(e.target.value));
    }
    
  }

  return (
    <div className="box">
        <h2 className="lang-one">English</h2>
        <textarea className="text-block input" onChange={updateText} maxLength="5000"></textarea>
        <div className="button-container">
          <Voice type=".input"></Voice>
          <Count></Count>
        </div>
    </div>
  )
}

export default Input
