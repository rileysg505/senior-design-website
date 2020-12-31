import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function MentorCards() {
  return (
    <div className='cards'>
      <h1>Our Mentors</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem

              src='images/Michelle.png'
              text='Michelle Khine'
              label='Faculty Mentor'
              path=''
            />
            <CardItem
              src='images/Gisela.png'
              text='CADMIM Mentor'
              label='Gisela Lin'
              path=''
            />

            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/David.png'
              text="Industry Mentor"
              label='David Yang'
              path=''
            />

            <CardItem
              src='/images/Julia.png'
              text='Grad Student Mentor'
              label='Julia Zakashansky'
              path=''
            />

            </ul>
          
         
          
          
          
        </div>
      </div>
    </div>
  );
}

export default MentorCards;