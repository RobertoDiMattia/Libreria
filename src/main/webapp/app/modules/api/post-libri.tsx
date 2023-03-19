import React, { useState } from 'react';
import { FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
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
export const PostLibri = () => {
  const [newLibro, setNewLibro] = useState<Libro>({
    id: 0,
    titolo: '',
    autore: '',
    genere: '',
    anno: 0,
    prezzo: 0,
    copertina: '',
  });

  const [modal, setModal] = useState(false);
  const handleNewLibroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewLibro({ ...newLibro, [name]: value });
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  const handleSalvaLibro = async () => {
    try {
      const response = await axios.post('/crealibri', newLibro);
      setNewLibro({
        id: 0,
        titolo: '',
        autore: '',
        genere: '',
        anno: 0,
        prezzo: 0,
        copertina: '',
      });
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  };
  const handleModificaLibro = (id: number) => {
    setModal(true); // Apri la modale per la modifica del libro
  };

  return (
    <div>
      <button style={{ borderRadius: '8px', backgroundColor: 'lightblue', fontWeight: 'bold' }} onClick={toggleModal}>
        Aggiungi Libro
      </button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Aggiungi nuovo libro</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="titolo">Titolo</Label>
            <Input type="text" name="titolo" id="titolo" value={newLibro.titolo} onChange={handleNewLibroChange} />
          </FormGroup>
          <FormGroup>
            <Label for="autore">Autore</Label>
            <Input type="text" name="autore" id="autore" value={newLibro.autore} onChange={handleNewLibroChange} />
          </FormGroup>
          <FormGroup>
            <Label for="genere">Genere</Label>
            <Input type="text" name="genere" id="genere" value={newLibro.genere} onChange={handleNewLibroChange} />
          </FormGroup>
          <FormGroup>
            <Label for="anno">Anno</Label>
            <Input type="number" name="anno" id="anno" value={newLibro.anno} onChange={handleNewLibroChange} />
          </FormGroup>
          <FormGroup>
            <Label for="anno">Prezzo</Label>
            <Input type="number" name="prezzo" id="prezzo" value={newLibro.prezzo} onChange={handleNewLibroChange} />
          </FormGroup>
          <FormGroup>
            <Label for="copertina">Copertina</Label>
            <Input type="text" name="copertina" id="copertina" value={newLibro.copertina} onChange={handleNewLibroChange} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <button style={{ borderRadius: '8px', backgroundColor: 'lightblue', fontWeight: 'bold' }} onClick={handleSalvaLibro}>
            Salva
          </button>{' '}
          <button style={{ borderRadius: '8px', backgroundColor: 'lightblue', fontWeight: 'bold' }} onClick={toggleModal}>
            Annulla
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
