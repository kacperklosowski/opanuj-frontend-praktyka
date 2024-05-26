import {useState, useEffect} from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export function useUsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [isTimeoutError, setIsTimeoutError] = useState(false);

  async function fetchUsers() {
    try {
      const response = await axios.get<User[]>(API_URL, { timeout: 5000 });
      setUsers(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
        setIsTimeoutError(true);
      }
    }
  }

  function retryRequest() {
    setIsTimeoutError(false);
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isTimeoutError, retryRequest };
}
