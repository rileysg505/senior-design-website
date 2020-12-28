import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet the Team!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem

              src='images/Angelou-Lao.jpg'
              text='Angelou Lao'
              label='Team Leader'
              path='https://www.linkedin.com/in/angelou-lao/'
            />
            <CardItem
              src='images/Sabrina-Kalam-1.jpg'
              text='Saliva Catridge Prototpyer'
              label='Sabrina Kalam'
              path='https://www.linkedin.com/in/sabrina-kalam-507913194/'
            />
            <CardItem
              src='images/Phuc-Lam.png'
              text="Phuc Lam"
              label='Saliva Cartridge Manufacturer'
              path=''
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Vincent-Tran.png'
              text='Vincent Tran'
              label='Market Analysis and Remote Research'
              path=''
            />
          <CardItem
              src='images/Megan-Nguyen-1.jpg'
              text="Megan Nguyen"
              label='Marketing and Cartridge Fabrification'
              path='https://www.linkedin.com/in/meganlanvynguyen/'
              />
            <CardItem
              src='images/Riley-Garcia.jpg'
              text='Riley Garcia'
              label='Software Developer'
              path='https://www.linkedin.com/in/riley-garcia-05056a19a/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;