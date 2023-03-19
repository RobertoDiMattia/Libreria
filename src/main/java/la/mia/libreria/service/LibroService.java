package la.mia.libreria.service;

import java.util.List;
import java.util.Optional;
import la.mia.libreria.domain.Libro;

/**
 * Service Interface for managing {@link Libro}.
 */
public interface LibroService {
    /**
     * Save a libro.
     *
     * @param libro the entity to save.
     * @return the persisted entity.
     */
    Libro save(Libro libro);

    /**
     * Updates a libro.
     *
     * @param libro the entity to update.
     * @return the persisted entity.
     */
    Libro update(Libro libro);

    /**
     * Partially updates a libro.
     *
     * @param libro the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Libro> partialUpdate(Libro libro);

    /**
     * Get all the libros.
     *
     * @return the list of entities.
     */
    List<Libro> findAll();

    /**
     * Get the "id" libro.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Libro> findOne(Long id);

    /**
     * Delete the "id" libro.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
