import Categoria from './Categoria';

export default interface Produtp {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  categoria: Categoria | null;
}