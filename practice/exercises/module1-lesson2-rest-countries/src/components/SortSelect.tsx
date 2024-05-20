export interface SortSelectProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}
export function SortSelect({ sortBy, setSortBy }: SortSelectProps) {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value=""></option>
        <option value="alphabetical">Name</option>
        <option value="population">Population</option>
      </select>
    </label>
  );
}

export default SortSelect;
