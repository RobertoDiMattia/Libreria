package la.mia.libreria.repository;

import java.util.List;
import la.mia.libreria.domain.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Libro entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LibroRepository extends JpaRepository<Libro, Long> {
    List<Libro> findTop5ByOrderByIdAsc();
    Libro findByTitolo(String titolo);
}
