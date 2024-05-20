import type {Country} from '../types';

export const sortCountries = (countries: Country[], type: string ) => {
  console.log('list of countries', countries, type)
  return countries.slice().sort((a, b) => {
    if (type === 'alphabetical') {
      return a.name.common.localeCompare(b.name.common);
    } else if (type === 'population'){
      return b.population - a.population;
    } else {
      return 0;
    }
  });
}