import React from 'react'

//3 TanStack Libraries!!!
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { LeaderBoardFlat, LeaderBoardFlatEntry } from '@/lib/model/table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TableColumnHeader } from './TableColumnHeader'
import { TableColumnCell } from './TableColumnCell'
import { useContainerDimensions } from '@/hooks/useContainterDimensions'

type TableVirtualizedInfinitePropProps = {
  flatData: LeaderBoardFlat;
  filterText?: string;
}

export function TableVirtualizedInfiniteProp({ flatData }: TableVirtualizedInfinitePropProps) {
  const fixedWrapperRef = React.useRef<HTMLDivElement>(null)
  const fixedWrapperDimensions = useContainerDimensions(fixedWrapperRef);
  console.log(fixedWrapperDimensions);

  //we need a reference to the scrolling element for logic down below
  const tableContainerRef = React.useRef<HTMLDivElement>(null)

  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: 'score',
      desc: true,
    },
  ])

  const columns = React.useMemo<ColumnDef<LeaderBoardFlatEntry>[]>(
    () => [
      {
        id: 'rank',
        accessorKey: 'rank',
        header: ({ column }) => <TableColumnHeader column={column} content="Rank" />,
        cell: ({ column, getValue }) => <TableColumnCell column={column} content={`${getValue() as string}.`} />,
        size: 80,
        enableSorting: false,
      },
      {
        id: 'address',
        accessorKey: 'address',
        header: ({ column }) => <TableColumnHeader column={column} content="Wallet" />,
        cell: ({ column, getValue }) => <TableColumnCell column={column} content={getValue() as string} />,
        enableSorting: false,
      },
      {
        id:'score',
        accessorKey: 'score',
        header: ({ column }) => <TableColumnHeader column={column} content="Score" />,
        cell: ({ column, getValue }) => <TableColumnCell column={column} content={getValue() as string} />,
        size: 200,
      },
    ],
    []
  )

  const table = useReactTable({
    data: flatData,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // manualSorting: true,
    debugTable: true,
  })

  //scroll to top of table when sorting changes
  const handleSortingChange: OnChangeFn<SortingState> = updater => {
    setSorting(updater)
    if (table.getRowModel().rows.length) {
      rowVirtualizer.scrollToIndex?.(0)
    }
  }

  //since this table option is derived from table row model state, we're using the table.setOptions utility
  table.setOptions(prev => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }))

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 49, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  })

  return (
    <div ref={fixedWrapperRef} className='w-full h-full'>
      <div
        ref={tableContainerRef}
        style={{
          overflow: 'auto', //our scrollable table container
          position: 'relative', //needed for sticky header
          // height: '600px', //should be a fixed height
          height: fixedWrapperDimensions.height,
        }}
      >
        {/* Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights */}
        <Table style={{ display: 'grid' }}>
          <TableHeader
            style={{
              display: 'grid',
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                style={{ display: 'flex', width: '100%' }}
                className='border-b-[1px] border-[1px] border-section-border/[8%]'
              >
                {headerGroup.headers.map(header => {
                  const isAddress = header.column.id === 'address'
                  const isScore = header.column.id ==='score'
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        display: 'flex',
                        width: header.getSize(),
                      }}
                      className={`h-10 items-end ${isAddress ? 'flex-grow' : ''} ${isScore ? 'justify-end' : ''}`}
                    >
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody
            style={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
              position: 'relative', //needed for absolute positioning of rows
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index] as Row<LeaderBoardFlatEntry>
              return (
                <TableRow
                  data-index={virtualRow.index} //needed for dynamic row height measurement
                  ref={node => rowVirtualizer.measureElement(node)} //measure dynamic row height
                  key={row.id}
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
                    width: '100%',
                  }}
                  className='justify-stretch border-section-border/[8%]'
                >
                  {row.getVisibleCells().map(cell => {
                    const isAddress = cell.column.id === 'address'
                    const isScore = cell.column.id ==='score'
                    return (
                      <TableCell
                        key={cell.id}
                        style={{
                          display: 'flex',
                          width: cell.column.getSize(),
                        }}
                        className={`px-4 py-3 ${isAddress ? 'flex-grow' : ''} ${isScore ? 'justify-end' : ''}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
