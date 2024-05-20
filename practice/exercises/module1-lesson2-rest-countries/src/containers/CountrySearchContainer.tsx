import { useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { useCountries } from '../hooks/useCountries';
import NameField from '../components/NameField';
import CountryList from '../components/CountryList';
import {sortCountries} from '../util/sortCountries';
import SortSelect from '../components/SortSelect';

function CountrySearchContainer() {
  const [name, setName] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [debouncedName] = useDebounceValue(name, 500)
  const { data, isLoading, error } = useCountries(debouncedName);

  const sortedCountries = sortCountries(data, sortBy);

  return (
    <div>
      <div className='pt-3'></div>
      <h1 className="text-2xl">Country search</h1>
      <div className='pt-3'></div>
      <form className="space-x-4 flex items-end justify-center">
      <NameField name={name} setName={setName} />
      <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
      </form>

      <div className='pt-3'></div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Count not fetch country list, please try again</div>
      ) : (
        <CountryList countries={sortedCountries} />
      )}
    </div>
  );
}

export default CountrySearchContainer;
