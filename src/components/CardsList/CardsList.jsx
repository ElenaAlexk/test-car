import { CarCard } from '../CarCard/CarCard';
import { List } from './CardList.styled';

export const CardsList = ({ cars }) => {
  return (
    <List>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </List>
  );
};
