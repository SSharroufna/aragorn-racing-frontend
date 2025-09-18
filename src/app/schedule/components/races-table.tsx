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
} from '@/components/ui/table';

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
    // ... (include rest of the races)
];

const columns: ColumnDef<Race>[] = [
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
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default RacesTable;