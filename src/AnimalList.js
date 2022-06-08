import React from 'react';
import Animal from './Animals/Animal.js';
import './AnimalList.css';

export default function AnimalList({ animals }) {
  return (
    <div className='animal-list'>
      {
        animals.map((animal, i) => <Animal {...animal} key={animal.name + i}/>)
      }
    </div>
  );
}
