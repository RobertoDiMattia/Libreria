package la.mia.libreria.web.rest;

import la.mia.libreria.domain.Libro;
import la.mia.libreria.service.LibriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@Validated
public class LibriController {

    @Autowired
    LibriService libriService;

    @GetMapping("/trovalibri")
    public ResponseEntity<?> trovaLibri() throws NotFoundException {
        try {
            return ResponseEntity.ok(libriService.retrieveBooks());
        } catch (NotFoundException e) {
            return ResponseEntity.status(204).body("Nessun libro trovato");
        }
    }

    @GetMapping("/trovacinquelibri")
    public ResponseEntity<?> trovaCinqueLibri() throws NotFoundException {
        try {
            return ResponseEntity.ok(libriService.retrieveFiveBooks());
        } catch (NotFoundException e) {
            return ResponseEntity.status(204).body("Nessun libro trovato");
        }
    }

    @GetMapping("/trovalibro")
    public ResponseEntity<?> trovaLibro(@RequestParam String titolo) throws NotFoundException {
        try {
            return ResponseEntity.ok(libriService.retrieveSingleBook(titolo));
        } catch (NotFoundException e) {
            return ResponseEntity.status(204).body("il libro non è stato trovato");
        }
    }

    @PostMapping("/crealibri")
    public ResponseEntity<?> inserisciLibro(@RequestBody Libro libri) {
        try {
            return ResponseEntity.ok(libriService.addBooks(libri));
        } catch (RuntimeException e) {
            return ResponseEntity.status(409).body("libro già esistente con il titolo scelto");
        }
    }

    @PutMapping("/modificalibri")
    public ResponseEntity<?> modificaLibro(@RequestParam Long id, @RequestBody Libro libri) throws NotFoundException {
        return ResponseEntity.ok(libriService.modificaLibri(id, libri));
    }

    @DeleteMapping("/cancellalibri")
    public ResponseEntity<String> cancellalibro(@RequestParam String titolo) throws NotFoundException {
        try {
            libriService.deleteBook(titolo);
            return ResponseEntity.ok("il libro di nome " + titolo + " è stato cancellato");
        } catch (NotFoundException e) {
            return ResponseEntity.status(404).body("nessun libro è stato trovato con nome " + titolo);
        }
    }

    @DeleteMapping("/cancellatuttilibri")
    public ResponseEntity<String> cancellatuttilibri() {
        libriService.deleteAllBook();
        return ResponseEntity.ok("tutti i libri sono stati cancellati");
    }
}
