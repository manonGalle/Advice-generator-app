import './Quote.scss';
import dice from '../../../assets/images/icon-dice.svg';
import axios from 'axios';
import { useEffect } from 'react';

function Quote() {

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response)
        const advice = response.data.slip.advice;
        console.log(advice)
      });
      //.catch(error) => {
        //console.error("error dans l'appel API")
      //}
  })

    return (
      <div className="Quote">
        <h1>Advice # COMPOSANT Advice ID goes here </h1>

        <p>"Advice text goes here"</p>
        <p>--- || ---</p>
        <div className='Quote-circle-dice'>
          <img src={dice} alt="dice" className='Quote-dice'></img>
        </div>
      </div>
    );
  }
  
  export default Quote;
  