import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

const hours = (date: Date) =>
  format(date, "iiii, dd 'de' MMMM 'de' yyyy ", {
    locale: ptBR,
  });

export function formattedDate(date: Date) {
  return hours(date);
}
