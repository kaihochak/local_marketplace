"use client"

import { FaCreditCard, FaPaypal, FaStripe } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ServiceOffered, columns } from "./columns"
import { Cash } from '@/public/assets/icons/Cash';
import { InteractTransfer } from '@/public/assets/icons/InteractTransfer';
import { Stripe } from '@/public/assets/icons/Stripe';
import { Paypal } from '@/public/assets/icons/Paypal';
import { Phone } from '@/public/assets/icons/Phone';
import { Mail } from '@/public/assets/icons/Mail';
import { Checkmark } from '@/public/assets/icons/Checkmark';
import ReactCurvedText from "react-curved-text";
import { Sloth } from '@/public/assets/icons/Sloth';

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
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">2</div>
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
                            {/* <TableHead>Rating</TableHead> */}
                            <TableHead>Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {selectedServices.map((service, index) => (
                            <TableRow key={index}>
                                <TableCell>{service.title}</TableCell>
                                {/* <TableCell>{service.rating}</TableCell> */}
                                <TableCell>{service.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* line below table */}
                <div className="border-b my-4"></div>

                {/* Total Price */}
                <div className="flex flex-col items-end">
                    <h3 className="text-end mr-4">Total Price <span className="font-bold">${totalPrice}</span></h3>
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
        const selectedServicesArray = Object.keys(rowSelection).map(rowId => getServiceDetails(rowId));
        setSelectedServices(selectedServicesArray);

        let total = 0;
        selectedServicesArray.forEach(service => total += service.price);
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
                {/* form progress tracker */}
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full">
                        <Checkmark className="w-4 h-4" />
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">2</div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">3</div>
                </div>

                {/* Payment methods section */}
                <h2 className="text-xl font-semibold mb-3">Select Payment Method:</h2>
                <div className="flex items-center justify-right mb-5">
                    <div className="flex flex-col gap-3 w-full">
                        <div className={`flex justify-between border p-3 rounded-md ${selectedPaymentMethod === 'inPerson' ? 'bg-gray-200' : ''}`} onClick={() => setSelectedPaymentMethod('inPerson')}>
                            <label className="ml-2">In Person</label>
                            <Cash className="w-6 h-6" />
                        </div>
                        {selectedPaymentMethod === 'inPerson' && (
                            <div className=''>
                                {/* Add in-person payment specific content here */}
                                <p className='text-center'>Pay in person at the service location</p>
                            </div>
                        )}
                        <div className={`flex justify-between border p-3 rounded-md ${selectedPaymentMethod === 'interac' ? 'bg-gray-200' : ''}`} onClick={() => setSelectedPaymentMethod('interac')}>
                            <label className="ml-2">E-Transfer</label>
                            <InteractTransfer className="w-6 h-6" />
                        </div>
                        {selectedPaymentMethod === 'interac' && (
                            <div className='flex flex-col items-center'>
                                {/* Add Interac payment specific content here */}
                                <p className="flex items-center">
                                    <Phone className="mr-2" />
                                    <span className="">+1 234 554 2343</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="mr-2" />
                                    <span className="">chrisdojacob@gmail.com</span>
                                </p>
                            </div>
                        )}
                        <div className={`flex justify-between border p-3 rounded-md ${selectedPaymentMethod === 'stripe' ? 'bg-gray-200' : ''}`} onClick={() => setSelectedPaymentMethod('stripe')}>
                            <label className="ml-2">Stripe</label>
                            <Stripe className="w-6 h-6" />
                        </div>
                        {selectedPaymentMethod === 'stripe' && (
                            <div className='text-center'>
                                {/* Add Stripe payment specific content here */}
                                <p>Stripe payment section...</p>
                            </div>
                        )}
                        <div className={`flex justify-between border p-3 rounded-md ${selectedPaymentMethod === 'paypal' ? 'bg-gray-200' : ''}`} onClick={() => setSelectedPaymentMethod('paypal')}>
                            <label className="ml-2">PayPal</label>
                            <Paypal className="w-6 h-6" />
                        </div>
                        {selectedPaymentMethod === 'paypal' && (
                            <div className='text-center'>
                                {/* Add PayPal payment specific content here */}
                                <p>PayPal payment section...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* next button  */}
                <div className="flex">
                    <Button className="w-full h-12 bg-black text-white hover:bg-white hover:text-black hover:border border-black" onClick={() => setStep(3)} variant="default">Next</Button>
                </div>


            </div>
        )
    }

    // Open modal and calculate total price
    const handleReserve = () => {
        open();
        calculateTotalPrice();
    }

    /**************************************************************************
     *  Step 3: Payment Success
     **************************************************************************/
    const PaymentSuccess = () => {
        let paymentSuccessMessage = "";
        let setrx = 140;

        // Generate different success messages based on the selected payment method
        switch (selectedPaymentMethod) {
            case "inPerson":
                paymentSuccessMessage = "Thank you for supporting this service";
                setrx = 200;
                break;
            case "interac":
                paymentSuccessMessage = "Waiting for you Interac payment...";
                setrx = 200;
                break;
            case "stripe":
                paymentSuccessMessage = "Payment Success through Stripe";
                setrx = 180;
                break;
            case "paypal":
                paymentSuccessMessage = "Payment Success through PayPal";
                setrx = 180;
                break;
            default:
                paymentSuccessMessage = "Reservation Confirmed!";
        }

        return (

            <div>
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full">
                        <Checkmark className="w-4 h-4" />
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full">
                        <Checkmark className="w-4 h-4" />
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">3</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-xl font-bold text-center">
                        <ReactCurvedText
                            width={370}
                            height={100}
                            cx={160}
                            cy={120}
                            rx={setrx}
                            ry={80}
                            startOffset={80}
                            reversed={true}
                            text={paymentSuccessMessage}
                        />
                    </div>
                    <div className="mt-4">
                        <Sloth className="w-12 h-12" />
                    </div>
                </div>
            </div>
        );
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
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
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