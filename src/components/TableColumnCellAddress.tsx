import { Column } from "@tanstack/react-table"
 
import { cn } from "@/lib/utils"
import { MonoTableBody } from "./MonoTableBody";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  CopyIcon,
} from "@radix-ui/react-icons"
import { useCallback, useState } from "react";

export type AddressDisplayMode = "normal" | "small" | "very-small"

interface TableColumnCellAddressProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  content: string
  displayMode?: AddressDisplayMode
  showBottom?: boolean
}
 
export function TableColumnCellAddress<TData, TValue>({
  // column,
  content,
  className,
  displayMode = "normal",
  showBottom = false,
}: TableColumnCellAddressProps<TData, TValue>) {
  const displayValue = displayMode === "very-small"
    ? `${content.slice(0, 6)}...${content.slice(-4)}` 
    : (
        displayMode === "small"
        ? `${content.slice(0, 10)}...${content.slice(-8)}`
        : content
    )

  const [showCopyTooltip, setShowCopyTooltip] = useState(false)
  
  const [isCopied, setIsCopied] = useState(false)
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(content)

    setIsCopiedText(true)
    setIsCopied(true)
    setShowCopyTooltip(true)

    setTimeout(() => {
      setIsCopied(false)
      setShowCopyTooltip(false)
    }, 1000)
    
    setTimeout(() => {
      setIsCopiedText(false)
    }, 1100)
  }, [content]);

  const [isCopiedText, setIsCopiedText] = useState(false)
  const copyText = isCopiedText ? "Copied!" : "Copy"

  const addressTextComponent = (
    <MonoTableBody className="hover:underline">
      <a href={`https://www.ao.link/entity/${content}`} target="_blank" referrerPolicy="no-referrer">
        {displayValue}
      </a>
    </MonoTableBody>
  )
  
  return (
    <div className={cn("flex items-center px-2 text-nowrap z-40", className)}>
      <TooltipProvider>
        {
          displayMode === "normal" ? addressTextComponent : (
            <Tooltip>
              <TooltipTrigger>
                {addressTextComponent}
              </TooltipTrigger>
              <TooltipContent
                side={showBottom ? "bottom" : "top"}
                align="start"
                alignOffset={-80}
              >
                <MonoTableBody>
                  {content}
                </MonoTableBody>
              </TooltipContent>
            </Tooltip>
          )
        }
        <Tooltip
          open={showCopyTooltip}
          onOpenChange={(e) => {
            if (isCopied) return
            setShowCopyTooltip(e)
          }}
        >
          <TooltipTrigger>
            <button
              className="pl-2 text-table-header"
              onClick={onCopy}
            >
              <CopyIcon className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side={showBottom ? "bottom" : "top"}>
            {copyText}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
