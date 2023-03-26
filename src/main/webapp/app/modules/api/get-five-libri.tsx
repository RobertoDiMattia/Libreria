import React, { useState, useEffect } from 'react';
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

export const GetFiveLibri = () => {
  const [aperto, setAperto] = useState(false);
  const [libri, setLibri] = useState<Libro[]>([]);
  useEffect(() => {
    const fetchLibri = async () => {
      try {
        const response = await axios.get('/trovacinquelibri', { params: { autore: '', genere: '', anno: 0, prezzo: 0, copertina: '' } });
        setLibri(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLibri();
  }, []);

  return (
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
          <a href={libro.copertina}></a>{' '}
        </div>
      ))}{' '}
    </div>
  );
};
