import React from 'react'
import Count from './Count'
import Voice from './Voice'


function Input({ setText, pigLatinLeft }) {
  const [length, setLength] = React.useState(0);

  function translatePigLatin(str) {
    if (!str) return '';
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


  
  function pigLatinToEnglish(str) {
    if (str.endsWith('way')) return str.slice(0, -3); 
    else {
        let newStr = str.slice(0, -2);
        let consonantCluster = '';
        let rest = '';
        let i = newStr.length - 1;

        // Find the consonant cluster at the end
        while (i >= 0 && !"AEIOUaeiou".includes(newStr[i])) {
          consonantCluster = newStr[i] + consonantCluster;
          i--;
        }

        // The rest of the string (before the cluster)
        rest = newStr.slice(0, i + 1);

        // Reconstruct the English word
        let result = consonantCluster + rest;

        // Capitalize if original was capitalized
        if (str[0] === str[0].toUpperCase()) {
          result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
        }

        return result;
    }
  }

  function updateText(e) {
    setLength(e.target.value.length);
    if (e.target.value === "") {
      setText("Translation");
      return;
    } else {
      const array = e.target.value.split(' ');
      for (let i = 0; i < array.length; i++) {
        if (pigLatinLeft) {
          array[i] = translatePigLatin(array[i]);
        } else {
          array[i] = pigLatinToEnglish(array[i]); 
        }
      }
      setText(array.join(' '));
    }
    
  }

  return (
    <div className="box">
        <h2 className="lang-one">English</h2>
        <textarea className="text-block input" onChange={updateText} maxLength="5000"></textarea>
        <div className="button-container">
          <Voice type=".input"></Voice>
          <Count length={length}></Count>
        </div>
    </div>
  )
}
export default Input
