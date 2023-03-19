package la.mia.libreria.service;

import java.util.List;
import la.mia.libreria.domain.Libro;
import la.mia.libreria.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LibriService {

    @Autowired
    private LibroRepository libriRepository;

    public List<Libro> retrieveBooks() throws NotFoundException {
        List<Libro> libri = libriRepository.findAll();
        if (libri.isEmpty()) {
            throw new NotFoundException();
        }
        return libri;
    }

    public List<Libro> retrieveFiveBooks() throws NotFoundException {
        List<Libro> libri = libriRepository.findTop5ByOrderByIdAsc();
        if (libri.isEmpty()) {
            throw new NotFoundException();
        }
        return libri;
    }

    public Libro addBooks(Libro libri) {
        String titolo = libri.getTitolo();
        if (libriRepository.findByTitolo(titolo) != null) {
            throw new RuntimeException();
        }
        return libriRepository.save(libri);
    }

    public void deleteBook(String titolo) throws NotFoundException {
        Libro libriRepositoryByTitolo = libriRepository.findByTitolo(titolo);
        if (libriRepositoryByTitolo == null) {
            throw new NotFoundException();
        }
        libriRepository.delete(libriRepositoryByTitolo);
    }

    public void deleteAllBook() {
        libriRepository.deleteAll();
    }

    public Libro retrieveSingleBook(String titolo) throws NotFoundException {
        Libro libroByTitolo = libriRepository.findByTitolo(titolo);
        if (libroByTitolo == null) {
            throw new NotFoundException();
        }
        return libroByTitolo;
    }

    public Libro modificaLibri(Long id, Libro libri) throws NotFoundException {
        libri.setId(libriRepository.findById(id).orElseThrow(NotFoundException::new).getId());
        return libriRepository.save(libri);
    }
}
