package la.mia.libreria.service.impl;

import java.util.List;
import java.util.Optional;
import la.mia.libreria.domain.Libro;
import la.mia.libreria.repository.LibroRepository;
import la.mia.libreria.service.LibroService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Libro}.
 */
@Service
@Transactional
public class LibroServiceImpl implements LibroService {

    private final Logger log = LoggerFactory.getLogger(LibroServiceImpl.class);

    private final LibroRepository libroRepository;

    public LibroServiceImpl(LibroRepository libroRepository) {
        this.libroRepository = libroRepository;
    }

    @Override
    public Libro save(Libro libro) {
        log.debug("Request to save Libro : {}", libro);
        return libroRepository.save(libro);
    }

    @Override
    public Libro update(Libro libro) {
        log.debug("Request to update Libro : {}", libro);
        return libroRepository.save(libro);
    }

    @Override
    public Optional<Libro> partialUpdate(Libro libro) {
        log.debug("Request to partially update Libro : {}", libro);

        return libroRepository
            .findById(libro.getId())
            .map(existingLibro -> {
                if (libro.getTitolo() != null) {
                    existingLibro.setTitolo(libro.getTitolo());
                }
                if (libro.getAutore() != null) {
                    existingLibro.setAutore(libro.getAutore());
                }
                if (libro.getGenere() != null) {
                    existingLibro.setGenere(libro.getGenere());
                }
                if (libro.getAnno() != null) {
                    existingLibro.setAnno(libro.getAnno());
                }
                if (libro.getPrezzo() != null) {
                    existingLibro.setPrezzo(libro.getPrezzo());
                }
                if (libro.getCopertina() != null) {
                    existingLibro.setCopertina(libro.getCopertina());
                }

                return existingLibro;
            })
            .map(libroRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Libro> findAll() {
        log.debug("Request to get all Libros");
        return libroRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Libro> findOne(Long id) {
        log.debug("Request to get Libro : {}", id);
        return libroRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Libro : {}", id);
        libroRepository.deleteById(id);
    }
}
