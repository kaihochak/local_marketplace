"use client"

import { FaCreditCard, FaPaypal, FaStripe } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react"
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
    /**************************************************************************
     *  React Table
     **************************************************************************/
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
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

    /**************************************************************************
     *  Modal
     **************************************************************************/
    const [opened, { open, close: closeModal }] = useDisclosure(false);
    const [step, setStep] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedServices, setSelectedServices] = useState<ServiceOffered[]>([]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const confettiProps = typeof window !== 'undefined' ? {
        width: window.innerWidth,
        height: window.innerHeight
    } : {};

    /**************************************************************************
     *  Step 1: Confirm Reservation 
     **************************************************************************/
    const ConfirmReservation = () => {
        return (
            <div>
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">1</div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">2</div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">3</div>
                </div>

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
                    <Button onClick={() => setStep(2)} variant="default">Okay</Button>
                </div>
            </div>
        )
    }

    // Calculate total price
    const calculateTotalPrice = () => {
        let total = 0;
        // convert rowSelection to array of selected services
        setSelectedServices(Object.keys(rowSelection).map(rowId => getServiceDetails(rowId)));
        selectedServices.forEach(service => total += service.price)
        setTotalPrice(total);
    }

    // Get the selected service details by rowId
    const getServiceDetails = (rowId: string) => {
        // Get the selected row data
        const selectedRow = table.getRowModel().rows.find((row) => row.id === rowId);
        return selectedRow?.original as ServiceOffered;
    };

    /**************************************************************************
     *  Step 2: Payment Screen
     **************************************************************************/
    const PaymentScreen = () => {
        return (
            <div>
                {/* <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl font-semibold my-5 text-left">Payment</h1>
                        </div> */}

                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M16.707 4.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414l7.293-7.293 7.293 7.293a1 1 0 001.414-1.414l-8-8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">2</div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">3</div>
                </div>

                {/* Payment methods section */}
                <div className="flex flex-col items-center justify-right mb-5">
                    <h2 className="text-xl font-semibold mb-3">Select Payment Method:</h2>
                    <div className="flex gap-3 w-full h-10">
                        <button onClick={handleCardPayment} className="flex items-center justify-center w-full px-4 py-2 border rounded-md shadow-sm bg-gray-200 text-gray-700  hover:bg-white">
                            <FaCreditCard className="mr-2" />
                        </button>
                        <button onClick={handleStripePayment} className="flex items-center justify-center w-full px-2 py-2 border rounded-md shadow-sm bg-gray-200 text-gray-700  hover:bg-white">
                            <FaStripe className="mr-2" />
                        </button>
                        <button onClick={handlePaypalPayment} className="flex items-center justify-center w-full px-4 py-2 border rounded-md shadow-sm bg-gray-200 text-gray-700  hover:bg-white">
                            <FaPaypal className="mr-2" />
                        </button>
                    </div>
                </div>


                {/* Payment method specific sections */}
                {selectedPaymentMethod === 'card' && (
                    <div className="flex flex-col items-center justify-center">
                        {/* Add card payment specific content here */}
                        <form className="w-full max-w-sm">
                            <div className="mb-4">
                                <label htmlFor="cardName" className="block text-gray-700 font-semibold mb-2">Cardholder's Name</label>
                                <input type="text" id="cardName" name="cardName" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter cardholder's name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">Card Number</label>
                                <input type="text" id="cardNumber" name="cardNumber" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter card number" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                                <input type="text" id="expiryDate" name="expiryDate" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="MM/YY" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">CVV</label>
                                <input type="text" id="cvv" name="cvv" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter CVV" />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Pay Now</button>
                            </div>
                        </form>
                    </div>
                )}

                {selectedPaymentMethod === 'stripe' && (
                    <div className="flex flex-col items-center justify-center">
                        {/* Add Stripe payment specific content here */}
                        <h2 className="text-lg font-semibold mb-3">Stripe Payment Section</h2>
                        <p>Use Stripe payment gateway here...</p>
                    </div>
                )}

                {selectedPaymentMethod === 'paypal' && (
                    <div className="flex flex-col items-center justify-center">
                        {/* Add Paypal payment specific content here */}
                        <h2 className="text-lg font-semibold mb-3">Paypal Payment Section</h2>
                        <p>Use Paypal payment gateway here...</p>
                    </div>
                )}
            </div>
        )
    }

    // Open modal and calculate total price
    const handleReserve = () => {
        open();
        calculateTotalPrice();
    }

    const handleCardPayment = () => {
        setSelectedPaymentMethod('card');
    }

    const handleStripePayment = () => {
        setSelectedPaymentMethod('stripe');
    }

    const handlePaypalPayment = () => {
        setSelectedPaymentMethod('paypal');
    }


    /**************************************************************************
     *  Step 3: Payment Success
     **************************************************************************/
    const PaymentSuccess = () => {
        return (
            <div>
                Payment Success
            </div>
        )
    }


    /**************************************************************************
     *  Reserve Dashboard Modal
     **************************************************************************/
    const ReserveDashboard = () => {

        return (
            <Modal
                opened={opened}
                onClose={close}
                title=""
                transitionProps={{ transition: 'fade', duration: 200 }}
            >

                {step === 1 && <ConfirmReservation />}
                {step === 2 && <PaymentScreen />}
                {step === 3 && <PaymentSuccess />}

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

    const close = () => {
        setStep(1);
        setSelectedPaymentMethod(null);
        closeModal();
    }

    /**************************************************************************
     *  Render
     **************************************************************************/
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
                <Button onClick={handleReserve} variant="default">Reserve</Button>
            </div>

            {/* Reserve Modal */}
            <ReserveDashboard />


        </div>
    )
}