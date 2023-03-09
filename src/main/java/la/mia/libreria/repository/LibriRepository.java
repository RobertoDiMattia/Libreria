package la.mia.libreria.repository;

import la.mia.libreria.domain.Libri;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibriRepository extends JpaRepository<Libri, Long> {}
