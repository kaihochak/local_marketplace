"use client"

import { use, useEffect, useRef, useState } from "react"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Modal } from '@mantine/core';
import Confetti from 'react-confetti';
import { useDisclosure } from '@mantine/hooks';
import { ServiceOffered, columns } from "./columns"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
};

export function ServiceTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedServices, setSelectedServices] = useState<ServiceOffered[]>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    // when a row is selected, log the selected row
    useEffect(() => {
        console.log(table.getSelectedRowModel().rows)
    }, [table.getSelectedRowModel().rows])

    // const handleRowSelect = (rowId: string) => {
    //     // Get the selected row data
    //     const selectedRow = table.getRowModel().rows.find((row) => row.id === rowId);
    //     const selectedItem = selectedRow?.original as ServiceOffered;
    //     // check for duplicate, if found remove it
    //     if (selectedServices.some(service => service.id === selectedItem.id)) {
    //         setSelectedServices(selectedServices.filter(service => service.id !== selectedItem.id));
    //         return;
    //     } else {
    //         setSelectedServices([...selectedServices, selectedRow?.original as ServiceOffered]);
    //     }
    // };

    // for DEBUG
    useEffect(() => {
        // console.log(selectedServices)
    }, [selectedServices])

    const confettiProps = typeof window !== 'undefined' ? {
        width: window.innerWidth,
        height: window.innerHeight
    } : {};

    // Confirming reservation
    const ReserveDashboard = () => {

        console.log("selectedServices//");
        console.log(selectedServices);

        const [totalPrice, setTotalPrice] = useState(0);

        useEffect(() => {
            // Calculate total price when selectedServices changes
            const calculateTotalPrice = () => {
                let total = 0;
                selectedServices.forEach(service => {
                    total += service.price;
                });
                setTotalPrice(total);
            };

            calculateTotalPrice();
        }, [selectedServices]);

        return (
            <Modal
                opened={opened}
                onClose={close}
                title=""
                transitionProps={{ transition: 'fade', duration: 200 }}
            >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold my-5 text-left">Reservation Details</h1>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Service</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {selectedServices.map((service, index) => (
                            <TableRow key={index}>
                                <TableCell>{service.service}</TableCell>
                                <TableCell>{service.rating}</TableCell>
                                <TableCell>{service.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* line below table */}
                <div className="border-b my-4"></div>

                {/* Total Price */}
                <div className="flex flex-col items-end">
                    <h3 className="text-end mr-4">Total Price <span className="font-bold">{totalPrice}</span></h3>
                    <div className="border-b my-4 w-32"></div>
                </div>

                {/* okay button */}
                <div className="flex justify-end">
                    <Button onClick={close} variant="default">Okay</Button>
                </div>

                {/* show confetti */}
                {/* <Confetti
                {...confettiProps}
                numberOfPieces={500}
                recycle={false}
                initialVelocityY={10}
                initialVelocityX={10}
                colors={['#f44336', '#2196f3', '#ffeb3b', '#4caf50']}
            /> */}

            </Modal>
        )
    }

    return (
        <div className="rounded-lg border p-4">
            <div className="flex items-between px-2 gap-x-6 pt-2 pb-4">
                {/* Search bar */}
                <Input
                    placeholder="Find services..."
                    value={(table.getColumn("service")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("service")?.setFilterValue(event.target.value)
                    }
                    className="w-full"
                />
                {/* show */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Show
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Content */}
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                // onClick={() => handleRowSelect(row.id)}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Bottom */}
            <div className="flex items-center justify-end space-x-2 p-2">
                {/* # of selected service */}
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} service(s) selected.
                </div>

                {/* Reserve Button */}
                <Button onClick={open} variant="default">Reserve</Button>
            </div>

            {/* Reserve Modal */}
            <ReserveDashboard />


        </div>
    )
}