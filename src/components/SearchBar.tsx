import {
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons"

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const hasText = value.length > 0

  return (
    <div className="group flex flex-row items-center relative">
      <input
        className={`w-full h-full pl-3 pr-10 py-2 text-sm bg-transparent outline-none border-solid border-2 rounded-sm group-hover:outline-section-border/10 ${hasText ? "border-section-border/40" : "border-transparent focus:border-section-border/20"}`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Wallet"
      />
      <MagnifyingGlassIcon
        width={32}
        height={32}
        className="absolute right-1 z-10 my-auto text-section-text group-hover:text-section-text/10 pointer-events-none"
      />
    </div>
  )
}
