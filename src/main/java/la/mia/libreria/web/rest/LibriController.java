package la.mia.libreria.web.rest;

import la.mia.libreria.service.LibriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibriController {

    @Autowired
    LibriService libriService;

    @GetMapping("/trovalibro")
    public ResponseEntity<?> trovaLibri(@RequestParam String book) {
        return ResponseEntity.ok().body("ciao");
    }
    /*@GetMapping
    public List<Libro> listaLibri() {
        return libroRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Libro> dettaglioLibro(@PathVariable Long id) {
        Optional<Libro> libro = libroRepository.findById(id);
        if (libro.isPresent()) {
            return ResponseEntity.ok(libro.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Libro creaLibro(@RequestBody Libro nuovoLibro) {
        return libroRepository.save(nuovoLibro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Libro> modificaLibro(@PathVariable Long id, @RequestBody Libro libroModificato) {
        Optional<Libro> libro = libroRepository.findById(id);
        if (libro.isPresent()) {
            libroModificato.setId(id);
            libroRepository.save(libroModificato);
            return ResponseEntity.ok(libroModificato);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> cancellaLibro(@PathVariable Long id) {
        Optional<Libro> libro = libroRepository.findById(id);
        if (libro.isPresent()) {
            libroRepository.delete(libro.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/
}
