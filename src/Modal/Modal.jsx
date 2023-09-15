import { IconHeart } from './CarCard.styled';

export const CarCard = ({
  car: {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
    rentalCompany,
  },
}) => {
  return (
    <div>
      <IconHeart />
      <img src={img} alt={make} width="461" height="248" />
      <h2>
        {make} {model}, {year}
      </h2>
      <div>
        <p>{address}</p>
        <p>id: {id}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
        <p>Fuel Consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <h3>Accessories and functionalities:</h3>
        <p>{accessories}</p>
        <p>{functionalities}</p>
      </div>
      <div>
        <h3>Rental Conditions:</h3>
        <p>{rentalConditions}</p>
        <p>Mileage: {mileage}</p>
        <p>Price: {rentalPrice}</p>
        <p>Rental Company: {rentalCompany}</p>
      </div>
      <button type="button">Rental car</button>
    </div>
  );
};
