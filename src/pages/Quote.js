/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

import React from 'react';

const Quote = () => {
  const Quotes = [
    {
      id: 1,
      quote: 'Mathematics is not about numbers, equations or algorithms, it is about understanding',
      author: 'William Paul',
    },
    {
      id: 2,
      quote: 'Mathematics is about practice. The more yoyu work, the more you discover',
      author: 'Berry allen',
    },
    {
      id: 3,
      quote: 'Mathematics is the mother language of science. All the disciplines use Mathematics',
      author: 'Andrew Wilson',
    },
    {
      id: 4,
      quote: 'If you could measure the capacity of thinking of the person, use Mathematics',
      author: 'Donard Phill1',
    },
  ];
  const random = Math.floor(Math.random() * 4) + 1;
  return (
    <div>
      {Quotes.map((Quote) => {
        if (Quote.id === random) {
          return (
            <p>
              {Quote.quote}
              --
              {Quote.author}
            </p>
          );
        }
      })}
    </div>
  );
};

export default Quote;
