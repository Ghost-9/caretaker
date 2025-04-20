"use client"

import * as React from "react"
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconGripVertical,
  IconLayoutColumns,
  IconPlus,
} from "@tabler/icons-react"
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

// Generic types
type WithId = { id: string }
type WithNameAndAvailability = { id: string; name: string; isAvailable?: boolean; status?: boolean }

// Storage and sync utilities
const getStorageKey = (prefix: string) => `${prefix}_data`

// const syncWithGoogleSheets = async <T>(data: T[], prefix: string) => {
//   try {
//     console.log(`Syncing ${prefix} with Google Sheets:`, data)
//     return true
//   } catch (error) {
//     console.error(`Google Sheets sync failed for ${prefix}:`, error)
//     return false
//   }
// }

// Drag Handle Component
function DragHandle({ id }: { id: string }) {
  const { attributes, listeners } = useSortable({ id })
  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent"
    >
      <IconGripVertical className="text-muted-foreground size-3" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  )
}

// Generic Edit Dialog
function GenericEditDialog<T extends WithId>({
  item,
  onSave,
  onClose,
  fields,
  secondaryData,
}: {
  item: T | null
  onSave: (updatedItem: T) => void
  onClose: () => void
  fields: { key: keyof T; label: string; type: "text" | "number" | "select"; options?: string[] }[]
  secondaryData: WithNameAndAvailability[]
}) {
  const [formData, setFormData] = React.useState<T>(item || ({} as T))

  React.useEffect(() => {
    if (item) {
      setFormData(item)
    }
  }, [item])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: keyof T
  ) => {
    setFormData({ ...formData, [key]: e.target.value })
  }

  const handleSelectChange = (value: string, key: keyof T) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = () => {
    onSave(formData)
    onClose()
  }

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {fields.map((field) => (
            <div key={String(field.key)} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={String(field.key)} className="text-right">
                {field.label}
              </Label>
              {field.type === "select" ? (
                <Select
                  name={String(field.key)}
                  value={String(formData[field.key] || "")}
                  onValueChange={(value) => handleSelectChange(value, field.key)}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={`Select ${field.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.key === "assignee" && secondaryData.length > 0
                      ? secondaryData.map((option) => (
                          <SelectItem key={option.id} value={option.name}>
                            {option.name}
                          </SelectItem>
                        ))
                      : field.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id={String(field.key)}
                  name={String(field.key)}
                  type={field.type}
                  value={String(formData[field.key] || "")}
                  onChange={(e) => handleChange(e, field.key)}
                  className="col-span-3"
                />
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Generic DataTable Component
export function GenericDataTable<T extends WithId, U extends WithNameAndAvailability>({
  data: initialData,
  secondaryData,
  columns,
  storagePrefix,
  fields,
}: {
  data: T[]
  secondaryData: U[]
  columns: (
    onEdit: (item: T) => void,
    onCopy: (item: T) => void,
    onDelete: (id: string) => void,
    secondaryData: U[]
  ) => ColumnDef<T>[]
  storagePrefix: string
  fields: { key: keyof T; label: string; type: "text" | "number" | "select"; options?: string[] }[]
}) {
  const [data, setData] = React.useState(() => {
    const stored = localStorage.getItem(getStorageKey(storagePrefix))
    return stored ? JSON.parse(stored) : initialData
  })
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [editingItem, setEditingItem] = React.useState<T | null>(null)
  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  // Save to localStorage and sync with Google Sheets
  const saveData = async (newData: T[]) => {
    setData(newData)
    localStorage.setItem(getStorageKey(storagePrefix), JSON.stringify(newData))
    const synced = await syncWithGoogleSheets(newData, storagePrefix)
    if (synced) {
      toast.success(`Data synced with Google Sheets for ${storagePrefix}`)
    } else {
      toast.error(`Failed to sync with Google Sheets for ${storagePrefix}`)
    }
  }

  // Handlers
  const handleEdit = (item: T) => {
    setEditingItem(item)
  }

  const handleCopy = (item: T) => {
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
      name: `${(item as any).name || "Item"} (Copy)`,
    }
    const newData = [...data, newItem]
    saveData(newData)
    toast.success(`Copied item ${(item as any).name || "Item"}`)
  }

  const handleDelete = (id: string) => {
    const newData = data.filter((item: { id: string }) => item.id !== id)
    saveData(newData)
    toast.success("Item deleted")
  }

  const handleSaveEdit = (updatedItem: T) => {
    const newData = data.map((item: { id: string }) => (item.id === updatedItem.id ? updatedItem : item))
    saveData(newData)
    toast.success(`Updated item ${(updatedItem as any).name || "Item"}`)
  }

  const dataIds = React.useMemo<UniqueIdentifier[]>(() => data.map(({ id } : {id: any}) => id), [data])

  const table = useReactTable({
    data,
    columns: columns(handleEdit, handleCopy, handleDelete, secondaryData),
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    meta: {
      updateData: (newData: T[]) => {
        saveData(newData)
      },
    },
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setData((data: unknown[]) => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex)
      })
    }
  }

  function DraggableRow({ row }: { row: Row<T> }) {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
      id: row.original.id,
    })

    return (
      <TableRow
        data-state={row.getIsSelected() && "selected"}
        data-dragging={isDragging}
        ref={setNodeRef}
        className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
        style={{
          transform: CSS.Transform.toString(transform),
          transition: transition,
        }}
      >
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    )
  }

  return (
    <div className="w-full flex-col justify-start gap-6">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <IconLayoutColumns />
            <span className="hidden lg:inline">Customize Filter</span>
            <span className="lg:hidden">Columns</span>
            <IconChevronDown />
          </Button>
          <Button variant="outline" size="sm">
            <IconPlus />
            <span className="hidden lg:inline">Add Item</span>
          </Button>
        </div>
      </div>
      <div className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6">
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
          >
            <Table>
              <TableHeader className="bg-muted sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Rows per page
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to first page</span>
                <IconChevronsLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <IconChevronLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <IconChevronRight />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to last page</span>
                <IconChevronsRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <GenericEditDialog
        item={editingItem}
        onSave={handleSaveEdit}
        onClose={() => setEditingItem(null)}
        fields={fields}
        secondaryData={secondaryData}
      />
    </div>
  )
}
function async<T>(data: any, arg1: any, prefix: any, string: any) {
    throw new Error("Function not implemented.")
}
async function syncWithGoogleSheets<T>(newData: T[], storagePrefix: string): Promise<boolean> {
    try {
        // Simulate an API call to sync data with Google Sheets
        console.log(`Syncing data with Google Sheets for prefix: ${storagePrefix}`, newData)
        // Replace this with actual API integration logic
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
        return true
    } catch (error) {
        console.error(`Failed to sync data with Google Sheets for prefix: ${storagePrefix}`, error)
        return false
    }
}

