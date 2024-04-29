import {
  CaretSortIcon,
  CaretDownIcon,
  CaretUpIcon,
} from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { MonoTableHeader } from "./MonoTableHeader";
 
interface TableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  content: string
}
 
export function TableColumnHeader<TData, TValue>({
  column,
  content: title,
  className,
}: TableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return (
      <div className={cn("h-8 flex items-center space-x-2", className)}>
        <MonoTableHeader>
          {title}
        </MonoTableHeader>
      </div>
    )
  }
 
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8 data-[state=open]:bg-accent"
      >
        <MonoTableHeader>
          {title}
        </MonoTableHeader>
        {column.getIsSorted() === "desc" ? (
          <CaretDownIcon className="ml-2 h-4 w-4" />
        ) : column.getIsSorted() === "asc" ? (
          <CaretUpIcon className="ml-2 h-4 w-4" />
        ) : (
          <CaretSortIcon className="ml-2 h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
