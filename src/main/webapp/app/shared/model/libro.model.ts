export interface ILibro {
  id?: number;
  titolo?: string | null;
  autore?: string | null;
  genere?: string | null;
  anno?: number | null;
  prezzo?: number | null;
  copertina?: string | null;
}

export const defaultValue: Readonly<ILibro> = {};
