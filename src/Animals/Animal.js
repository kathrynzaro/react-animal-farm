import React from 'react';
// import { animals } from '../data';
import './Animal.css';

export default function Animal({ name, type, says }) {
  return (
    <div className='animal'>
      <img src={`/images/${type}.svg`} />
      <p className='name'>{name}</p>
      <p>{says}</p>
    </div>
  );
}