import { Country } from '../types';
import CountryCard from './CountryCard';

export interface CountryListProps {
  countries: Country[];
}

function CountryList({ countries }: CountryListProps) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <li className="flex flex-col items-center" key={country.cca3}>
          <CountryCard country={country} />
        </li>
      ))}
    </ol>
  );
}

export default CountryList;
