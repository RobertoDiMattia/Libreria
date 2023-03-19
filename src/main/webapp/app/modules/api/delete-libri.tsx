import React, { useState } from 'react';
import axios from 'axios';

interface Libro {
  titolo: string;
}

export const DeleteLibri = () => {
  const handleDelete = async () => {
    try {
      const titolo = prompt('inserisci il titolo del libro che vuoi cancellare');
      const response = await axios.delete(`/cancellalibri?titolo=${titolo}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button style={{ borderRadius: '8px', backgroundColor: 'lightblue', fontWeight: 'bold' }} onClick={handleDelete}>
      Elimina libro
    </button>
  );
};
