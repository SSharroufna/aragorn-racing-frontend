'use client';

import * as React from 'react';
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/features/components/ui/table';
import { Eye, Download } from 'lucide-react';

export type Race = {
    id: string;
    race: string;
    date: string;
    time: string;
    distance: string;
    surface: 'dirt' | 'turf' | 'synthetic';
    purse: number;
};

const data: Race[] = [
    {
        id: 'race001',
        race: 'Kentucky Derby',
        date: '2024-05-04',
        time: '18:57',
        distance: '1.25 miles',
        surface: 'dirt',
        purse: 3000000,
    },
    {
        id: 'race002',
        race: 'Preakness Stakes',
        date: '2024-05-18',
        time: '19:01',
        distance: '1.1875 miles',
        surface: 'dirt',
        purse: 1650000,
    },
    {
        id: 'race003',
        race: 'Belmont Stakes',
        date: '2024-06-08',
        time: '17:45',
        distance: '1.5 miles',
        surface: 'dirt',
        purse: 1500000,
    },
    {
        id: 'race004',
        race: "Breeders' Cup Classic",
        date: '2024-11-02',
        time: '20:30',
        distance: '1.25 miles',
        surface: 'dirt',
        purse: 6000000,
    },
    {
        id: 'race005',
        race: 'Travers Stakes',
        date: '2024-08-24',
        time: '17:40',
        distance: '1.25 miles',
        surface: 'dirt',
        purse: 1250000,
    },
    {
        id: 'race006',
        race: 'Dubai World Cup',
        date: '2024-03-30',
        time: '19:00',
        distance: '1.25 miles',
        surface: 'dirt',
        purse: 12000000,
    },
    {
        id: 'race007',
        race: 'Royal Ascot Gold Cup',
        date: '2024-06-20',
        time: '15:20',
        distance: '2.5 miles',
        surface: 'turf',
        purse: 700000,
    },
    {
        id: 'race008',
        race: 'Epsom Derby',
        date: '2024-06-01',
        time: '16:30',
        distance: '1.5 miles',
        surface: 'turf',
        purse: 2000000,
    },
];

const columns: ColumnDef<Race>[] = [
    {
        header: 'No.',
        accessorFn: (_row, index) => index + 1,
        cell: info => (
            <span className="block">{info.getValue() as number}</span>
        ),
    },
    {
        header: 'Race',
        accessorKey: 'race',
    },
    {
        header: 'Date',
        accessorKey: 'date',
    },
    {
        header: 'Time',
        accessorKey: 'time',
    },
    {
        header: 'Distance',
        accessorKey: 'distance',
    },
    {
        header: 'Surface',
        accessorKey: 'surface',
        cell: info => (
            <span className="capitalize">{String(info.getValue())}</span>
        ),
    },
    {
        header: 'Purse',
        accessorKey: 'purse',
        cell: info =>
            `$${Number(info.getValue()).toLocaleString(undefined, {
                maximumFractionDigits: 0,
            })}`,
    },
    {
        header: 'Actions',
        id: 'actions',
        cell: info => (
            <div className="flex gap-2">
                <button
                    type="button"
                    className="hover:bg-blue-100 rounded"
                    aria-label="View"
                    onClick={() => alert(`View ${info.row.original.race}`)}
                >
                    <Eye size={18} />
                </button>
                <button
                    type="button"
                    className="hover:bg-green-100 rounded"
                    aria-label="Download"
                    onClick={() => alert(`Download ${info.row.original.race}`)}
                >
                    <Download size={18} />
                </button>
            </div>
        ),
    },
];

const RacesTable = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map(headerGroup => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map(row => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                        >
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default RacesTable;
