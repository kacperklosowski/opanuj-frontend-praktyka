export interface NameInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

function NameField({ name, setName }: NameInputProps) {
  return (
    <label className="flex flex-col">
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Poland..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
}

export default NameField;
