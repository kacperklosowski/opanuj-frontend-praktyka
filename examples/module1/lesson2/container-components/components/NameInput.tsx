export interface NameInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameInput = ({ name, setName }: NameInputProps) => (
  <label className="flex flex-col">
    Name
    <input
      className="border h-7 mt-1 indent-2"
      type="text"
      placeholder="Rick Sanchez..."
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </label>
);

export default NameInput;
