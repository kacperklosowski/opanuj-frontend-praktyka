import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useCountries = (name: string) => {
  return useQuery({
    queryKey: ['countries', name],
    queryFn: async () => {
      const { data } = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
      return data;
    },
    enabled: !!name,
    initialData: []
  })
};
