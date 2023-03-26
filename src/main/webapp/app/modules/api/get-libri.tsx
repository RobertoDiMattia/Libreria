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
    const response = await axios.get('/trovalibri');
    setLibri(response.data);
    setAperto(prev => !prev);
  };

  return (
    <div>
      <button style={{ borderRadius: '8px', backgroundColor: 'lightblue', fontWeight: 'bold' }} onClick={handleClick}>
        {aperto ? 'Nascondi Libri' : 'Trova Libri'}
      </button>
      {aperto && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {libri.map(libro => (
            <div
              key={libro.id}
              style={{
                border: '2px solid black',
                width: '300px',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p>
                  <strong>Titolo:</strong> {libro.titolo}
                </p>
                <p>
                  <strong>Autore:</strong> {libro.autore}
                </p>
                <p>
                  <strong>Genere:</strong> {libro.genere}
                </p>
                <p>
                  <strong>Anno:</strong> {libro.anno}
                </p>
                <p>
                  <strong>Prezzo:</strong> {libro.prezzo} €
                </p>
              </div>
              <a href={libro.copertina}>
                <img src={libro.copertina} alt={libro.titolo} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
