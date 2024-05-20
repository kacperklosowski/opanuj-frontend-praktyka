import { Country } from '../types';

export interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  return (
    <>
      <h3>{country.name.common}</h3>
      <img src={country.flags.png} alt={country.flags.alt} />
    </>
  );
}

export default CountryCard;
