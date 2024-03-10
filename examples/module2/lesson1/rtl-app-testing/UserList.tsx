import {useState} from 'react';

interface User {
  id: number;
  name: string;
  lastName: string;
  age: number;
}

const validateForm = (name: string, lastName: string, age: number) => {
  if (name === '' || lastName === '' || age === 0) {
    return false;
  }
  return true;
};

function UserList() {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm(name, lastName, age)) {
      setError('All fields are required');
      return;
    }

    const id = users.length + 1;
    setUsers([...users, {name, lastName, age, id}]);

    setName('');
    setLastName('');
    setAge(0);
    setError('');
  };

  const handleUserDelete = (id: number) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} {user.lastName}, {user.age}
            <button onClick={() => handleUserDelete(user.id)} className='bg-rose-400 py-2 px-2 rounded-md'>Delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleOnSubmit} className='flex flex-col w-80 mt-6'>
        <input className='text-black h-10' type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        <input className='text-black h-10' type="text" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)}/>
        <input className='text-black h-10' type="number" placeholder="Age" value={age === 0 ? '' : age.toString()} onChange={e => {
          const parsedValue = parseInt(e.target.value, 10);
          setAge(isNaN(parsedValue) ? 0 : parsedValue);
        }} />
        {error && <p className='text-red-500'>{error}</p>}
        <button className='bg-emerald-500 py-2 px-2 rounded-md mt-6  w-40 self-center' type='submit'>Add</button>
      </form>
    </div>
  );
}

export default UserList;
