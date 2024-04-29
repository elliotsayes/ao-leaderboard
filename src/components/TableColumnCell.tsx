import { Column } from "@tanstack/react-table"
 
import { cn } from "@/lib/utils"
import { MonoTableBody } from "./MonoTableBody";
 
interface TableColumnCellProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  content: string
}
 
export function TableColumnCell<TData, TValue>({
  column,
  content,
  className,
}: TableColumnCellProps<TData, TValue>) {
  const isScore = column.id === "score"
 
  return (
    <div className={cn("flex items-center px-2 text-nowrap", className)}>
      <MonoTableBody highlight={isScore}>
        {content}
      </MonoTableBody>
    </div>
  )
}
