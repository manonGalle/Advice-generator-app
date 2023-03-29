import './Quote.scss';
import dice from '../../assets/images/icon-dice.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Quote() {

  const [advice, setAdvice] = useState('');
  const [adviceID, setAdviceID] = useState ('');

  const refreshAdvice = (event) => {
    event.preventDefault();
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response)
        const advice = response.data.slip.advice;
        const id = response.data.slip.id;
        console.log(advice)
        setAdvice(advice)
        setAdviceID(id)
      });
  }

  /*useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response)
        const advice = response.data.slip.advice;
        const id = response.data.slip.id;
        console.log(advice)
        setAdvice(advice)
        setAdviceID(id)
      });
      //.catch(error) => {
        //console.error("error dans l'appel API")
      //}
  }, []);*/

    return (
      <div className="Quote">
        <h1>ADVICE #{adviceID} </h1>
        <p>"{advice}"</p>
        <p>--- || ---</p>

          <button
            onClick={refreshAdvice}
            className='Quote-circle-dice'
          >
            <img src={dice} alt="dice" className='Quote-dice'></img>
          </button>
        
      </div>
    );
  }
  
  export default Quote;
  