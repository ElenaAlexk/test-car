import { CardsList } from './CardsList/CardsList';
import cars from '../advertsCars';

export const App = () => {
  return (
    <>
      <CardsList cars={cars} />
    </>
  );
};
