interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex items-center px-2 text-nowrap">
      <input
        type="text"
        className="w-full px-2 py-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500 dark:border
        dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
