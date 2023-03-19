import React, { useState } from 'react';
import axios from 'axios';

interface Libro {
  id: number;
  titolo: string;
  autore: string;
  genere: string;
  anno: number;
  prezzo: number;
  copertina: string;
}

export const GetLibri = () => {
  const [aperto, setAperto] = useState(false);
  const [libri, setLibri] = useState<Libro[]>([]);
  const handleClick = async () => {
    try {
      !aperto;
      const response = await axios.get('/trovalibri', {
        params: {
          autore: '',
          genere: '',
          anno: 0,
          prezzo: 0,
          copertina: '',
        },
      });
      if (!aperto) {
        setLibri(response.data);
      } else {
        setLibri([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button style={{ borderRadius: '8px', backgroundColor: 'lightblue', fontWeight: 'bold' }} onClick={handleClick}>
        Trova Libri
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {' '}
        {libri.map(libro => (
          <div
            style={{
              border: '2px solid black',
              width: '300px',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <div>
              {' '}
              <p>
                <strong>Titolo:</strong> {libro.titolo}
              </p>{' '}
              <p>
                <strong>Autore:</strong> {libro.autore}
              </p>{' '}
              <p>
                <strong>Genere:</strong> {libro.genere}
              </p>{' '}
              <p>
                <strong>Anno:</strong> {libro.anno}
              </p>{' '}
              <p>
                <strong>Prezzo:</strong> {libro.prezzo} €
              </p>{' '}
            </div>{' '}
            <div
              style={{
                height: '500px',
                backgroundImage: `url(${libro.copertina})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>{' '}
          </div>
        ))}{' '}
      </div>
    </div>
  );
};
