import type {NumberInputProps} from './types.ts';

export default function NumberInput({ value, setValue }: NumberInputProps) {
  return (
    <input
      type='number'
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={(e) => setValue(parseFloat(e.target.value))}
    />
  );
}
