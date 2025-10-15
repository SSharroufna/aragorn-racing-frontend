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
import { Race } from '@/features/types';
import { useRouter } from 'next/navigation';

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
    }
];

// Accept races as a prop instead of using hardcoded data
interface RacesTableProps {
    races: Race[];
}

const RacesTable: React.FC<RacesTableProps> = ({ races }) => {
    const router = useRouter();

    const table = useReactTable({
        data: races,
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
                            onClick={() => router.push(`/track/${row.original.id}`)} // dynamic route
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
