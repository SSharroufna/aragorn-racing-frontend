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
import { Race } from '@/features/types';
import { useRouter } from 'next/navigation';

const data: Race[] = [
    {
        id: 'race001',
        race: 'Florida Downs Stakes',
        date: '2025-09-23',
        time: '12:00',
        horses: 12,
        distance: '1 mile',
        surface: 'turf',
        purse: 5000,
    },
    {
        id: 'race002',
        race: 'Sunshine Cup',
        date: '2025-09-23',
        time: '12:30',
        horses: 12,
        distance: '1.125 miles',
        surface: 'turf',
        purse: 4500,
    },
    {
        id: 'race003',
        race: 'Derby Challenge',
        date: '2025-09-23',
        time: '13:00',
        horses: 12,
        distance: '1.25 miles',
        surface: 'turf',
        purse: 6000,
    },
    {
        id: 'race004',
        race: 'Autumn Classic',
        date: '2025-09-23',
        time: '13:30',
        horses: 12,
        distance: '1 mile',
        surface: 'turf',
        purse: 3500,
    },
    {
        id: 'race005',
        race: 'Champion’s Cup',
        date: '2025-09-23',
        time: '14:00',
        horses: 12,
        distance: '1.5 miles',
        surface: 'turf',
        purse: 7000,
    },
    {
        id: 'race006',
        race: 'Florida Downs Sprint',
        date: '2025-09-23',
        time: '14:30',
        horses: 12,
        distance: '0.75 miles',
        surface: 'turf',
        purse: 3000,
    },
    {
        id: 'race007',
        race: 'Turf Masters',
        date: '2025-09-23',
        time: '15:00',
        horses: 12,
        distance: '1.125 miles',
        surface: 'turf',
        purse: 4000,
    },
    {
        id: 'race008',
        race: 'Golden Turf Stakes',
        date: '2025-09-23',
        time: '15:30',
        horses: 12,
        distance: '1.25 miles',
        surface: 'turf',
        purse: 6500,
    },
];


const columns: ColumnDef<Race>[] = [
    {
        header: 'Race #',
        accessorFn: (_row, index) => index + 1,
        cell: info => (
            <span className="block">R{info.getValue() as number}</span>
        ),
    },
    {
        header: 'Name',
        accessorKey: 'race',
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
    const router = useRouter();

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
                    <TableRow
                    key={row.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => router.push(`/track`)}
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
