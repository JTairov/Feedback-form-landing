import './App.css';
import MyForm from './UI/MyForm';
import bannerImg from './img/banner-img.png'
import { useEffect, useState } from 'react';
import Mybutton from './UI/button/Mybutton';
import knowledgeIcon from './img/knowledge-icon.svg'
import tipsIcon from './img/tips-icon.svg'
import questionIcon from './img/question-icon.svg'
import AVSLogo from './img/avs-logo.svg'


function App() {
  const [formIsFilled, setFormIsFilled] = useState(false)
  
  return (
    <div className="App">
      <a className='AVS-logo' alt='logo'>
        <img src={AVSLogo}></img>
      </a>
      <div className='main'>
        <h1 className='main__heading'>AVS Video ReMaker <span className='giveaway'>Giveaway</span></h1>
      </div>
      {
        !formIsFilled ?
        <div className='form'>
          <MyForm
            heading='Get started for free!'
            formText='Please, fill in the form and get a free license key for your PC'
            setFormIsFilled={setFormIsFilled} 
            formIsFilled={formIsFilled}
          />
        </div> :
        <div className='downloadContainer'>
          <div className='downloadBlock'>
            <h2 className='downloadBlock__heading'>Thank you!</h2>
            <p className='downloadBlock__text'>Download the full version of AVS Video ReMaker 6.7.1.262</p>
            <Mybutton>
              Download the full version
            </Mybutton>
            <span className='divider'></span>
            <h3 className='h3-heading'>
              Helpful resources
            </h3>
            <ul className='links'>
              <li className='links__item'>
                <img className='links__img' src={knowledgeIcon}></img>
                <a className='links__text' alt='icon'><span>Knowledge centre</span></a>
              </li>
              <li className='links__item'>
                <img className='links__img' src={tipsIcon}></img>
                <a className='links__text' alt='icon'><span>Tips & tricks</span></a>
              </li>
              <li className='links__item'>
                <img className='links__img' src={questionIcon}></img>
                <a className='links__text' alt='icon'>Got a question or an idea? <span>Contact us</span></a>
              </li>
            </ul>
          </div>
        </div>
      }
      <img className='main__img' src={bannerImg}/>
      
      <div className='banner'>
      </div>
    </div>
  );
}

export default App;
