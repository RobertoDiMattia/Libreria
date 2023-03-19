package la.mia.libreria.domain;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.validation.annotation.Validated;

@Table(name = "libro")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
@Entity
@ToString
@Validated
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Libro implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titolo")
    @NotBlank
    @NotEmpty
    @NotNull
    private String titolo;

    @Column(name = "autore")
    private String autore;

    @Column(name = "genere")
    private String genere;

    @Column(name = "anno")
    private Integer anno;

    @Column(name = "prezzo")
    private Double prezzo;

    @Column(name = "copertina")
    private String copertina;
}
