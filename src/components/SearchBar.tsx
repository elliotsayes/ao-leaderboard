import {
  MagnifyingGlassIcon,
  Cross2Icon
} from "@radix-ui/react-icons"
import { useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const hasText = value.length > 0

  return (
    <div className="group flex flex-row items-center">
      <input
        ref={inputRef}
        className={`w-full h-full px-3 py-2 text-sm bg-transparent outline-none border-solid border-2 rounded-sm group-hover:outline-section-border/10 ${hasText ? "border-section-border/40" : "border-transparent focus:border-section-border/20"}`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div
        className="relative pl-2"
        onClick={() => inputRef.current?.focus()}
      >
        <MagnifyingGlassIcon
          width={36}
          height={36}
          className="p-1 text-section-text group-hover:text-section-text/10"
        />
        {hasText && (
          <div
            className="absolute top-0 right-0 p-0.5 z-10 bg-section-background/10 rounded-sm cursor-pointer"
            onClick={() => onChange("")}
          >
            <Cross2Icon
              width={16}
              height={16}
              className="text-red-600"
            />
          </div>
        )}
      </div>
    </div>
  )
}
